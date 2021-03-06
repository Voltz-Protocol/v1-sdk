/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRocketEth, MockRocketEthInterface } from "../MockRocketEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rethAmount",
        type: "uint256",
      },
    ],
    name: "getEthValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rethMultiplier",
        type: "uint256",
      },
    ],
    name: "setRethMultiplierInRay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526b033b2e3c9fd0803ce800000060005534801561002057600080fd5b5061012d806100306000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638b32fa23146037578063ea764620146058575b600080fd5b604660423660046092565b606a565b60405190815260200160405180910390f35b606860633660046092565b600055565b005b6000676765c793fa10079d601b1b600054836084919060aa565b608c919060d6565b92915050565b60006020828403121560a357600080fd5b5035919050565b600081600019048311821515161560d157634e487b7160e01b600052601160045260246000fd5b500290565b60008260f257634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220ac254068ea097ea61346b08d4c79872996d7d0b2ef36045c75f515c8732c65e564736f6c63430008090033";

export class MockRocketEth__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockRocketEth> {
    return super.deploy(overrides || {}) as Promise<MockRocketEth>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockRocketEth {
    return super.attach(address) as MockRocketEth;
  }
  connect(signer: Signer): MockRocketEth__factory {
    return super.connect(signer) as MockRocketEth__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRocketEthInterface {
    return new utils.Interface(_abi) as MockRocketEthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRocketEth {
    return new Contract(address, _abi, signerOrProvider) as MockRocketEth;
  }
}
