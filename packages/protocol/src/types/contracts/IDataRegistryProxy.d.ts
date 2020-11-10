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

export class IDataRegistryProxy extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): IDataRegistryProxy;
  methods: {
    getDataPoint(
      setId: string | number[],
      timestamp: number | string
    ): TransactionObject<{
      0: string;
      1: boolean;
    }>;

    getDataProvider(setId: string | number[]): TransactionObject<string>;

    getLastUpdatedTimestamp(
      setId: string | number[]
    ): TransactionObject<string>;

    isRegistered(setId: string | number[]): TransactionObject<boolean>;

    publishDataPoint(
      setId: string | number[],
      timestamp: number | string,
      dataPoint: number | string
    ): TransactionObject<void>;

    setDataProvider(
      setId: string | number[],
      provider: string
    ): TransactionObject<void>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
