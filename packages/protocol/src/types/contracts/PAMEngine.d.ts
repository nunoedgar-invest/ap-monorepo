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

export class PAMEngine extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): PAMEngine;
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
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
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
      scalingEffect: number | string;
      penaltyType: number | string;
      feeBasis: number | string;
      currency: string;
      settlementCurrency: string;
      marketObjectCodeRateReset: string | number[];
      contractDealDate: number | string;
      statusDate: number | string;
      initialExchangeDate: number | string;
      maturityDate: number | string;
      purchaseDate: number | string;
      capitalizationEndDate: number | string;
      cycleAnchorDateOfInterestPayment: number | string;
      cycleAnchorDateOfRateReset: number | string;
      cycleAnchorDateOfScalingIndex: number | string;
      cycleAnchorDateOfFee: number | string;
      notionalPrincipal: number | string;
      nominalInterestRate: number | string;
      accruedInterest: number | string;
      rateMultiplier: number | string;
      rateSpread: number | string;
      nextResetRate: number | string;
      feeRate: number | string;
      feeAccrued: number | string;
      penaltyRate: number | string;
      delinquencyRate: number | string;
      premiumDiscountAtIED: number | string;
      priceAtPurchaseDate: number | string;
      lifeCap: number | string;
      lifeFloor: number | string;
      periodCap: number | string;
      periodFloor: number | string;
      gracePeriod: { i: number | string; p: number | string; isSet: boolean };
      delinquencyPeriod: {
        i: number | string;
        p: number | string;
        isSet: boolean;
      };
      cycleOfInterestPayment: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      };
      cycleOfRateReset: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      };
      cycleOfScalingIndex: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      };
      cycleOfFee: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
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
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      lastScheduleTime: number | string,
      eventType: number | string
    ): TransactionObject<string>;

    computeNextNonCyclicEvent(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      lastNonCyclicEvent: string | number[]
    ): TransactionObject<string>;

    computeNonCyclicScheduleSegment(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
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
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
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
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
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
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        nextResetRate: number | string;
        feeRate: number | string;
        feeAccrued: number | string;
        penaltyRate: number | string;
        delinquencyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfInterestPayment: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfRateReset: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfScalingIndex: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        cycleOfFee: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
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
