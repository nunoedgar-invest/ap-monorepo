pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

import "../SharedTypes.sol";


abstract contract IAssetActor is SharedTypes {

    function progress(bytes32 assetId)
        external
        virtual;

    function initialize(
        bytes32 assetId,
        AssetOwnership memory ownership,
        bytes32 templateId,
        CustomTerms memory customTerms,
        address engine
    )
        public
        virtual
        returns (bool);
}
