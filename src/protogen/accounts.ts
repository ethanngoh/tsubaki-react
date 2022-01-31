/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "accounts_api";

export interface AccountMetadata {
  net_zero: boolean;
  provider: string;
  virtual: boolean;
}

export interface Account {
  id: string;
  name: string;
  description: string;
  created_at_ms: number;
  currency: string;
  entity_id: string;
  metadata: AccountMetadata | undefined;
}

export interface AddAccountRequest {
  id: string;
  name: string;
  description: string;
  currency: string;
  entity_id: string;
  metadata: AccountMetadata | undefined;
}

export interface AddAccountResponse {
  id: string;
}

export interface GetAccountRequest {
  id: string;
}

export interface GetAccountResponse {
  account: Account | undefined;
}

export interface DeleteAccountRequest {
  id: string;
}

export interface DeleteAccountResponse {
  account: Account | undefined;
}

function createBaseAccountMetadata(): AccountMetadata {
  return { net_zero: false, provider: "", virtual: false };
}

export const AccountMetadata = {
  encode(
    message: AccountMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.net_zero === true) {
      writer.uint32(8).bool(message.net_zero);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.virtual === true) {
      writer.uint32(24).bool(message.virtual);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.net_zero = reader.bool();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.virtual = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMetadata {
    return {
      net_zero: isSet(object.net_zero) ? Boolean(object.net_zero) : false,
      provider: isSet(object.provider) ? String(object.provider) : "",
      virtual: isSet(object.virtual) ? Boolean(object.virtual) : false,
    };
  },

  toJSON(message: AccountMetadata): unknown {
    const obj: any = {};
    message.net_zero !== undefined && (obj.net_zero = message.net_zero);
    message.provider !== undefined && (obj.provider = message.provider);
    message.virtual !== undefined && (obj.virtual = message.virtual);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountMetadata>, I>>(
    object: I
  ): AccountMetadata {
    const message = createBaseAccountMetadata();
    message.net_zero = object.net_zero ?? false;
    message.provider = object.provider ?? "";
    message.virtual = object.virtual ?? false;
    return message;
  },
};

function createBaseAccount(): Account {
  return {
    id: "",
    name: "",
    description: "",
    created_at_ms: 0,
    currency: "",
    entity_id: "",
    metadata: undefined,
  };
}

export const Account = {
  encode(
    message: Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.created_at_ms !== 0) {
      writer.uint32(32).int64(message.created_at_ms);
    }
    if (message.currency !== "") {
      writer.uint32(42).string(message.currency);
    }
    if (message.entity_id !== "") {
      writer.uint32(50).string(message.entity_id);
    }
    if (message.metadata !== undefined) {
      AccountMetadata.encode(
        message.metadata,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.created_at_ms = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.currency = reader.string();
          break;
        case 6:
          message.entity_id = reader.string();
          break;
        case 7:
          message.metadata = AccountMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      created_at_ms: isSet(object.created_at_ms)
        ? Number(object.created_at_ms)
        : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      entity_id: isSet(object.entity_id) ? String(object.entity_id) : "",
      metadata: isSet(object.metadata)
        ? AccountMetadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.created_at_ms !== undefined &&
      (obj.created_at_ms = Math.round(message.created_at_ms));
    message.currency !== undefined && (obj.currency = message.currency);
    message.entity_id !== undefined && (obj.entity_id = message.entity_id);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? AccountMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.created_at_ms = object.created_at_ms ?? 0;
    message.currency = object.currency ?? "";
    message.entity_id = object.entity_id ?? "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? AccountMetadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

function createBaseAddAccountRequest(): AddAccountRequest {
  return {
    id: "",
    name: "",
    description: "",
    currency: "",
    entity_id: "",
    metadata: undefined,
  };
}

export const AddAccountRequest = {
  encode(
    message: AddAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.currency !== "") {
      writer.uint32(34).string(message.currency);
    }
    if (message.entity_id !== "") {
      writer.uint32(42).string(message.entity_id);
    }
    if (message.metadata !== undefined) {
      AccountMetadata.encode(
        message.metadata,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.currency = reader.string();
          break;
        case 5:
          message.entity_id = reader.string();
          break;
        case 6:
          message.metadata = AccountMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAccountRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
      entity_id: isSet(object.entity_id) ? String(object.entity_id) : "",
      metadata: isSet(object.metadata)
        ? AccountMetadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: AddAccountRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.currency !== undefined && (obj.currency = message.currency);
    message.entity_id !== undefined && (obj.entity_id = message.entity_id);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? AccountMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAccountRequest>, I>>(
    object: I
  ): AddAccountRequest {
    const message = createBaseAddAccountRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.currency = object.currency ?? "";
    message.entity_id = object.entity_id ?? "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? AccountMetadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

function createBaseAddAccountResponse(): AddAccountResponse {
  return { id: "" };
}

export const AddAccountResponse = {
  encode(
    message: AddAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAccountResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: AddAccountResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAccountResponse>, I>>(
    object: I
  ): AddAccountResponse {
    const message = createBaseAddAccountResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetAccountRequest(): GetAccountRequest {
  return { id: "" };
}

export const GetAccountRequest = {
  encode(
    message: GetAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccountRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: GetAccountRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAccountRequest>, I>>(
    object: I
  ): GetAccountRequest {
    const message = createBaseGetAccountRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetAccountResponse(): GetAccountResponse {
  return { account: undefined };
}

export const GetAccountResponse = {
  encode(
    message: GetAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccountResponse {
    return {
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: GetAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAccountResponse>, I>>(
    object: I
  ): GetAccountResponse {
    const message = createBaseGetAccountResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
        : undefined;
    return message;
  },
};

function createBaseDeleteAccountRequest(): DeleteAccountRequest {
  return { id: "" };
}

export const DeleteAccountRequest = {
  encode(
    message: DeleteAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAccountRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: DeleteAccountRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAccountRequest>, I>>(
    object: I
  ): DeleteAccountRequest {
    const message = createBaseDeleteAccountRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteAccountResponse(): DeleteAccountResponse {
  return { account: undefined };
}

export const DeleteAccountResponse = {
  encode(
    message: DeleteAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAccountResponse {
    return {
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: DeleteAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAccountResponse>, I>>(
    object: I
  ): DeleteAccountResponse {
    const message = createBaseDeleteAccountResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
