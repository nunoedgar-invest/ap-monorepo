// "SPDX-License-Identifier: Apache-2.0"
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "../../ACTUS/Engines/CERTF/ICERTFEngine.sol";

import "../Base/AssetActor/BaseActor.sol";
import "./ICERTFRegistry.sol";


/**
 * @title CERTFActor
 * @notice TODO
 */
contract CERTFActor is BaseActor {

    using SignedMath for int;


    constructor(
        IAssetRegistry assetRegistry,
        IObserverOracleProxy defaultOracleProxy
    ) BaseActor(assetRegistry, defaultOracleProxy) {}

    /**
     * @notice Derives initial state of the asset terms and stores together with
     * terms, schedule, ownership, engine, admin of the asset in the contract types specific AssetRegistry.
     * @param terms asset specific terms
     * @param schedule schedule of the asset
     * @param ownership ownership of the asset
     * @param engine address of the ACTUS engine used for the spec. ContractType
     * @param admin address of the admin of the asset (optional)
     * @param extension address of the extension (optional)
     */
    function initialize(
        CERTFTerms calldata terms,
        bytes32[] calldata schedule,
        AssetOwnership calldata ownership,
        address engine,
        address admin,
        address extension
    )
        external
    {
        require(
            engine != address(0) && IEngine(engine).contractType() == ContractType.CERTF,
            "CERTFActor.initialize: CONTRACT_TYPE_OF_ENGINE_UNSUPPORTED"
        );

        // solium-disable-next-line
        bytes32 assetId = keccak256(abi.encode(terms, block.timestamp));

        // compute the initial state of the asset
        State memory initialState = ICERTFEngine(engine).computeInitialState(terms);

        // register the asset in the AssetRegistry
        ICERTFRegistry(address(assetRegistry)).registerAsset(
            assetId,
            terms,
            initialState,
            schedule,
            ownership,
            engine,
            address(this),
            admin,
            extension
        );

        emit InitializedAsset(assetId, ContractType.CEG, ownership.creatorObligor, ownership.counterpartyObligor);
    }

    function computeStateAndPayoffForEvent(bytes32 assetId, State memory state, bytes32 _event)
        internal
        view
        override
        returns (State memory, int256)
    {
        address engine = assetRegistry.getEngine(assetId);
        CERTFTerms memory terms = ICERTFRegistry(address(assetRegistry)).getTerms(assetId);
        (EventType eventType, uint256 scheduleTime) = decodeEvent(_event);

        int256 payoff = ICERTFEngine(engine).computePayoffForEvent(
            terms,
            state,
            _event,
            getExternalDataForPOF(
                assetId,
                eventType,
                shiftCalcTime(scheduleTime, terms.businessDayConvention, terms.calendar, terms.maturityDate)
            )
        );
        state = ICERTFEngine(engine).computeStateForEvent(
            terms,
            state,
            _event,
            getExternalDataForSTF(
                assetId,
                eventType,
                shiftCalcTime(scheduleTime, terms.businessDayConvention, terms.calendar, terms.maturityDate)
            )
        );

        return (state, payoff);
    }

    /**
     * @notice Retrieves external data (such as market object data, block time, underlying asset state)
     * used for evaluating the STF for a given event.
     */
    function getExternalDataForSTF(
        bytes32 assetId,
        EventType eventType,
        uint256 timestamp
    )
        internal
        view
        override
        returns (bytes memory)
    {
        if (eventType == EventType.CE) {
            // get current timestamp
            // solium-disable-next-line
            return abi.encode(block.timestamp);
        } else if (eventType == EventType.EXE) {
            // get quantity
            ContractReference memory contractReference_2 = assetRegistry.getContractReferenceValueForTermsAttribute(
                assetId,
                "contractReference_2"
            );
            if (
                contractReference_2._type == ContractReferenceType.MOC
                && contractReference_2.role == ContractReferenceRole.UDL
            ) {
                (int256 quantity, bool isSet) = defaultOracleProxy.getDataPoint(
                    contractReference_2.object,
                    timestamp
                );
                if (isSet) return abi.encode(quantity);
            }
        } else if (eventType == EventType.REF) {
            ContractReference memory contractReference_1 = assetRegistry.getContractReferenceValueForTermsAttribute(
                assetId,
                "contractReference_1"
            );
            if (
                contractReference_1._type == ContractReferenceType.MOC
                && contractReference_1.role == ContractReferenceRole.UDL
            ) {
                (int256 marketValueScheduleTime, bool isSetScheduleTime) = defaultOracleProxy.getDataPoint(
                    contractReference_1.object,
                    timestamp
                );
                (int256 marketValueAnchorDate, bool isSetAnchorDate) = defaultOracleProxy.getDataPoint(
                    contractReference_1.object,
                    assetRegistry.getUIntValueForTermsAttribute(assetId, "issueDate")
                );
                if (isSetScheduleTime && isSetAnchorDate) {
                    return abi.encode(marketValueScheduleTime.floatDiv(marketValueAnchorDate));
                }
            }
        }

        return new bytes(0);
    }
}