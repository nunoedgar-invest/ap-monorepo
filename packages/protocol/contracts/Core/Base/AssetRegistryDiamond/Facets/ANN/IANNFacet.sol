// "SPDX-License-Identifier: Apache-2.0"
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "../../../SharedTypes.sol";


interface IANNFacet {

    function registerANNAsset(
        bytes32 assetId,
        ANNTerms calldata terms,
        State calldata state,
        bytes32[] calldata schedule,
        AssetOwnership calldata ownership,
        address engine,
        address actor,
        address admin
    )
        external;

    function getANNTerms(bytes32 assetId)
        external
        view
        returns (ANNTerms memory);

    function setANNTerms(bytes32 assetId, ANNTerms calldata terms)
        external;

    function getNextComputedANNEvent(bytes32 assetId)
        external
        view
        returns (bytes32, bool);
}
