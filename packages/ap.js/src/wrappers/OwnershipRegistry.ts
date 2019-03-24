import Web3 from 'web3';

import { Contract, SendOptions } from 'web3-eth-contract/types';
import { toHex } from '../utils/Utils';
import { ContractOwnership } from '../types';

const OwnershipRegistryArtifact: any = require('../../../ap-contracts/build/contracts/OwnershipRegistry.json');

export class OwnershipRegistry {
  private ownershipRegistry: Contract;

  private constructor (ownershipRegistryInstance: Contract) {
    this.ownershipRegistry = ownershipRegistryInstance
  }

  public async registerOwnership (
    assetId: string,
    recordCreatorObligorAddress: string,
    recordCreatorBeneficiaryAddress: string,
    counterpartyObligorAddress: string,
    counterpartyBeneficiaryAddress: string,
    txOptions?: SendOptions
  ): Promise<void> {
    await this.ownershipRegistry.methods.registerOwnership(
      toHex(assetId), 
      recordCreatorObligorAddress,
      recordCreatorBeneficiaryAddress,
      counterpartyObligorAddress,
      counterpartyBeneficiaryAddress
    ).send({ ...txOptions });
  }

  public async setBeneficiaryForCashflowId (
    assetId: string, 
    cashflowId: number, 
    beneficiaryAddress: string,
    txOptions?: SendOptions
  ): Promise<void> {
    await this.ownershipRegistry.methods.setBeneficiaryForCashflowId(
      toHex(assetId),
      cashflowId,
      beneficiaryAddress
    ).send({ ...txOptions });
  }

  public async getContractOwnership (assetId: string): Promise<ContractOwnership> {
    const { 
      0: recordCreatorObligorAddress, 
      1: recordCreatorBeneficiaryAddress, 
      2: counterpartyObligorAddress, 
      3: counterpartyBeneficiaryAddress 
    } : { 
      0: string, 
      1: string, 
      2: string, 
      3: string 
    } = await this.ownershipRegistry.methods.getContractOwnership(toHex(assetId)).call();

    return { 
      recordCreatorObligorAddress, 
      recordCreatorBeneficiaryAddress, 
      counterpartyObligorAddress, 
      counterpartyBeneficiaryAddress 
    };
  }

  public async getCashflowBeneficiary (assetId: string, cashflowId: number): Promise<string> {
    const beneficiary: string = await this.ownershipRegistry.methods.getCashflowBeneficiary(toHex(assetId), cashflowId).call();
    return beneficiary;
  }

  public static async instantiate (web3: Web3): Promise<OwnershipRegistry> {
    const chainId = await web3.eth.net.getId();
    const ownershipRegistryInstance = new web3.eth.Contract(
      OwnershipRegistryArtifact.abi,
      OwnershipRegistryArtifact.networks[chainId].address
    );

    return new OwnershipRegistry(ownershipRegistryInstance);
  }
}