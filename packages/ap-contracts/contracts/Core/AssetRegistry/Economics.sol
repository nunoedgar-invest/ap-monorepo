pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;

import "./AssetRegistryStorage.sol";
import "./AccessControl.sol";


/**
 * @title Economics
 */
contract Economics is AssetRegistryStorage, AccessControl {

    event IncrementedScheduleIndex(bytes32 indexed assetId, uint256 nextScheduleIndex);
    event UpdatedCustomTerms(bytes32 indexed assetId);
    event UpdatedState(bytes32 indexed assetId, uint256 statusDate);
    event UpdatedFinalizedState(bytes32 indexed assetId, uint256 statusDate);
    event UpdatedAnchorDate(bytes32 indexed assetId, uint256 prevAnchorDate, uint256 anchorDate);
    event UpdatedEngine(bytes32 indexed assetId, address prevEngine, address newEngine);
    event UpdatedActor(bytes32 indexed assetId, address prevActor, address newActor);


    modifier isAuthorized(bytes32 assetId) {
        require(
            msg.sender == assets[assetId].actor || hasAccess(assetId, msg.sig, msg.sender),
            "AssetRegistry.isAuthorized: UNAUTHORIZED_SENDER"
        );
        _;
    }

    /**
     * @notice Returns the terms of an asset.
     * @param assetId id of the asset
     * @return terms of the asset
     */
    function getTerms(bytes32 assetId) external view returns (LifecycleTerms memory) {
        return decodeAndGetTerms(assetId);
    }

    /**
     * @notice Returns the state of an asset.
     * @param assetId id of the asset
     * @return state of the asset
     */
    function getState(bytes32 assetId) external view returns (State memory) {
        return decodeAndGetState(assetId);
    }

    /**
     * @notice Returns the state of an asset.
     * @param assetId id of the asset
     * @return state of the asset
     */
    function getFinalizedState(bytes32 assetId) external view returns (State memory) {
        return decodeAndGetFinalizedState(assetId);
    }

    /**
     * @notice Returns the anchor date of an asset.
     * @param assetId id of the asset
     * @return Anchor date
     */
    function getAnchorDate(bytes32 assetId) external view returns (uint256) {
        return decodeAndGetAnchorDate(assetId);
    }

    /**
     * @notice Returns the address of a the ACTUS engine corresponding to the ContractType of an asset.
     * @param assetId id of the asset
     * @return address of the engine of the asset
     */
    function getEngine(bytes32 assetId) external view returns (address) {
        return assets[assetId].engine;
    }

    /**
     * @notice Returns the address of the actor which is allowed to update the state of the asset.
     * @param assetId id of the asset
     * @return address of the asset actor
     */
    function getActor(bytes32 assetId) external view returns (address) {
        return assets[assetId].actor;
    }

    /**
     * @notice Returns the id of the template which this asset is based on.
     * @param assetId id of the asset
     * @return id of the template
     */
    function getTemplateId(bytes32 assetId) external view returns (bytes32) {
        return assets[assetId].templateId;
    }

    /**
     * @notice Returns the next event to process by checking for the earliest schedule time
     * for each upcoming event of each schedule (non-cyclic, cyclic schedules). If the underlying
     * of the asset changes in performance to a covered performance, it returns the ExecutionDate event.
     * @param assetId id of the asset
     * @return event
     */
    function getNextEvent (bytes32 assetId) external view returns (bytes32) {
        LifecycleTerms memory terms = decodeAndGetTerms(assetId);

        // Underlying
        if (
            terms.contractReference_1.object != bytes32(0)
            && terms.contractReference_1.contractReferenceRole == ContractReferenceRole.CVE
        ) {
            State memory state = decodeAndGetState(assetId);
            bytes32 underlyingAssetId = terms.contractReference_1.object;
            State memory underlyingState = decodeAndGetState(underlyingAssetId);
            LifecycleTerms memory underlyingTerms = decodeAndGetTerms(underlyingAssetId);

            require(
                underlyingState.statusDate != uint256(0),
                "AssetActor.getNextEvent: ENTRY_DOES_NOT_EXIST"
            );

            // check if ExecutionDate has been triggered
            if (state.executionAmount > 0) {
                // insert SettlementDate event
                EventType nextEventType = EventType.STD;
                // solium-disable-next-line
                uint256 nextScheduleTimeOffset = block.timestamp;
                return encodeEvent(nextEventType, nextScheduleTimeOffset);
            // if not check if performance of underlying asset is covered by this asset
            } else if (underlyingState.contractPerformance == terms.creditEventTypeCovered) {
                // insert ExecutionDate event
                EventType nextEventType = EventType.XD;
                // solium-disable-next-line
                uint256 nextScheduleTimeOffset = block.timestamp;
                // derive scheduleTimeOffset from performance
                if (underlyingState.contractPerformance == ContractPerformance.DL) {
                    nextScheduleTimeOffset = underlyingState.nonPerformingDate;
                } else if (underlyingState.contractPerformance == ContractPerformance.DQ) {
                    nextScheduleTimeOffset = getTimestampPlusPeriod(underlyingTerms.gracePeriod, underlyingState.nonPerformingDate);
                } else if (underlyingState.contractPerformance == ContractPerformance.DF) {
                    nextScheduleTimeOffset = getTimestampPlusPeriod(underlyingTerms.delinquencyPeriod, underlyingState.nonPerformingDate);
                }
                return encodeEvent(nextEventType, nextScheduleTimeOffset);
            }
        }

        // TemplateSchedule events
        if (templateRegistry.getScheduleLength(assets[assetId].templateId) > 0) {
            bytes32 _event = templateRegistry.getEventAtIndex(
                assets[assetId].templateId,
                assets[assetId].nextScheduleIndex
            );
            (EventType nextEventType, uint256 nextScheduleTimeOffset) = decodeEvent(_event);

            return encodeEvent(
                nextEventType,
                applyAnchorDateToOffset(decodeAndGetAnchorDate(assetId), nextScheduleTimeOffset)
            );
        }

        return encodeEvent(EventType(0), uint256(0));
    }

    /**
     * @notice Returns the index of the next event to be processed for a schedule of an asset.
     * @param assetId id of the asset
     * @return Index
     */
    function getNextScheduleIndex(bytes32 assetId) external view returns (uint256) {
        return assets[assetId].nextScheduleIndex;
    }

    /**
     * @notice Increments the index of a schedule of an asset.
     * (if max index is reached the index will be left unchanged)
     * @dev Can only be updated by the assets actor or by an authorized account.
     * @param assetId id of the asset
     */
    function incrementScheduleIndex(bytes32 assetId) external isAuthorized (assetId) {
        uint256 scheduleIndex = assets[assetId].nextScheduleIndex;

        if (scheduleIndex == templateRegistry.getScheduleLength(assets[assetId].templateId)) {
            return;
        }

        assets[assetId].nextScheduleIndex = scheduleIndex + 1;

        emit IncrementedScheduleIndex(assetId, assets[assetId].nextScheduleIndex);
    }

    /**
     * @notice Set the custom terms of the asset
     * @dev Can only be set by authorized account.
     * @param assetId id of the asset
     * @param terms new CustomTerms
     */
    function setCustomTerms(bytes32 assetId, CustomTerms memory terms) public isAuthorized (assetId) {
        encodeAndSetTerms(assetId, terms);

        emit UpdatedCustomTerms(assetId);
    }

    /**
     * @notice Sets next state of an asset.
     * @dev Can only be updated by the assets actor or by an authorized account.
     * @param assetId id of the asset
     * @param state next state of the asset
     */
    function setState(bytes32 assetId, State memory state) public isAuthorized (assetId) {
        encodeAndSetState(assetId, state);

        emit UpdatedState(assetId, state.statusDate);
    }

    /**
     * @notice Sets next finalized state of an asset.
     * @dev Can only be updated by the assets actor or by an authorized account.
     * @param assetId id of the asset
     * @param state next state of the asset
     */
    function setFinalizedState(bytes32 assetId, State memory state) public isAuthorized (assetId) {
        encodeAndSetFinalizedState(assetId, state);

        emit UpdatedFinalizedState(assetId, state.statusDate);
    }

    /**
     * @notice Set the anchor date which should used going forward to derive dates from the template
     * (used e.g. for pausing the asset).
     * @dev Can only be set by authorized account.
     * @param assetId id of the asset
     * @param anchorDate new anchor date of the asset
     */
    function setAnchorDate(bytes32 assetId, uint256 anchorDate) public isAuthorized (assetId) {
        uint256 prevAnchorDate = decodeAndGetAnchorDate(assetId);

        encodeAndSetAnchorDate(assetId, anchorDate);

        emit UpdatedAnchorDate(assetId, prevAnchorDate, anchorDate);
    }

    /**
     * @notice Set the engine address which should be used for the asset going forward.
     * @dev Can only be set by authorized account.
     * @param assetId id of the asset
     * @param engine new engine address
     */
    function setEngine(bytes32 assetId, address engine) public isAuthorized (assetId) {
        address prevEngine = assets[assetId].engine;

        assets[assetId].engine = engine;

        emit UpdatedEngine(assetId, prevEngine, engine);
    }

    /**
     * @notice Set the address of the Actor contract which should be going forward.
     * @param assetId id of the asset
     * @param actor address of the Actor contract
     */
    function setActor(bytes32 assetId, address actor) public isAuthorized (assetId) {
        address prevActor = assets[assetId].actor;

        assets[assetId].actor = actor;

        emit UpdatedActor(assetId, prevActor, actor);
    }
}
