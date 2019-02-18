import Web3 from 'web3';
import BigNumber from 'bignumber.js';

import { ContractTerms, ContractState, ContractEvent } from '../types';
import { Contract } from 'web3-eth-contract/types';

const PAMStatelessContractArtifact: any = require('../../../afp-contracts/build/contracts/PAMStatelessContract.json');


export class PAMStatelessContract {
  private statelessContract: Contract;

  constructor (statelessContractInstance: Contract) {    
    this.statelessContract = statelessContractInstance;
  }

  public async getPrecision () {
    const precision: number = await this.statelessContract.methods.precision().call();
    return precision;
  }

  public async computeFirstState (contractTerms: ContractTerms) {
    const { 0: contractState }: { 0: ContractState, 1: any } = 
      await this.statelessContract.methods.initializeContract(contractTerms).call();
    return contractState;
  }

  public async computeNextState (
    contractTerms: ContractTerms, 
    contractState: ContractState, 
    timestamp: number
  ) {
    const response = await this.statelessContract.methods.getNextState(
      contractTerms,
      contractState,
      timestamp
    ).call();

    const nextContractState: ContractState = response[0];
    const evaluatedEvents: any = response[1];

    return { nextContractState, evaluatedEvents };
  }

  public async computeNextStateForEvent (
    contractTerms: ContractTerms, 
    contractState: ContractState, 
    contractEvent: ContractEvent, 
    timestamp: number
  ) {
    const response = await this.statelessContract.methods.getNextState(
      contractTerms,
      contractState,
      contractEvent,
      timestamp
    ).call();

    const postContractState = response[0];
    const evaluatedContractEvent = response[1];

    return { postContractState, evaluatedContractEvent };
  }

  public async computeSchedule (contractTerms: ContractTerms) {
    const contractEventSchedule = await this.statelessContract.methods.computeContractEventSchedule(
      contractTerms
    ).call();

    return contractEventSchedule;
  }

  public async computeScheduleSegment (contractTerms: ContractTerms, startTimestamp: number, endTimestamp: number) {
    const pendingContractEventSchedule = await this.statelessContract.methods.computeContractEventScheduleSegment(
      contractTerms,
      startTimestamp,
      endTimestamp
    ).call();

    return pendingContractEventSchedule;
  }

  public async evaluateSchedule (contractTerms: ContractTerms, contractState: ContractState, contractEventSchedule: any) {
    const evaluatedContractEventSchedule = [];

    for (let i = 0; i < 20; i++) {
      if (contractEventSchedule[i][1] === '0') { break; }

      const contractEvent = {
        scheduledTime: contractEventSchedule[i][1],
        eventType: contractEventSchedule[i][0],
        currency: 0,
        payOff: new BigNumber(0),
        actualEventTime: 0
      };

      const { postContractState, evaluatedContractEvent } = await this.computeNextStateForEvent(
        contractTerms,
        contractState,
        contractEvent,
        contractEventSchedule[i][1]
      );

      evaluatedContractEventSchedule.push({ postContractState, evaluatedContractEvent });
      contractState = postContractState;
    }

    return evaluatedContractEventSchedule;
  }

  public static async instantiate (web3: Web3) {
    const chainId = await web3.eth.net.getId();
    const statelessContractInstance = new web3.eth.Contract(
      PAMStatelessContractArtifact.abi,
      PAMStatelessContractArtifact.networks[chainId].address
    );

    return new PAMStatelessContract(statelessContractInstance);
  }
}
