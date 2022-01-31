/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Monster } from "./monsters";

export const protobufPackage = "pad_api.monster";

export interface GetMonsterRequest {
  id: number;
}

export interface GetMonsterResponse {
  monster: Monster | undefined;
}

function createBaseGetMonsterRequest(): GetMonsterRequest {
  return { id: 0 };
}

export const GetMonsterRequest = {
  encode(
    message: GetMonsterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMonsterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMonsterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMonsterRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: GetMonsterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMonsterRequest>, I>>(
    object: I
  ): GetMonsterRequest {
    const message = createBaseGetMonsterRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetMonsterResponse(): GetMonsterResponse {
  return { monster: undefined };
}

export const GetMonsterResponse = {
  encode(
    message: GetMonsterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.monster !== undefined) {
      Monster.encode(message.monster, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMonsterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMonsterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monster = Monster.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMonsterResponse {
    return {
      monster: isSet(object.monster)
        ? Monster.fromJSON(object.monster)
        : undefined,
    };
  },

  toJSON(message: GetMonsterResponse): unknown {
    const obj: any = {};
    message.monster !== undefined &&
      (obj.monster = message.monster
        ? Monster.toJSON(message.monster)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMonsterResponse>, I>>(
    object: I
  ): GetMonsterResponse {
    const message = createBaseGetMonsterResponse();
    message.monster =
      object.monster !== undefined && object.monster !== null
        ? Monster.fromPartial(object.monster)
        : undefined;
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
