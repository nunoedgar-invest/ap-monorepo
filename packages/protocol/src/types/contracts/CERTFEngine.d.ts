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

export class CERTFEngine extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): CERTFEngine;
  methods: {
    MAX_CYCLE_SIZE(): TransactionObject<string>;

    MAX_EVENT_SCHEDULE_SIZE(): TransactionObject<string>;

    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    adjustEndOfMonthConvention(
      eomc: number | string,
      startTime: number | string,
      cycle: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      }
    ): TransactionObject<string>;

    computeCyclicScheduleSegment(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        couponType: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        issueDate: number | string;
        cycleAnchorDateOfRedemption: number | string;
        cycleAnchorDateOfTermination: number | string;
        cycleAnchorDateOfCoupon: number | string;
        nominalPrice: number | string;
        issuePrice: number | string;
        quantity: number | string;
        denominationRatio: number | string;
        couponRate: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        settlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        fixingPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionExercisePeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfTermination: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfCoupon: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
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
      segmentStart: number | string,
      segmentEnd: number | string,
      eventType: number | string
    ): TransactionObject<string[]>;

    computeEventTimeForEvent(
      _event: string | number[],
      bdc: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;

    computeInitialState(terms: {
      contractType: number | string;
      calendar: number | string;
      contractRole: number | string;
      dayCountConvention: number | string;
      businessDayConvention: number | string;
      endOfMonthConvention: number | string;
      couponType: number | string;
      currency: string;
      settlementCurrency: string;
      contractDealDate: number | string;
      statusDate: number | string;
      initialExchangeDate: number | string;
      maturityDate: number | string;
      issueDate: number | string;
      cycleAnchorDateOfRedemption: number | string;
      cycleAnchorDateOfTermination: number | string;
      cycleAnchorDateOfCoupon: number | string;
      nominalPrice: number | string;
      issuePrice: number | string;
      quantity: number | string;
      denominationRatio: number | string;
      couponRate: number | string;
      gracePeriod: { i: number | string; p: number | string; isSet: boolean };
      delinquencyPeriod: {
        i: number | string;
        p: number | string;
        isSet: boolean;
      };
      settlementPeriod: {
        i: number | string;
        p: number | string;
        isSet: boolean;
      };
      fixingPeriod: { i: number | string; p: number | string; isSet: boolean };
      redemptionExercisePeriod: {
        i: number | string;
        p: number | string;
        isSet: boolean;
      };
      cycleOfRedemption: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      };
      cycleOfTermination: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      };
      cycleOfCoupon: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      };
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
    }): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    computeNextCyclicEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        couponType: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        issueDate: number | string;
        cycleAnchorDateOfRedemption: number | string;
        cycleAnchorDateOfTermination: number | string;
        cycleAnchorDateOfCoupon: number | string;
        nominalPrice: number | string;
        issuePrice: number | string;
        quantity: number | string;
        denominationRatio: number | string;
        couponRate: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        settlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        fixingPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionExercisePeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfTermination: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfCoupon: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
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
      lastScheduleTime: number | string,
      eventType: number | string
    ): TransactionObject<string>;

    computeNonCyclicScheduleSegment(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        couponType: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        issueDate: number | string;
        cycleAnchorDateOfRedemption: number | string;
        cycleAnchorDateOfTermination: number | string;
        cycleAnchorDateOfCoupon: number | string;
        nominalPrice: number | string;
        issuePrice: number | string;
        quantity: number | string;
        denominationRatio: number | string;
        couponRate: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        settlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        fixingPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionExercisePeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfTermination: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfCoupon: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
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
      segmentStart: number | string,
      segmentEnd: number | string
    ): TransactionObject<string[]>;

    computePayoffForEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        couponType: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        issueDate: number | string;
        cycleAnchorDateOfRedemption: number | string;
        cycleAnchorDateOfTermination: number | string;
        cycleAnchorDateOfCoupon: number | string;
        nominalPrice: number | string;
        issuePrice: number | string;
        quantity: number | string;
        denominationRatio: number | string;
        couponRate: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        settlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        fixingPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionExercisePeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfTermination: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfCoupon: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
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
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      _event: string | number[],
      externalData: string | number[]
    ): TransactionObject<string>;

    computeStateForEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        couponType: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        issueDate: number | string;
        cycleAnchorDateOfRedemption: number | string;
        cycleAnchorDateOfTermination: number | string;
        cycleAnchorDateOfCoupon: number | string;
        nominalPrice: number | string;
        issuePrice: number | string;
        quantity: number | string;
        denominationRatio: number | string;
        couponRate: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        settlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        fixingPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionExercisePeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfTermination: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfCoupon: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
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
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      _event: string | number[],
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    contractType(): TransactionObject<string>;

    decodeEvent(
      _event: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    encodeEvent(
      eventType: number | string,
      scheduleTime: number | string
    ): TransactionObject<string>;

    getEpochOffset(eventType: number | string): TransactionObject<string>;

    isEventScheduled(
      arg0: string | number[],
      arg1: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        couponType: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        issueDate: number | string;
        cycleAnchorDateOfRedemption: number | string;
        cycleAnchorDateOfTermination: number | string;
        cycleAnchorDateOfCoupon: number | string;
        nominalPrice: number | string;
        issuePrice: number | string;
        quantity: number | string;
        denominationRatio: number | string;
        couponRate: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        settlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        fixingPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionExercisePeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfTermination: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfCoupon: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
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
      arg2: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      arg3: boolean,
      arg4: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      }
    ): TransactionObject<boolean>;

    shiftCalcTime(
      timestamp: number | string,
      convention: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;

    shiftEventTime(
      timestamp: number | string,
      convention: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
