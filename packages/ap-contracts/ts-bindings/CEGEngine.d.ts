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

export class CEGEngine extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): CEGEngine;
  methods: {
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

    computePayoffForEvent(
      terms: {
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        creditEventTypeCovered: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        feeAccrued: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        feeRate: number | string;
        nextResetRate: number | string;
        penaltyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        nextPrincipalRedemptionPayment: number | string;
        coverageOfCreditEnhancement: number | string;
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
        contractReference_1: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
        contractReference_2: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        executionDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        executionAmount: number | string;
      },
      _event: string | number[],
      externalData: string | number[]
    ): TransactionObject<string>;

    computeStateForEvent(
      terms: {
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        creditEventTypeCovered: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        feeAccrued: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        feeRate: number | string;
        nextResetRate: number | string;
        penaltyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        nextPrincipalRedemptionPayment: number | string;
        coverageOfCreditEnhancement: number | string;
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
        contractReference_1: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
        contractReference_2: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        executionDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        executionAmount: number | string;
      },
      _event: string | number[],
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      executionDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      executionAmount: string;
    }>;

    ONE_POINT_ZERO(): TransactionObject<string>;

    decodeEvent(
      _event: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    getEpochOffset(eventType: number | string): TransactionObject<string>;

    computeEventTimeForEvent(
      _event: string | number[],
      terms: {
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        creditEventTypeCovered: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        feeAccrued: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        feeRate: number | string;
        nextResetRate: number | string;
        penaltyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        nextPrincipalRedemptionPayment: number | string;
        coverageOfCreditEnhancement: number | string;
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
        contractReference_1: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
        contractReference_2: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
      }
    ): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    encodeEvent(
      eventType: number | string,
      scheduleTime: number | string
    ): TransactionObject<string>;

    computeInitialState(terms: {
      calendar: number | string;
      contractRole: number | string;
      dayCountConvention: number | string;
      businessDayConvention: number | string;
      endOfMonthConvention: number | string;
      scalingEffect: number | string;
      penaltyType: number | string;
      feeBasis: number | string;
      creditEventTypeCovered: number | string;
      currency: string;
      settlementCurrency: string;
      marketObjectCodeRateReset: string | number[];
      statusDate: number | string;
      maturityDate: number | string;
      notionalPrincipal: number | string;
      nominalInterestRate: number | string;
      feeAccrued: number | string;
      accruedInterest: number | string;
      rateMultiplier: number | string;
      rateSpread: number | string;
      feeRate: number | string;
      nextResetRate: number | string;
      penaltyRate: number | string;
      premiumDiscountAtIED: number | string;
      priceAtPurchaseDate: number | string;
      nextPrincipalRedemptionPayment: number | string;
      coverageOfCreditEnhancement: number | string;
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
      contractReference_1: {
        object: string | number[];
        contractReferenceType: number | string;
        contractReferenceRole: number | string;
      };
      contractReference_2: {
        object: string | number[];
        contractReferenceType: number | string;
        contractReferenceRole: number | string;
      };
    }): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      executionDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      executionAmount: string;
    }>;

    computeNonCyclicScheduleSegment(
      terms: {
        scalingEffect: number | string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        terminationDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        cycleAnchorDateOfPrincipalRedemption: number | string;
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
        cycleOfPrincipalRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
      },
      segmentStart: number | string,
      segmentEnd: number | string
    ): TransactionObject<string[]>;

    computeCyclicScheduleSegment(
      terms: {
        scalingEffect: number | string;
        contractDealDate: number | string;
        statusDate: number | string;
        initialExchangeDate: number | string;
        maturityDate: number | string;
        terminationDate: number | string;
        purchaseDate: number | string;
        capitalizationEndDate: number | string;
        cycleAnchorDateOfInterestPayment: number | string;
        cycleAnchorDateOfRateReset: number | string;
        cycleAnchorDateOfScalingIndex: number | string;
        cycleAnchorDateOfFee: number | string;
        cycleAnchorDateOfPrincipalRedemption: number | string;
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
        cycleOfPrincipalRedemption: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
      },
      segmentStart: number | string,
      segmentEnd: number | string,
      eventType: number | string
    ): TransactionObject<string[]>;

    isEventScheduled(
      _event: string | number[],
      terms: {
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        creditEventTypeCovered: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        feeAccrued: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        feeRate: number | string;
        nextResetRate: number | string;
        penaltyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        nextPrincipalRedemptionPayment: number | string;
        coverageOfCreditEnhancement: number | string;
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
        contractReference_1: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
        contractReference_2: {
          object: string | number[];
          contractReferenceType: number | string;
          contractReferenceRole: number | string;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        executionDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        executionAmount: number | string;
      },
      hasUnderlying: boolean,
      underlyingState: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        executionDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        executionAmount: number | string;
      }
    ): TransactionObject<boolean>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
