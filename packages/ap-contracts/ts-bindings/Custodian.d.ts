/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class Custodian extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): Custodian;
  methods: {
    cecActor(): TransactionObject<string>;

    cecRegistry(): TransactionObject<string>;

    decodeCollateralObject(
      object: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    encodeCollateralAsObject(
      collateralToken: string,
      collateralAmount: number | string
    ): TransactionObject<string>;

    lockCollateral(
      assetId: string | number[],
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        creditEventTypeCovered: number | string;
        feeBasis: number | string;
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        feeRate: number | string;
        coverageOfCreditEnhancement: number | string;
        contractReference_1: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          object2: string | number[];
          _type: number | string;
          role: number | string;
        };
      },
      ownership: {
        creatorObligor: string;
        creatorBeneficiary: string;
        counterpartyObligor: string;
        counterpartyBeneficiary: string;
      }
    ): TransactionObject<boolean>;

    returnCollateral(assetId: string | number[]): TransactionObject<boolean>;
  };
  events: {
    LockedCollateral: ContractEvent<{
      assetId: string;
      collateralizer: string;
      collateralAmount: string;
      0: string;
      1: string;
      2: string;
    }>;
    ReturnedCollateral: ContractEvent<{
      assetId: string;
      collateralizer: string;
      returnedAmount: string;
      0: string;
      1: string;
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
