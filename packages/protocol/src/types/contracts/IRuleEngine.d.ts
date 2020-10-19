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

export class IRuleEngine extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): IRuleEngine;
  methods: {
    detectTransferRestriction(
      _from: string,
      _to: string,
      _value: number | string
    ): TransactionObject<string>;

    messageForTransferRestriction(
      _restrictionCode: number | string
    ): TransactionObject<string>;

    rule(ruleId: number | string): TransactionObject<string>;

    ruleLength(): TransactionObject<string>;

    rules(): TransactionObject<string[]>;

    setRules(rules: string[]): TransactionObject<void>;

    validateTransfer(
      _from: string,
      _to: string,
      _amount: number | string
    ): TransactionObject<boolean>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
