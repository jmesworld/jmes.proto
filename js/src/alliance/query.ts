/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../alliance/params";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { AllianceAsset } from "../alliance/alliance";
import { Delegation } from "../alliance/delegations";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "alliance";

/** Params */
export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

/** Alliances */
export interface QueryAlliancesRequest {
  pagination?: PageRequest;
}

export interface QueryAlliancesResponse {
  alliances: AllianceAsset[];
  pagination?: PageResponse;
}

/** Alliance */
export interface QueryAllianceRequest {
  denom: string;
}

export interface QueryAllianceResponse {
  alliance?: AllianceAsset;
}

export interface QueryIBCAllianceRequest {
  hash: string;
}

/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequest {
  delegatorAddr: string;
  pagination?: PageRequest;
}

/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
  pagination?: PageRequest;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation?: Delegation;
  balance?: Coin;
}

export interface QueryAlliancesDelegationsResponse {
  delegations: DelegationResponse[];
  pagination?: PageResponse;
}

/** AllianceDelegation */
export interface QueryAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}

export interface QueryIBCAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination?: PageRequest;
}

export interface QueryAllianceDelegationResponse {
  delegation?: DelegationResponse;
}

/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}

export interface QueryIBCAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  hash: string;
  pagination?: PageRequest;
}

export interface QueryAllianceDelegationRewardsResponse {
  rewards: Coin[];
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryAlliancesRequest: object = {};

export const QueryAlliancesRequest = {
  encode(message: QueryAlliancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAlliancesRequest } as QueryAlliancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAlliancesRequest {
    const message = { ...baseQueryAlliancesRequest } as QueryAlliancesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAlliancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAlliancesRequest>): QueryAlliancesRequest {
    const message = { ...baseQueryAlliancesRequest } as QueryAlliancesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAlliancesResponse: object = {};

export const QueryAlliancesResponse = {
  encode(message: QueryAlliancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alliances) {
      AllianceAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAlliancesResponse } as QueryAlliancesResponse;
    message.alliances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliances.push(AllianceAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAlliancesResponse {
    const message = { ...baseQueryAlliancesResponse } as QueryAlliancesResponse;
    message.alliances = [];
    if (object.alliances !== undefined && object.alliances !== null) {
      for (const e of object.alliances) {
        message.alliances.push(AllianceAsset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAlliancesResponse): unknown {
    const obj: any = {};
    if (message.alliances) {
      obj.alliances = message.alliances.map((e) => (e ? AllianceAsset.toJSON(e) : undefined));
    } else {
      obj.alliances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAlliancesResponse>): QueryAlliancesResponse {
    const message = { ...baseQueryAlliancesResponse } as QueryAlliancesResponse;
    message.alliances = [];
    if (object.alliances !== undefined && object.alliances !== null) {
      for (const e of object.alliances) {
        message.alliances.push(AllianceAsset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllianceRequest: object = { denom: "" };

export const QueryAllianceRequest = {
  encode(message: QueryAllianceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceRequest } as QueryAllianceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceRequest {
    const message = { ...baseQueryAllianceRequest } as QueryAllianceRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryAllianceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllianceRequest>): QueryAllianceRequest {
    const message = { ...baseQueryAllianceRequest } as QueryAllianceRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryAllianceResponse: object = {};

export const QueryAllianceResponse = {
  encode(message: QueryAllianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alliance !== undefined) {
      AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceResponse } as QueryAllianceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliance = AllianceAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceResponse {
    const message = { ...baseQueryAllianceResponse } as QueryAllianceResponse;
    if (object.alliance !== undefined && object.alliance !== null) {
      message.alliance = AllianceAsset.fromJSON(object.alliance);
    } else {
      message.alliance = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllianceResponse): unknown {
    const obj: any = {};
    message.alliance !== undefined &&
      (obj.alliance = message.alliance ? AllianceAsset.toJSON(message.alliance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllianceResponse>): QueryAllianceResponse {
    const message = { ...baseQueryAllianceResponse } as QueryAllianceResponse;
    if (object.alliance !== undefined && object.alliance !== null) {
      message.alliance = AllianceAsset.fromPartial(object.alliance);
    } else {
      message.alliance = undefined;
    }
    return message;
  },
};

const baseQueryIBCAllianceRequest: object = { hash: "" };

export const QueryIBCAllianceRequest = {
  encode(message: QueryIBCAllianceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCAllianceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIBCAllianceRequest } as QueryIBCAllianceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIBCAllianceRequest {
    const message = { ...baseQueryIBCAllianceRequest } as QueryIBCAllianceRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryIBCAllianceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIBCAllianceRequest>): QueryIBCAllianceRequest {
    const message = { ...baseQueryIBCAllianceRequest } as QueryIBCAllianceRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryAlliancesDelegationsRequest: object = { delegatorAddr: "" };

export const QueryAlliancesDelegationsRequest = {
  encode(message: QueryAlliancesDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAlliancesDelegationsRequest } as QueryAlliancesDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAlliancesDelegationsRequest {
    const message = { ...baseQueryAlliancesDelegationsRequest } as QueryAlliancesDelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAlliancesDelegationsRequest>): QueryAlliancesDelegationsRequest {
    const message = { ...baseQueryAlliancesDelegationsRequest } as QueryAlliancesDelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAlliancesDelegationByValidatorRequest: object = { delegatorAddr: "", validatorAddr: "" };

export const QueryAlliancesDelegationByValidatorRequest = {
  encode(
    message: QueryAlliancesDelegationByValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationByValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAlliancesDelegationByValidatorRequest,
    } as QueryAlliancesDelegationByValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAlliancesDelegationByValidatorRequest {
    const message = {
      ...baseQueryAlliancesDelegationByValidatorRequest,
    } as QueryAlliancesDelegationByValidatorRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAlliancesDelegationByValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesDelegationByValidatorRequest>,
  ): QueryAlliancesDelegationByValidatorRequest {
    const message = {
      ...baseQueryAlliancesDelegationByValidatorRequest,
    } as QueryAlliancesDelegationByValidatorRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseDelegationResponse: object = {};

export const DelegationResponse = {
  encode(message: DelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationResponse } as DelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromJSON(object.delegation);
    } else {
      message.delegation = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromPartial(object.delegation);
    } else {
      message.delegation = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
};

const baseQueryAlliancesDelegationsResponse: object = {};

export const QueryAlliancesDelegationsResponse = {
  encode(message: QueryAlliancesDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAlliancesDelegationsResponse } as QueryAlliancesDelegationsResponse;
    message.delegations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAlliancesDelegationsResponse {
    const message = { ...baseQueryAlliancesDelegationsResponse } as QueryAlliancesDelegationsResponse;
    message.delegations = [];
    if (object.delegations !== undefined && object.delegations !== null) {
      for (const e of object.delegations) {
        message.delegations.push(DelegationResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAlliancesDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => (e ? DelegationResponse.toJSON(e) : undefined));
    } else {
      obj.delegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAlliancesDelegationsResponse>): QueryAlliancesDelegationsResponse {
    const message = { ...baseQueryAlliancesDelegationsResponse } as QueryAlliancesDelegationsResponse;
    message.delegations = [];
    if (object.delegations !== undefined && object.delegations !== null) {
      for (const e of object.delegations) {
        message.delegations.push(DelegationResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllianceDelegationRequest: object = { delegatorAddr: "", validatorAddr: "", denom: "" };

export const QueryAllianceDelegationRequest = {
  encode(message: QueryAllianceDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceDelegationRequest } as QueryAllianceDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRequest {
    const message = { ...baseQueryAllianceDelegationRequest } as QueryAllianceDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllianceDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllianceDelegationRequest>): QueryAllianceDelegationRequest {
    const message = { ...baseQueryAllianceDelegationRequest } as QueryAllianceDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryIBCAllianceDelegationRequest: object = { delegatorAddr: "", validatorAddr: "", hash: "" };

export const QueryIBCAllianceDelegationRequest = {
  encode(message: QueryIBCAllianceDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCAllianceDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIBCAllianceDelegationRequest } as QueryIBCAllianceDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIBCAllianceDelegationRequest {
    const message = { ...baseQueryIBCAllianceDelegationRequest } as QueryIBCAllianceDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryIBCAllianceDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIBCAllianceDelegationRequest>): QueryIBCAllianceDelegationRequest {
    const message = { ...baseQueryIBCAllianceDelegationRequest } as QueryIBCAllianceDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllianceDelegationResponse: object = {};

export const QueryAllianceDelegationResponse = {
  encode(message: QueryAllianceDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceDelegationResponse } as QueryAllianceDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationResponse {
    const message = { ...baseQueryAllianceDelegationResponse } as QueryAllianceDelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = DelegationResponse.fromJSON(object.delegation);
    } else {
      message.delegation = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllianceDelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation ? DelegationResponse.toJSON(message.delegation) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllianceDelegationResponse>): QueryAllianceDelegationResponse {
    const message = { ...baseQueryAllianceDelegationResponse } as QueryAllianceDelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = DelegationResponse.fromPartial(object.delegation);
    } else {
      message.delegation = undefined;
    }
    return message;
  },
};

const baseQueryAllianceDelegationRewardsRequest: object = { delegatorAddr: "", validatorAddr: "", denom: "" };

export const QueryAllianceDelegationRewardsRequest = {
  encode(
    message: QueryAllianceDelegationRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceDelegationRewardsRequest } as QueryAllianceDelegationRewardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRewardsRequest {
    const message = { ...baseQueryAllianceDelegationRewardsRequest } as QueryAllianceDelegationRewardsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceDelegationRewardsRequest>,
  ): QueryAllianceDelegationRewardsRequest {
    const message = { ...baseQueryAllianceDelegationRewardsRequest } as QueryAllianceDelegationRewardsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryIBCAllianceDelegationRewardsRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
  hash: "",
};

export const QueryIBCAllianceDelegationRewardsRequest = {
  encode(
    message: QueryIBCAllianceDelegationRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCAllianceDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIBCAllianceDelegationRewardsRequest,
    } as QueryIBCAllianceDelegationRewardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIBCAllianceDelegationRewardsRequest {
    const message = {
      ...baseQueryIBCAllianceDelegationRewardsRequest,
    } as QueryIBCAllianceDelegationRewardsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryIBCAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>,
  ): QueryIBCAllianceDelegationRewardsRequest {
    const message = {
      ...baseQueryIBCAllianceDelegationRewardsRequest,
    } as QueryIBCAllianceDelegationRewardsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllianceDelegationRewardsResponse: object = {};

export const QueryAllianceDelegationRewardsResponse = {
  encode(
    message: QueryAllianceDelegationRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceDelegationRewardsResponse,
    } as QueryAllianceDelegationRewardsResponse;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRewardsResponse {
    const message = {
      ...baseQueryAllianceDelegationRewardsResponse,
    } as QueryAllianceDelegationRewardsResponse;
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllianceDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceDelegationRewardsResponse>,
  ): QueryAllianceDelegationRewardsResponse {
    const message = {
      ...baseQueryAllianceDelegationRewardsResponse,
    } as QueryAllianceDelegationRewardsResponse;
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

export interface Query {
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Query paginated alliances */
  Alliances(
    request: DeepPartial<QueryAlliancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAlliancesResponse>;
  /** Query a specific alliance by denom */
  Alliance(
    request: DeepPartial<QueryAllianceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceResponse>;
  /** Query a specific alliance by ibc hash */
  IBCAlliance(
    request: DeepPartial<QueryIBCAllianceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceResponse>;
  /** Query all paginated alliance delegations for a delegator addr */
  AlliancesDelegation(
    request: DeepPartial<QueryAlliancesDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query all paginated alliance delegations for a delegator addr and validator_addr */
  AlliancesDelegationByValidator(
    request: DeepPartial<QueryAlliancesDelegationByValidatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
  AllianceDelegation(
    request: DeepPartial<QueryAllianceDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationResponse>;
  /** Query a delegation to an alliance by delegator addr, validator_addr and denom */
  IBCAllianceDelegation(
    request: DeepPartial<QueryIBCAllianceDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */
  AllianceDelegationRewards(
    request: DeepPartial<QueryAllianceDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query for rewards by delegator addr, validator_addr and denom */
  IBCAllianceDelegationRewards(
    request: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationRewardsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Alliances = this.Alliances.bind(this);
    this.Alliance = this.Alliance.bind(this);
    this.IBCAlliance = this.IBCAlliance.bind(this);
    this.AlliancesDelegation = this.AlliancesDelegation.bind(this);
    this.AlliancesDelegationByValidator = this.AlliancesDelegationByValidator.bind(this);
    this.AllianceDelegation = this.AllianceDelegation.bind(this);
    this.IBCAllianceDelegation = this.IBCAllianceDelegation.bind(this);
    this.AllianceDelegationRewards = this.AllianceDelegationRewards.bind(this);
    this.IBCAllianceDelegationRewards = this.IBCAllianceDelegationRewards.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Alliances(
    request: DeepPartial<QueryAlliancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAlliancesResponse> {
    return this.rpc.unary(QueryAlliancesDesc, QueryAlliancesRequest.fromPartial(request), metadata);
  }

  Alliance(
    request: DeepPartial<QueryAllianceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceResponse> {
    return this.rpc.unary(QueryAllianceDesc, QueryAllianceRequest.fromPartial(request), metadata);
  }

  IBCAlliance(
    request: DeepPartial<QueryIBCAllianceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceResponse> {
    return this.rpc.unary(QueryIBCAllianceDesc, QueryIBCAllianceRequest.fromPartial(request), metadata);
  }

  AlliancesDelegation(
    request: DeepPartial<QueryAlliancesDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(
      QueryAlliancesDelegationDesc,
      QueryAlliancesDelegationsRequest.fromPartial(request),
      metadata,
    );
  }

  AlliancesDelegationByValidator(
    request: DeepPartial<QueryAlliancesDelegationByValidatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAlliancesDelegationsResponse> {
    return this.rpc.unary(
      QueryAlliancesDelegationByValidatorDesc,
      QueryAlliancesDelegationByValidatorRequest.fromPartial(request),
      metadata,
    );
  }

  AllianceDelegation(
    request: DeepPartial<QueryAllianceDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationResponse> {
    return this.rpc.unary(
      QueryAllianceDelegationDesc,
      QueryAllianceDelegationRequest.fromPartial(request),
      metadata,
    );
  }

  IBCAllianceDelegation(
    request: DeepPartial<QueryIBCAllianceDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationResponse> {
    return this.rpc.unary(
      QueryIBCAllianceDelegationDesc,
      QueryIBCAllianceDelegationRequest.fromPartial(request),
      metadata,
    );
  }

  AllianceDelegationRewards(
    request: DeepPartial<QueryAllianceDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationRewardsResponse> {
    return this.rpc.unary(
      QueryAllianceDelegationRewardsDesc,
      QueryAllianceDelegationRewardsRequest.fromPartial(request),
      metadata,
    );
  }

  IBCAllianceDelegationRewards(
    request: DeepPartial<QueryIBCAllianceDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllianceDelegationRewardsResponse> {
    return this.rpc.unary(
      QueryIBCAllianceDelegationRewardsDesc,
      QueryIBCAllianceDelegationRewardsRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "alliance.Query",
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAlliancesDesc: UnaryMethodDefinitionish = {
  methodName: "Alliances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAlliancesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "Alliance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllianceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIBCAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "IBCAlliance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIBCAllianceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAlliancesDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "AlliancesDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAlliancesDelegationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesDelegationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAlliancesDelegationByValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "AlliancesDelegationByValidator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAlliancesDelegationByValidatorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAlliancesDelegationsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAllianceDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllianceDelegationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIBCAllianceDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "IBCAllianceDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIBCAllianceDelegationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAllianceDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "AllianceDelegationRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllianceDelegationRewardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIBCAllianceDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "IBCAllianceDelegationRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIBCAllianceDelegationRewardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllianceDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
