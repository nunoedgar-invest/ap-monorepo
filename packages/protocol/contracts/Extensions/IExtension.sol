// "SPDX-License-Identifier: Apache-2.0"
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;


interface IExtension {

    /**
     * @notice Returns an unscheduled event generated by the Extension.
     * @dev Should be callable by the Asset Actor.
     * @param assetId Id of the asset
     * @return event
     */
    function onProgress(bytes32 assetId) external returns (bytes32);
}