/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "pad_api.monster";

export interface Monster {
  monsterNoJp: number;
  monsterNoNa: number;
  baseId: number;
  leaderSkill: LeaderSkill | undefined;
  activeSkill: ActiveSkill | undefined;
  name: TranslatedString | undefined;
  types: string[];
  rarity: number;
  buyMp: number;
  sellMp: number;
  regDate: string;
  attributes: string[];
  inheritable: boolean;
  stackable: boolean;
  farmable: boolean;
  orbSkinId: number;
  cost: number;
  expCurve: number;
  fodderExp: number;
  maxLevel: number;
  limitbreak: boolean;
  latentSlots: number;
  series: string;
  hpMax: number;
  hpMin: number;
  hpScale: number;
  atkMax: number;
  atkMin: number;
  atkScale: number;
  rcvMax: number;
  rcvMin: number;
  rcvScale: number;
  hasAnimation: boolean;
  hasHqimage: boolean;
  awakenings: AwokenSkill[];
  superAwakenings: AwokenSkill[];
}

export interface LeaderSkill {
  name: TranslatedString | undefined;
  maxHp: number;
  maxAtk: number;
  maxRcv: number;
  maxShield: number;
  maxCombos: number;
  bonusDamage: number;
  multBonusDamage: number;
  extraTime: number;
  desc: TranslatedString | undefined;
}

export interface ActiveSkill {
  activeSubskills: ActiveSubskill[];
  compoundSkillType: string;
  name: TranslatedString | undefined;
  cooldownTurnsMin: number;
  cooldownTurnsMax: number;
}

export interface ActiveSubskill {
  desc: TranslatedString | undefined;
  descTemplated: TranslatedString | undefined;
  cooldown: number;
}

export interface AwokenSkill {
  awokenSkillId: number;
  name: TranslatedString | undefined;
  desc: TranslatedString | undefined;
  adjHp: number;
  adjAtk: number;
  adjRcv: number;
}

export interface TranslatedString {
  ja: string;
  en: string;
}

function createBaseMonster(): Monster {
  return {
    monsterNoJp: 0,
    monsterNoNa: 0,
    baseId: 0,
    leaderSkill: undefined,
    activeSkill: undefined,
    name: undefined,
    types: [],
    rarity: 0,
    buyMp: 0,
    sellMp: 0,
    regDate: "",
    attributes: [],
    inheritable: false,
    stackable: false,
    farmable: false,
    orbSkinId: 0,
    cost: 0,
    expCurve: 0,
    fodderExp: 0,
    maxLevel: 0,
    limitbreak: false,
    latentSlots: 0,
    series: "",
    hpMax: 0,
    hpMin: 0,
    hpScale: 0,
    atkMax: 0,
    atkMin: 0,
    atkScale: 0,
    rcvMax: 0,
    rcvMin: 0,
    rcvScale: 0,
    hasAnimation: false,
    hasHqimage: false,
    awakenings: [],
    superAwakenings: [],
  };
}

export const Monster = {
  encode(
    message: Monster,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.monsterNoJp !== 0) {
      writer.uint32(8).int32(message.monsterNoJp);
    }
    if (message.monsterNoNa !== 0) {
      writer.uint32(16).int32(message.monsterNoNa);
    }
    if (message.baseId !== 0) {
      writer.uint32(24).int32(message.baseId);
    }
    if (message.leaderSkill !== undefined) {
      LeaderSkill.encode(
        message.leaderSkill,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.activeSkill !== undefined) {
      ActiveSkill.encode(
        message.activeSkill,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      TranslatedString.encode(message.name, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.types) {
      writer.uint32(66).string(v!);
    }
    if (message.rarity !== 0) {
      writer.uint32(72).int32(message.rarity);
    }
    if (message.buyMp !== 0) {
      writer.uint32(80).int32(message.buyMp);
    }
    if (message.sellMp !== 0) {
      writer.uint32(88).int32(message.sellMp);
    }
    if (message.regDate !== "") {
      writer.uint32(98).string(message.regDate);
    }
    for (const v of message.attributes) {
      writer.uint32(106).string(v!);
    }
    if (message.inheritable === true) {
      writer.uint32(112).bool(message.inheritable);
    }
    if (message.stackable === true) {
      writer.uint32(120).bool(message.stackable);
    }
    if (message.farmable === true) {
      writer.uint32(288).bool(message.farmable);
    }
    if (message.orbSkinId !== 0) {
      writer.uint32(128).int32(message.orbSkinId);
    }
    if (message.cost !== 0) {
      writer.uint32(136).int32(message.cost);
    }
    if (message.expCurve !== 0) {
      writer.uint32(144).int32(message.expCurve);
    }
    if (message.fodderExp !== 0) {
      writer.uint32(152).int32(message.fodderExp);
    }
    if (message.maxLevel !== 0) {
      writer.uint32(160).int32(message.maxLevel);
    }
    if (message.limitbreak === true) {
      writer.uint32(168).bool(message.limitbreak);
    }
    if (message.latentSlots !== 0) {
      writer.uint32(176).int32(message.latentSlots);
    }
    if (message.series !== "") {
      writer.uint32(298).string(message.series);
    }
    if (message.hpMax !== 0) {
      writer.uint32(184).int32(message.hpMax);
    }
    if (message.hpMin !== 0) {
      writer.uint32(192).int32(message.hpMin);
    }
    if (message.hpScale !== 0) {
      writer.uint32(205).float(message.hpScale);
    }
    if (message.atkMax !== 0) {
      writer.uint32(208).int32(message.atkMax);
    }
    if (message.atkMin !== 0) {
      writer.uint32(216).int32(message.atkMin);
    }
    if (message.atkScale !== 0) {
      writer.uint32(229).float(message.atkScale);
    }
    if (message.rcvMax !== 0) {
      writer.uint32(232).int32(message.rcvMax);
    }
    if (message.rcvMin !== 0) {
      writer.uint32(240).int32(message.rcvMin);
    }
    if (message.rcvScale !== 0) {
      writer.uint32(253).float(message.rcvScale);
    }
    if (message.hasAnimation === true) {
      writer.uint32(256).bool(message.hasAnimation);
    }
    if (message.hasHqimage === true) {
      writer.uint32(264).bool(message.hasHqimage);
    }
    for (const v of message.awakenings) {
      AwokenSkill.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    for (const v of message.superAwakenings) {
      AwokenSkill.encode(v!, writer.uint32(282).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Monster {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monsterNoJp = reader.int32();
          break;
        case 2:
          message.monsterNoNa = reader.int32();
          break;
        case 3:
          message.baseId = reader.int32();
          break;
        case 4:
          message.leaderSkill = LeaderSkill.decode(reader, reader.uint32());
          break;
        case 5:
          message.activeSkill = ActiveSkill.decode(reader, reader.uint32());
          break;
        case 6:
          message.name = TranslatedString.decode(reader, reader.uint32());
          break;
        case 8:
          message.types.push(reader.string());
          break;
        case 9:
          message.rarity = reader.int32();
          break;
        case 10:
          message.buyMp = reader.int32();
          break;
        case 11:
          message.sellMp = reader.int32();
          break;
        case 12:
          message.regDate = reader.string();
          break;
        case 13:
          message.attributes.push(reader.string());
          break;
        case 14:
          message.inheritable = reader.bool();
          break;
        case 15:
          message.stackable = reader.bool();
          break;
        case 36:
          message.farmable = reader.bool();
          break;
        case 16:
          message.orbSkinId = reader.int32();
          break;
        case 17:
          message.cost = reader.int32();
          break;
        case 18:
          message.expCurve = reader.int32();
          break;
        case 19:
          message.fodderExp = reader.int32();
          break;
        case 20:
          message.maxLevel = reader.int32();
          break;
        case 21:
          message.limitbreak = reader.bool();
          break;
        case 22:
          message.latentSlots = reader.int32();
          break;
        case 37:
          message.series = reader.string();
          break;
        case 23:
          message.hpMax = reader.int32();
          break;
        case 24:
          message.hpMin = reader.int32();
          break;
        case 25:
          message.hpScale = reader.float();
          break;
        case 26:
          message.atkMax = reader.int32();
          break;
        case 27:
          message.atkMin = reader.int32();
          break;
        case 28:
          message.atkScale = reader.float();
          break;
        case 29:
          message.rcvMax = reader.int32();
          break;
        case 30:
          message.rcvMin = reader.int32();
          break;
        case 31:
          message.rcvScale = reader.float();
          break;
        case 32:
          message.hasAnimation = reader.bool();
          break;
        case 33:
          message.hasHqimage = reader.bool();
          break;
        case 34:
          message.awakenings.push(AwokenSkill.decode(reader, reader.uint32()));
          break;
        case 35:
          message.superAwakenings.push(
            AwokenSkill.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Monster {
    return {
      monsterNoJp: isSet(object.monsterNoJp) ? Number(object.monsterNoJp) : 0,
      monsterNoNa: isSet(object.monsterNoNa) ? Number(object.monsterNoNa) : 0,
      baseId: isSet(object.baseId) ? Number(object.baseId) : 0,
      leaderSkill: isSet(object.leaderSkill)
        ? LeaderSkill.fromJSON(object.leaderSkill)
        : undefined,
      activeSkill: isSet(object.activeSkill)
        ? ActiveSkill.fromJSON(object.activeSkill)
        : undefined,
      name: isSet(object.name)
        ? TranslatedString.fromJSON(object.name)
        : undefined,
      types: Array.isArray(object?.types)
        ? object.types.map((e: any) => String(e))
        : [],
      rarity: isSet(object.rarity) ? Number(object.rarity) : 0,
      buyMp: isSet(object.buyMp) ? Number(object.buyMp) : 0,
      sellMp: isSet(object.sellMp) ? Number(object.sellMp) : 0,
      regDate: isSet(object.regDate) ? String(object.regDate) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => String(e))
        : [],
      inheritable: isSet(object.inheritable)
        ? Boolean(object.inheritable)
        : false,
      stackable: isSet(object.stackable) ? Boolean(object.stackable) : false,
      farmable: isSet(object.farmable) ? Boolean(object.farmable) : false,
      orbSkinId: isSet(object.orbSkinId) ? Number(object.orbSkinId) : 0,
      cost: isSet(object.cost) ? Number(object.cost) : 0,
      expCurve: isSet(object.expCurve) ? Number(object.expCurve) : 0,
      fodderExp: isSet(object.fodderExp) ? Number(object.fodderExp) : 0,
      maxLevel: isSet(object.maxLevel) ? Number(object.maxLevel) : 0,
      limitbreak: isSet(object.limitbreak) ? Boolean(object.limitbreak) : false,
      latentSlots: isSet(object.latentSlots) ? Number(object.latentSlots) : 0,
      series: isSet(object.series) ? String(object.series) : "",
      hpMax: isSet(object.hpMax) ? Number(object.hpMax) : 0,
      hpMin: isSet(object.hpMin) ? Number(object.hpMin) : 0,
      hpScale: isSet(object.hpScale) ? Number(object.hpScale) : 0,
      atkMax: isSet(object.atkMax) ? Number(object.atkMax) : 0,
      atkMin: isSet(object.atkMin) ? Number(object.atkMin) : 0,
      atkScale: isSet(object.atkScale) ? Number(object.atkScale) : 0,
      rcvMax: isSet(object.rcvMax) ? Number(object.rcvMax) : 0,
      rcvMin: isSet(object.rcvMin) ? Number(object.rcvMin) : 0,
      rcvScale: isSet(object.rcvScale) ? Number(object.rcvScale) : 0,
      hasAnimation: isSet(object.hasAnimation)
        ? Boolean(object.hasAnimation)
        : false,
      hasHqimage: isSet(object.hasHqimage) ? Boolean(object.hasHqimage) : false,
      awakenings: Array.isArray(object?.awakenings)
        ? object.awakenings.map((e: any) => AwokenSkill.fromJSON(e))
        : [],
      superAwakenings: Array.isArray(object?.superAwakenings)
        ? object.superAwakenings.map((e: any) => AwokenSkill.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Monster): unknown {
    const obj: any = {};
    message.monsterNoJp !== undefined &&
      (obj.monsterNoJp = Math.round(message.monsterNoJp));
    message.monsterNoNa !== undefined &&
      (obj.monsterNoNa = Math.round(message.monsterNoNa));
    message.baseId !== undefined && (obj.baseId = Math.round(message.baseId));
    message.leaderSkill !== undefined &&
      (obj.leaderSkill = message.leaderSkill
        ? LeaderSkill.toJSON(message.leaderSkill)
        : undefined);
    message.activeSkill !== undefined &&
      (obj.activeSkill = message.activeSkill
        ? ActiveSkill.toJSON(message.activeSkill)
        : undefined);
    message.name !== undefined &&
      (obj.name = message.name
        ? TranslatedString.toJSON(message.name)
        : undefined);
    if (message.types) {
      obj.types = message.types.map((e) => e);
    } else {
      obj.types = [];
    }
    message.rarity !== undefined && (obj.rarity = Math.round(message.rarity));
    message.buyMp !== undefined && (obj.buyMp = Math.round(message.buyMp));
    message.sellMp !== undefined && (obj.sellMp = Math.round(message.sellMp));
    message.regDate !== undefined && (obj.regDate = message.regDate);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e);
    } else {
      obj.attributes = [];
    }
    message.inheritable !== undefined &&
      (obj.inheritable = message.inheritable);
    message.stackable !== undefined && (obj.stackable = message.stackable);
    message.farmable !== undefined && (obj.farmable = message.farmable);
    message.orbSkinId !== undefined &&
      (obj.orbSkinId = Math.round(message.orbSkinId));
    message.cost !== undefined && (obj.cost = Math.round(message.cost));
    message.expCurve !== undefined &&
      (obj.expCurve = Math.round(message.expCurve));
    message.fodderExp !== undefined &&
      (obj.fodderExp = Math.round(message.fodderExp));
    message.maxLevel !== undefined &&
      (obj.maxLevel = Math.round(message.maxLevel));
    message.limitbreak !== undefined && (obj.limitbreak = message.limitbreak);
    message.latentSlots !== undefined &&
      (obj.latentSlots = Math.round(message.latentSlots));
    message.series !== undefined && (obj.series = message.series);
    message.hpMax !== undefined && (obj.hpMax = Math.round(message.hpMax));
    message.hpMin !== undefined && (obj.hpMin = Math.round(message.hpMin));
    message.hpScale !== undefined && (obj.hpScale = message.hpScale);
    message.atkMax !== undefined && (obj.atkMax = Math.round(message.atkMax));
    message.atkMin !== undefined && (obj.atkMin = Math.round(message.atkMin));
    message.atkScale !== undefined && (obj.atkScale = message.atkScale);
    message.rcvMax !== undefined && (obj.rcvMax = Math.round(message.rcvMax));
    message.rcvMin !== undefined && (obj.rcvMin = Math.round(message.rcvMin));
    message.rcvScale !== undefined && (obj.rcvScale = message.rcvScale);
    message.hasAnimation !== undefined &&
      (obj.hasAnimation = message.hasAnimation);
    message.hasHqimage !== undefined && (obj.hasHqimage = message.hasHqimage);
    if (message.awakenings) {
      obj.awakenings = message.awakenings.map((e) =>
        e ? AwokenSkill.toJSON(e) : undefined
      );
    } else {
      obj.awakenings = [];
    }
    if (message.superAwakenings) {
      obj.superAwakenings = message.superAwakenings.map((e) =>
        e ? AwokenSkill.toJSON(e) : undefined
      );
    } else {
      obj.superAwakenings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Monster>, I>>(object: I): Monster {
    const message = createBaseMonster();
    message.monsterNoJp = object.monsterNoJp ?? 0;
    message.monsterNoNa = object.monsterNoNa ?? 0;
    message.baseId = object.baseId ?? 0;
    message.leaderSkill =
      object.leaderSkill !== undefined && object.leaderSkill !== null
        ? LeaderSkill.fromPartial(object.leaderSkill)
        : undefined;
    message.activeSkill =
      object.activeSkill !== undefined && object.activeSkill !== null
        ? ActiveSkill.fromPartial(object.activeSkill)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? TranslatedString.fromPartial(object.name)
        : undefined;
    message.types = object.types?.map((e) => e) || [];
    message.rarity = object.rarity ?? 0;
    message.buyMp = object.buyMp ?? 0;
    message.sellMp = object.sellMp ?? 0;
    message.regDate = object.regDate ?? "";
    message.attributes = object.attributes?.map((e) => e) || [];
    message.inheritable = object.inheritable ?? false;
    message.stackable = object.stackable ?? false;
    message.farmable = object.farmable ?? false;
    message.orbSkinId = object.orbSkinId ?? 0;
    message.cost = object.cost ?? 0;
    message.expCurve = object.expCurve ?? 0;
    message.fodderExp = object.fodderExp ?? 0;
    message.maxLevel = object.maxLevel ?? 0;
    message.limitbreak = object.limitbreak ?? false;
    message.latentSlots = object.latentSlots ?? 0;
    message.series = object.series ?? "";
    message.hpMax = object.hpMax ?? 0;
    message.hpMin = object.hpMin ?? 0;
    message.hpScale = object.hpScale ?? 0;
    message.atkMax = object.atkMax ?? 0;
    message.atkMin = object.atkMin ?? 0;
    message.atkScale = object.atkScale ?? 0;
    message.rcvMax = object.rcvMax ?? 0;
    message.rcvMin = object.rcvMin ?? 0;
    message.rcvScale = object.rcvScale ?? 0;
    message.hasAnimation = object.hasAnimation ?? false;
    message.hasHqimage = object.hasHqimage ?? false;
    message.awakenings =
      object.awakenings?.map((e) => AwokenSkill.fromPartial(e)) || [];
    message.superAwakenings =
      object.superAwakenings?.map((e) => AwokenSkill.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLeaderSkill(): LeaderSkill {
  return {
    name: undefined,
    maxHp: 0,
    maxAtk: 0,
    maxRcv: 0,
    maxShield: 0,
    maxCombos: 0,
    bonusDamage: 0,
    multBonusDamage: 0,
    extraTime: 0,
    desc: undefined,
  };
}

export const LeaderSkill = {
  encode(
    message: LeaderSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      TranslatedString.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxHp !== 0) {
      writer.uint32(29).float(message.maxHp);
    }
    if (message.maxAtk !== 0) {
      writer.uint32(37).float(message.maxAtk);
    }
    if (message.maxRcv !== 0) {
      writer.uint32(45).float(message.maxRcv);
    }
    if (message.maxShield !== 0) {
      writer.uint32(53).float(message.maxShield);
    }
    if (message.maxCombos !== 0) {
      writer.uint32(56).int32(message.maxCombos);
    }
    if (message.bonusDamage !== 0) {
      writer.uint32(64).int32(message.bonusDamage);
    }
    if (message.multBonusDamage !== 0) {
      writer.uint32(72).int32(message.multBonusDamage);
    }
    if (message.extraTime !== 0) {
      writer.uint32(85).float(message.extraTime);
    }
    if (message.desc !== undefined) {
      TranslatedString.encode(message.desc, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaderSkill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaderSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = TranslatedString.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxHp = reader.float();
          break;
        case 4:
          message.maxAtk = reader.float();
          break;
        case 5:
          message.maxRcv = reader.float();
          break;
        case 6:
          message.maxShield = reader.float();
          break;
        case 7:
          message.maxCombos = reader.int32();
          break;
        case 8:
          message.bonusDamage = reader.int32();
          break;
        case 9:
          message.multBonusDamage = reader.int32();
          break;
        case 10:
          message.extraTime = reader.float();
          break;
        case 11:
          message.desc = TranslatedString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeaderSkill {
    return {
      name: isSet(object.name)
        ? TranslatedString.fromJSON(object.name)
        : undefined,
      maxHp: isSet(object.maxHp) ? Number(object.maxHp) : 0,
      maxAtk: isSet(object.maxAtk) ? Number(object.maxAtk) : 0,
      maxRcv: isSet(object.maxRcv) ? Number(object.maxRcv) : 0,
      maxShield: isSet(object.maxShield) ? Number(object.maxShield) : 0,
      maxCombos: isSet(object.maxCombos) ? Number(object.maxCombos) : 0,
      bonusDamage: isSet(object.bonusDamage) ? Number(object.bonusDamage) : 0,
      multBonusDamage: isSet(object.multBonusDamage)
        ? Number(object.multBonusDamage)
        : 0,
      extraTime: isSet(object.extraTime) ? Number(object.extraTime) : 0,
      desc: isSet(object.desc)
        ? TranslatedString.fromJSON(object.desc)
        : undefined,
    };
  },

  toJSON(message: LeaderSkill): unknown {
    const obj: any = {};
    message.name !== undefined &&
      (obj.name = message.name
        ? TranslatedString.toJSON(message.name)
        : undefined);
    message.maxHp !== undefined && (obj.maxHp = message.maxHp);
    message.maxAtk !== undefined && (obj.maxAtk = message.maxAtk);
    message.maxRcv !== undefined && (obj.maxRcv = message.maxRcv);
    message.maxShield !== undefined && (obj.maxShield = message.maxShield);
    message.maxCombos !== undefined &&
      (obj.maxCombos = Math.round(message.maxCombos));
    message.bonusDamage !== undefined &&
      (obj.bonusDamage = Math.round(message.bonusDamage));
    message.multBonusDamage !== undefined &&
      (obj.multBonusDamage = Math.round(message.multBonusDamage));
    message.extraTime !== undefined && (obj.extraTime = message.extraTime);
    message.desc !== undefined &&
      (obj.desc = message.desc
        ? TranslatedString.toJSON(message.desc)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeaderSkill>, I>>(
    object: I
  ): LeaderSkill {
    const message = createBaseLeaderSkill();
    message.name =
      object.name !== undefined && object.name !== null
        ? TranslatedString.fromPartial(object.name)
        : undefined;
    message.maxHp = object.maxHp ?? 0;
    message.maxAtk = object.maxAtk ?? 0;
    message.maxRcv = object.maxRcv ?? 0;
    message.maxShield = object.maxShield ?? 0;
    message.maxCombos = object.maxCombos ?? 0;
    message.bonusDamage = object.bonusDamage ?? 0;
    message.multBonusDamage = object.multBonusDamage ?? 0;
    message.extraTime = object.extraTime ?? 0;
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? TranslatedString.fromPartial(object.desc)
        : undefined;
    return message;
  },
};

function createBaseActiveSkill(): ActiveSkill {
  return {
    activeSubskills: [],
    compoundSkillType: "",
    name: undefined,
    cooldownTurnsMin: 0,
    cooldownTurnsMax: 0,
  };
}

export const ActiveSkill = {
  encode(
    message: ActiveSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.activeSubskills) {
      ActiveSubskill.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.compoundSkillType !== "") {
      writer.uint32(18).string(message.compoundSkillType);
    }
    if (message.name !== undefined) {
      TranslatedString.encode(message.name, writer.uint32(26).fork()).ldelim();
    }
    if (message.cooldownTurnsMin !== 0) {
      writer.uint32(40).int32(message.cooldownTurnsMin);
    }
    if (message.cooldownTurnsMax !== 0) {
      writer.uint32(48).int32(message.cooldownTurnsMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveSkill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeSubskills.push(
            ActiveSubskill.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.compoundSkillType = reader.string();
          break;
        case 3:
          message.name = TranslatedString.decode(reader, reader.uint32());
          break;
        case 5:
          message.cooldownTurnsMin = reader.int32();
          break;
        case 6:
          message.cooldownTurnsMax = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveSkill {
    return {
      activeSubskills: Array.isArray(object?.activeSubskills)
        ? object.activeSubskills.map((e: any) => ActiveSubskill.fromJSON(e))
        : [],
      compoundSkillType: isSet(object.compoundSkillType)
        ? String(object.compoundSkillType)
        : "",
      name: isSet(object.name)
        ? TranslatedString.fromJSON(object.name)
        : undefined,
      cooldownTurnsMin: isSet(object.cooldownTurnsMin)
        ? Number(object.cooldownTurnsMin)
        : 0,
      cooldownTurnsMax: isSet(object.cooldownTurnsMax)
        ? Number(object.cooldownTurnsMax)
        : 0,
    };
  },

  toJSON(message: ActiveSkill): unknown {
    const obj: any = {};
    if (message.activeSubskills) {
      obj.activeSubskills = message.activeSubskills.map((e) =>
        e ? ActiveSubskill.toJSON(e) : undefined
      );
    } else {
      obj.activeSubskills = [];
    }
    message.compoundSkillType !== undefined &&
      (obj.compoundSkillType = message.compoundSkillType);
    message.name !== undefined &&
      (obj.name = message.name
        ? TranslatedString.toJSON(message.name)
        : undefined);
    message.cooldownTurnsMin !== undefined &&
      (obj.cooldownTurnsMin = Math.round(message.cooldownTurnsMin));
    message.cooldownTurnsMax !== undefined &&
      (obj.cooldownTurnsMax = Math.round(message.cooldownTurnsMax));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveSkill>, I>>(
    object: I
  ): ActiveSkill {
    const message = createBaseActiveSkill();
    message.activeSubskills =
      object.activeSubskills?.map((e) => ActiveSubskill.fromPartial(e)) || [];
    message.compoundSkillType = object.compoundSkillType ?? "";
    message.name =
      object.name !== undefined && object.name !== null
        ? TranslatedString.fromPartial(object.name)
        : undefined;
    message.cooldownTurnsMin = object.cooldownTurnsMin ?? 0;
    message.cooldownTurnsMax = object.cooldownTurnsMax ?? 0;
    return message;
  },
};

function createBaseActiveSubskill(): ActiveSubskill {
  return { desc: undefined, descTemplated: undefined, cooldown: 0 };
}

export const ActiveSubskill = {
  encode(
    message: ActiveSubskill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.desc !== undefined) {
      TranslatedString.encode(message.desc, writer.uint32(10).fork()).ldelim();
    }
    if (message.descTemplated !== undefined) {
      TranslatedString.encode(
        message.descTemplated,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.cooldown !== 0) {
      writer.uint32(40).int32(message.cooldown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveSubskill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveSubskill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.desc = TranslatedString.decode(reader, reader.uint32());
          break;
        case 3:
          message.descTemplated = TranslatedString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.cooldown = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveSubskill {
    return {
      desc: isSet(object.desc)
        ? TranslatedString.fromJSON(object.desc)
        : undefined,
      descTemplated: isSet(object.descTemplated)
        ? TranslatedString.fromJSON(object.descTemplated)
        : undefined,
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
    };
  },

  toJSON(message: ActiveSubskill): unknown {
    const obj: any = {};
    message.desc !== undefined &&
      (obj.desc = message.desc
        ? TranslatedString.toJSON(message.desc)
        : undefined);
    message.descTemplated !== undefined &&
      (obj.descTemplated = message.descTemplated
        ? TranslatedString.toJSON(message.descTemplated)
        : undefined);
    message.cooldown !== undefined &&
      (obj.cooldown = Math.round(message.cooldown));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveSubskill>, I>>(
    object: I
  ): ActiveSubskill {
    const message = createBaseActiveSubskill();
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? TranslatedString.fromPartial(object.desc)
        : undefined;
    message.descTemplated =
      object.descTemplated !== undefined && object.descTemplated !== null
        ? TranslatedString.fromPartial(object.descTemplated)
        : undefined;
    message.cooldown = object.cooldown ?? 0;
    return message;
  },
};

function createBaseAwokenSkill(): AwokenSkill {
  return {
    awokenSkillId: 0,
    name: undefined,
    desc: undefined,
    adjHp: 0,
    adjAtk: 0,
    adjRcv: 0,
  };
}

export const AwokenSkill = {
  encode(
    message: AwokenSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.awokenSkillId !== 0) {
      writer.uint32(8).int32(message.awokenSkillId);
    }
    if (message.name !== undefined) {
      TranslatedString.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    if (message.desc !== undefined) {
      TranslatedString.encode(message.desc, writer.uint32(34).fork()).ldelim();
    }
    if (message.adjHp !== 0) {
      writer.uint32(48).int32(message.adjHp);
    }
    if (message.adjAtk !== 0) {
      writer.uint32(56).int32(message.adjAtk);
    }
    if (message.adjRcv !== 0) {
      writer.uint32(64).int32(message.adjRcv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AwokenSkill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAwokenSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.awokenSkillId = reader.int32();
          break;
        case 2:
          message.name = TranslatedString.decode(reader, reader.uint32());
          break;
        case 4:
          message.desc = TranslatedString.decode(reader, reader.uint32());
          break;
        case 6:
          message.adjHp = reader.int32();
          break;
        case 7:
          message.adjAtk = reader.int32();
          break;
        case 8:
          message.adjRcv = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AwokenSkill {
    return {
      awokenSkillId: isSet(object.awokenSkillId)
        ? Number(object.awokenSkillId)
        : 0,
      name: isSet(object.name)
        ? TranslatedString.fromJSON(object.name)
        : undefined,
      desc: isSet(object.desc)
        ? TranslatedString.fromJSON(object.desc)
        : undefined,
      adjHp: isSet(object.adjHp) ? Number(object.adjHp) : 0,
      adjAtk: isSet(object.adjAtk) ? Number(object.adjAtk) : 0,
      adjRcv: isSet(object.adjRcv) ? Number(object.adjRcv) : 0,
    };
  },

  toJSON(message: AwokenSkill): unknown {
    const obj: any = {};
    message.awokenSkillId !== undefined &&
      (obj.awokenSkillId = Math.round(message.awokenSkillId));
    message.name !== undefined &&
      (obj.name = message.name
        ? TranslatedString.toJSON(message.name)
        : undefined);
    message.desc !== undefined &&
      (obj.desc = message.desc
        ? TranslatedString.toJSON(message.desc)
        : undefined);
    message.adjHp !== undefined && (obj.adjHp = Math.round(message.adjHp));
    message.adjAtk !== undefined && (obj.adjAtk = Math.round(message.adjAtk));
    message.adjRcv !== undefined && (obj.adjRcv = Math.round(message.adjRcv));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AwokenSkill>, I>>(
    object: I
  ): AwokenSkill {
    const message = createBaseAwokenSkill();
    message.awokenSkillId = object.awokenSkillId ?? 0;
    message.name =
      object.name !== undefined && object.name !== null
        ? TranslatedString.fromPartial(object.name)
        : undefined;
    message.desc =
      object.desc !== undefined && object.desc !== null
        ? TranslatedString.fromPartial(object.desc)
        : undefined;
    message.adjHp = object.adjHp ?? 0;
    message.adjAtk = object.adjAtk ?? 0;
    message.adjRcv = object.adjRcv ?? 0;
    return message;
  },
};

function createBaseTranslatedString(): TranslatedString {
  return { ja: "", en: "" };
}

export const TranslatedString = {
  encode(
    message: TranslatedString,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ja !== "") {
      writer.uint32(10).string(message.ja);
    }
    if (message.en !== "") {
      writer.uint32(18).string(message.en);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslatedString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslatedString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ja = reader.string();
          break;
        case 2:
          message.en = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TranslatedString {
    return {
      ja: isSet(object.ja) ? String(object.ja) : "",
      en: isSet(object.en) ? String(object.en) : "",
    };
  },

  toJSON(message: TranslatedString): unknown {
    const obj: any = {};
    message.ja !== undefined && (obj.ja = message.ja);
    message.en !== undefined && (obj.en = message.en);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TranslatedString>, I>>(
    object: I
  ): TranslatedString {
    const message = createBaseTranslatedString();
    message.ja = object.ja ?? "";
    message.en = object.en ?? "";
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
