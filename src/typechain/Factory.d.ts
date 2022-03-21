/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FactoryInterface extends ethers.utils.Interface {
  functions: {
    "deployIrsInstance(address,address,uint256,uint256,int24)": FunctionFragment;
    "isApproved(address,address)": FunctionFragment;
    "masterFCMs(uint8)": FunctionFragment;
    "masterMarginEngine()": FunctionFragment;
    "masterVAMM()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApproval(address,bool)": FunctionFragment;
    "setMasterFCM(address,uint8)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployIrsInstance",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApproved",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "masterFCMs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "masterMarginEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "masterVAMM",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApproval",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMasterFCM",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployIrsInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "masterFCMs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "masterMarginEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "masterVAMM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMasterFCM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalSet(address,address,bool)": EventFragment;
    "IrsInstanceDeployed(address,address,uint256,uint256,int24,address,address,address,uint8)": EventFragment;
    "MasterFCMSet(address,address,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IrsInstanceDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MasterFCMSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ApprovalSetEvent = TypedEvent<
  [string, string, boolean] & {
    owner: string;
    intAddress: string;
    isApproved: boolean;
  }
>;

export type IrsInstanceDeployedEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    number
  ] & {
    underlyingToken: string;
    rateOracle: string;
    termStartTimestampWad: BigNumber;
    termEndTimestampWad: BigNumber;
    tickSpacing: number;
    marginEngine: string;
    vamm: string;
    fcm: string;
    yieldBearingProtocolID: number;
  }
>;

export type MasterFCMSetEvent = TypedEvent<
  [string, string, number] & {
    masterFCMAddressOld: string;
    masterFCMAddress: string;
    yieldBearingProtocolID: number;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FactoryInterface;

  functions: {
    deployIrsInstance(
      _underlyingToken: string,
      _rateOracle: string,
      _termStartTimestampWad: BigNumberish,
      _termEndTimestampWad: BigNumberish,
      _tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    masterFCMs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    masterMarginEngine(overrides?: CallOverrides): Promise<[string]>;

    masterVAMM(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApproval(
      intAddress: string,
      allowIntegration: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMasterFCM(
      masterFCM: string,
      yieldBearingProtocolID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployIrsInstance(
    _underlyingToken: string,
    _rateOracle: string,
    _termStartTimestampWad: BigNumberish,
    _termEndTimestampWad: BigNumberish,
    _tickSpacing: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApproved(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  masterFCMs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  masterMarginEngine(overrides?: CallOverrides): Promise<string>;

  masterVAMM(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApproval(
    intAddress: string,
    allowIntegration: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMasterFCM(
    masterFCM: string,
    yieldBearingProtocolID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployIrsInstance(
      _underlyingToken: string,
      _rateOracle: string,
      _termStartTimestampWad: BigNumberish,
      _termEndTimestampWad: BigNumberish,
      _tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        marginEngineProxy: string;
        vammProxy: string;
        fcmProxy: string;
      }
    >;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    masterFCMs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    masterMarginEngine(overrides?: CallOverrides): Promise<string>;

    masterVAMM(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApproval(
      intAddress: string,
      allowIntegration: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setMasterFCM(
      masterFCM: string,
      yieldBearingProtocolID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ApprovalSet(address,address,bool)"(
      owner?: string | null,
      intAddress?: string | null,
      isApproved?: boolean | null
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; intAddress: string; isApproved: boolean }
    >;

    ApprovalSet(
      owner?: string | null,
      intAddress?: string | null,
      isApproved?: boolean | null
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; intAddress: string; isApproved: boolean }
    >;

    "IrsInstanceDeployed(address,address,uint256,uint256,int24,address,address,address,uint8)"(
      underlyingToken?: string | null,
      rateOracle?: string | null,
      termStartTimestampWad?: null,
      termEndTimestampWad?: null,
      tickSpacing?: null,
      marginEngine?: null,
      vamm?: null,
      fcm?: null,
      yieldBearingProtocolID?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        number
      ],
      {
        underlyingToken: string;
        rateOracle: string;
        termStartTimestampWad: BigNumber;
        termEndTimestampWad: BigNumber;
        tickSpacing: number;
        marginEngine: string;
        vamm: string;
        fcm: string;
        yieldBearingProtocolID: number;
      }
    >;

    IrsInstanceDeployed(
      underlyingToken?: string | null,
      rateOracle?: string | null,
      termStartTimestampWad?: null,
      termEndTimestampWad?: null,
      tickSpacing?: null,
      marginEngine?: null,
      vamm?: null,
      fcm?: null,
      yieldBearingProtocolID?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        number
      ],
      {
        underlyingToken: string;
        rateOracle: string;
        termStartTimestampWad: BigNumber;
        termEndTimestampWad: BigNumber;
        tickSpacing: number;
        marginEngine: string;
        vamm: string;
        fcm: string;
        yieldBearingProtocolID: number;
      }
    >;

    "MasterFCMSet(address,address,uint8)"(
      masterFCMAddressOld?: null,
      masterFCMAddress?: null,
      yieldBearingProtocolID?: null
    ): TypedEventFilter<
      [string, string, number],
      {
        masterFCMAddressOld: string;
        masterFCMAddress: string;
        yieldBearingProtocolID: number;
      }
    >;

    MasterFCMSet(
      masterFCMAddressOld?: null,
      masterFCMAddress?: null,
      yieldBearingProtocolID?: null
    ): TypedEventFilter<
      [string, string, number],
      {
        masterFCMAddressOld: string;
        masterFCMAddress: string;
        yieldBearingProtocolID: number;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    deployIrsInstance(
      _underlyingToken: string,
      _rateOracle: string,
      _termStartTimestampWad: BigNumberish,
      _termEndTimestampWad: BigNumberish,
      _tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    masterFCMs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    masterMarginEngine(overrides?: CallOverrides): Promise<BigNumber>;

    masterVAMM(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApproval(
      intAddress: string,
      allowIntegration: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMasterFCM(
      masterFCM: string,
      yieldBearingProtocolID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployIrsInstance(
      _underlyingToken: string,
      _rateOracle: string,
      _termStartTimestampWad: BigNumberish,
      _termEndTimestampWad: BigNumberish,
      _tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    masterFCMs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    masterMarginEngine(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    masterVAMM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApproval(
      intAddress: string,
      allowIntegration: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMasterFCM(
      masterFCM: string,
      yieldBearingProtocolID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
