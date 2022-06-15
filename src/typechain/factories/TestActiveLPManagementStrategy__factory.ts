/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestActiveLPManagementStrategy,
  TestActiveLPManagementStrategyInterface,
} from "../TestActiveLPManagementStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntUnderflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBMathSD59x18__MulInputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rAbs",
        type: "uint256",
      },
    ],
    name: "PRBMathSD59x18__MulOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__FromUintOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivFixedPointOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivOverflow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "LEVERAGE",
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
        name: "depositAmountInUnderlyingTokens",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marginEngine",
    outputs: [
      {
        internalType: "contract IMarginEngine",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periphery",
    outputs: [
      {
        internalType: "contract IPeriphery",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "_updatedTickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_updatedTickUpper",
        type: "int24",
      },
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_marginEngine",
        type: "address",
      },
      {
        internalType: "contract IPeriphery",
        name: "_periphery",
        type: "address",
      },
    ],
    name: "setMarginEngineAndVAMM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tickLower",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickUpper",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vamm",
    outputs: [
      {
        internalType: "contract IVAMM",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61176c8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100ae5760003560e01c80624006e0146100b35780632495a599146100dc578063393ed075146100ef57806355b812a81461010457806359c4f9051461012b578063715018a61461013f57806373bca7cf1461014757806377aace1a1461015a5780638d01f0ba1461016d5780638da5cb5b14610183578063b6b55f251461018b578063e098372c1461019e578063f2fde38b146101b1575b600080fd5b6001546100c6906001600160a01b031681565b6040516100d3919061133c565b60405180910390f35b6003546100c6906001600160a01b031681565b6101026100fd366004611367565b6101c4565b005b60045461011890600160b81b900460020b81565b60405160029190910b81526020016100d3565b60045461011890600160a01b900460020b81565b61010261030a565b6101026101553660046113af565b610345565b6004546100c6906001600160a01b031681565b610175600581565b6040519081526020016100d3565b6100c6610558565b6101026101993660046113e8565b610567565b6002546100c6906001600160a01b031681565b6101026101bf366004611401565b6105d6565b336101cd610558565b6001600160a01b0316146101fc5760405162461bcd60e51b81526004016101f39061141e565b60405180910390fd5b610204610673565b600061020e6107f9565b905060008113156102c2576001546004546001600160a01b0390911690637717797f903090600160a01b8104600290810b91600160b81b9004900b61025286611469565b6040516001600160e01b031960e087901b1681526001600160a01b039094166004850152600292830b6024850152910b60448301526064820152608401600060405180830381600087803b1580156102a957600080fd5b505af11580156102bd573d6000803e3d6000fd5b505050505b6004805462ffffff808616600160a01b0262ffffff60a01b19918616600160b81b029190911665ffffffffffff60a01b1990921691909117179055610305610a12565b505050565b33610313610558565b6001600160a01b0316146103395760405162461bcd60e51b81526004016101f39061141e565b6103436000610c03565b565b3361034e610558565b6001600160a01b0316146103745760405162461bcd60e51b81526004016101f39061141e565b6001600160a01b0382166103ba5760405162461bcd60e51b815260206004820152600d60248201526c1b59481b5d5cdd08195e1a5cdd609a1b60448201526064016101f3565b6001546001600160a01b03838116911614156104095760405162461bcd60e51b815260206004820152600e60248201526d1b5948185b1c9958591e481cd95d60921b60448201526064016101f3565b600180546001600160a01b0319166001600160a01b038416908117909155604080516338260dcb60e21b8152905163e098372c91600480820192602092909190829003018186803b15801561045d57600080fd5b505afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104959190611486565b600280546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290519190921691632495a599916004808301926020929190829003018186803b1580156104ee57600080fd5b505afa158015610502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105269190611486565b600380546001600160a01b039283166001600160a01b0319918216179091556004805493909216921691909117905550565b6000546001600160a01b031690565b600081116105b25760405162461bcd60e51b81526020600482015260186024820152776465706f736974206d75737420626520706f73697469766560401b60448201526064016101f3565b6003546105ca906001600160a01b0316333084610c53565b6105d381610cb3565b50565b336105df610558565b6001600160a01b0316146106055760405162461bcd60e51b81526004016101f39061141e565b6001600160a01b03811661066a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101f3565b6105d381610c03565b600454600160a01b8104600290810b600160b81b909204900b13156103435760015460048054604051634904f4dd60e11b81526000936001600160a01b031692639209e9ba926106dc923092600160a01b8304600290810b93600160b81b9004900b91016114a3565b61014060405180830381600087803b1580156106f757600080fd5b505af115801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f9190611526565b60208101519091506001600160801b038116156107f5576002805460048054604051631f2f089360e01b81523092810192909252600160a01b8104840b6024830152600160b81b900490920b60448301526001600160801b03831660648301526001600160a01b031690631f2f0893906084015b602060405180830381600087803b1580156107bd57600080fd5b505af11580156107d1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030591906115bb565b5050565b600454600090600160a01b8104600290810b600160b81b909204900b1315610a0f5760015460048054604051634904f4dd60e11b81526000936001600160a01b031692639209e9ba92610865923092600160a01b8304600290810b93600160b81b9004900b91016114a3565b61014060405180830381600087803b15801561088057600080fd5b505af1158015610894573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b89190611526565b90508060400151915060006109e08260a001516000600160009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b15801561091b57600080fd5b505afa15801561092f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095391906115bb565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156109a157600080fd5b505afa1580156109b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d991906115bb565b6000610cc0565b905060008112156109f8576109f581846115d4565b92505b610a0a670de0b6b3a764000084611615565b925050505b90565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610a4390309060040161133c565b60206040518083038186803b158015610a5b57600080fd5b505afa158015610a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9391906115bb565b905080156105d3576000610aa8600583611654565b6003546004805460405163095ea7b360e01b81526001600160a01b03918216928101929092526024820186905292935091169063095ea7b390604401602060405180830381600087803b158015610afe57600080fd5b505af1158015610b12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b369190611673565b506004546040805160c081018252600180546001600160a01b039081168352600160a01b8504600290810b6020850152600160b81b8604900b938301939093526060820185905260808201529116906332e00daf9060a08101610b9886610d29565b9052604080516001600160e01b031960e085901b16815282516001600160a01b031660048201526020830151600290810b60248301529183015190910b60448201526060820151606482015260808201511515608482015260a09091015160a482015260c4016107a3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610cad908590610d97565b50505050565b6000610aa8600583611654565b600080610ccc87610e18565b90506000610cd987610e18565b90506000610cf3610cec60018989610ea3565b8490610f78565b90506000610d018387610f78565b90506000610d0f82846115d4565b670de0b6b3a764000090059b9a5050505050505050505050565b60006001600160ff1b03821115610d935760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016101f3565b5090565b6000610dc383836040518060400160405280600781526020016629aa261032b93960c91b81525061103d565b8051909150156103055780806020019051810190610de19190611673565b6103055760405162461bcd60e51b815260206004820152600860248201526714d5130819985a5b60c21b60448201526064016101f3565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f19821215610e585760405163e608e18b60e01b8152600481018390526024016101f3565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f90821315610e95576040516371f72a3160e01b8152600481018390526024016101f3565b50670de0b6b3a76400000290565b6000828211610edd5760405162461bcd60e51b81526004016101f390602080825260049082015263453c3d5360e01b604082015260600190565b6000610ee76110f2565b905083811015610f215760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b60448201526064016101f3565b60008580610f2f5750838210155b15610f4557610f3e85856116a4565b9050610f52565b610f4f85836116a4565b90505b610f6e68056bc75e2d63100000610f6883611102565b9061111f565b9695505050505050565b6000600160ff1b831480610f8f5750600160ff1b82145b15610fad57604051630d01a11b60e21b815260040160405180910390fd5b60008060008512610fbe5784610fc3565b846000035b915060008412610fd35783610fd8565b836000035b90506000610fe68383611134565b90506001600160ff1b038111156110135760405163bf79e8d960e01b8152600481018290526024016101f3565b60001980871390861380821860011461102c5782611031565b826000035b98975050505050505050565b6060833b61107c5760405162461bcd60e51b815260206004820152600c60248201526b1b9bdb8b58dbdb9d1c9858dd60a21b60448201526064016101f3565b600080856001600160a01b031660008660405161109991906116e7565b60006040518083038185875af1925050503d80600081146110d6576040519150601f19603f3d011682016040523d82523d6000602084013e6110db565b606091505b5091509150610f6e8282866111f6565b9392505050565b60006110fd4261122f565b905090565b6000611119826a1a1601fc4ea7109e00000061111f565b92915050565b60006110eb83670de0b6b3a76400008461126e565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106111785760405163698d9a0160e11b8152600481018290526024016101f3565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826111b25780670de0b6b3a7640000850401945050505050611119565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b606083156112055750816110eb565b8251156112155782518084602001fd5b8160405162461bcd60e51b81526004016101f39190611703565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f21821115610e9557604051633492ffd960e01b8152600481018390526024016101f3565b6000808060001985870985870292508281108382030391505080600014156112a95783828161129f5761129f61168e565b04925050506110eb565b8381106112d357604051631dcf306360e21b815260048101829052602481018590526044016101f3565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b0391909116815260200190565b8035600281900b811461136257600080fd5b919050565b6000806040838503121561137a57600080fd5b61138383611350565b915061139160208401611350565b90509250929050565b6001600160a01b03811681146105d357600080fd5b600080604083850312156113c257600080fd5b82356113cd8161139a565b915060208301356113dd8161139a565b809150509250929050565b6000602082840312156113fa57600080fd5b5035919050565b60006020828403121561141357600080fd5b81356110eb8161139a565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82141561147f5761147f611453565b5060000390565b60006020828403121561149857600080fd5b81516110eb8161139a565b6001600160a01b03939093168352600291820b6020840152900b604082015260600190565b60405161014081016001600160401b03811182821017156114f957634e487b7160e01b600052604160045260246000fd5b60405290565b8051801515811461136257600080fd5b80516001600160801b038116811461136257600080fd5b6000610140828403121561153957600080fd5b6115416114c8565b61154a836114ff565b81526115586020840161150f565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6000602082840312156115cd57600080fd5b5051919050565b600080821280156001600160ff1b03849003851316156115f6576115f6611453565b600160ff1b839003841281161561160f5761160f611453565b50500190565b60008083128015600160ff1b85018412161561163357611633611453565b6001600160ff1b038401831381161561164e5761164e611453565b50500390565b600081600019048311821515161561166e5761166e611453565b500290565b60006020828403121561168557600080fd5b6110eb826114ff565b634e487b7160e01b600052601260045260246000fd5b6000828210156116b6576116b6611453565b500390565b60005b838110156116d65781810151838201526020016116be565b83811115610cad5750506000910152565b600082516116f98184602087016116bb565b9190910192915050565b60208152600082518060208401526117228160408501602087016116bb565b601f01601f1916919091016040019291505056fea26469706673582212209cc85fb87ed336ccedac70b4e7dbb46b09cbdbd691f5bea5111064d7370f76af64736f6c63430008090033";

export class TestActiveLPManagementStrategy__factory extends ContractFactory {
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
  ): Promise<TestActiveLPManagementStrategy> {
    return super.deploy(
      overrides || {}
    ) as Promise<TestActiveLPManagementStrategy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestActiveLPManagementStrategy {
    return super.attach(address) as TestActiveLPManagementStrategy;
  }
  connect(signer: Signer): TestActiveLPManagementStrategy__factory {
    return super.connect(signer) as TestActiveLPManagementStrategy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestActiveLPManagementStrategyInterface {
    return new utils.Interface(_abi) as TestActiveLPManagementStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestActiveLPManagementStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestActiveLPManagementStrategy;
  }
}
