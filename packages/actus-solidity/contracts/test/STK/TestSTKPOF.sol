// "SPDX-License-Identifier: Apache-2.0"
pragma solidity ^0.6.11;
pragma experimental ABIEncoderV2;

import "../../Engines/STK/STKPOF.sol";


/**
* These helper contracts expose internal functions for unit testing.
*/
contract TestSTKPOF is STKPOF {


    function _POF_STK_DPD(
        STKTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
    public
    pure
    returns (int256)
    {
        return POF_STK_DPD(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _POF_STK_RPD(
        STKTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
    public
    pure
    returns (int256)
    {
        return POF_STK_RPD(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _POF_STK_TD(
        STKTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
    public
    pure
    returns (int256)
    {
        return POF_STK_TD(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

}
