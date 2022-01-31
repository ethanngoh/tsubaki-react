/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "pad_api.monster";

export interface Monster {
  monster_no_jp: number;
  monster_no_na: number;
  base_id: number;
  leader_skill: LeaderSkill | undefined;
  active_skill: ActiveSkill | undefined;
  name_ja: string;
  name_en: string;
  types: string[];
  rarity: number;
  buy_mp: number;
  sell_mp: number;
  reg_date: string;
  attributes: string[];
  inheritable: boolean;
  stackable: boolean;
  farmable: boolean;
  orb_skin_id: number;
  cost: number;
  exp_curve: number;
  fodder_exp: number;
  max_level: number;
  limitbreak: boolean;
  latent_slots: number;
  series: string;
  hp_max: number;
  hp_min: number;
  hp_scale: number;
  atk_max: number;
  atk_min: number;
  atk_scale: number;
  rcv_max: number;
  rcv_min: number;
  rcv_scale: number;
  has_animation: boolean;
  has_hqimage: boolean;
  awakenings: AwokenSkill[];
  super_awakenings: AwokenSkill[];
}

export interface LeaderSkill {
  name_ja: string;
  name_en: string;
  max_hp: number;
  max_atk: number;
  max_rcv: number;
  max_shield: number;
  max_combos: number;
  bonus_damage: number;
  mult_bonus_damage: number;
  extra_time: number;
  desc_ja: string;
  desc_en: string;
}

export interface ActiveSkill {
  active_subskills: ActiveSubskill[];
  compound_skill_type: string;
  name_ja: string;
  name_en: string;
  cooldown_turns_min: number;
  cooldown_turns_max: number;
}

export interface ActiveSubskill {
  desc_ja: string;
  desc_en: string;
  desc_templated_ja: string;
  desc_templated_en: string;
  cooldown: number;
}

export interface AwokenSkill {
  awoken_skill_id: number;
  name_ja: string;
  name_en: string;
  desc_ja: string;
  desc_en: string;
  adj_hp: number;
  adj_atk: number;
  adj_rcv: number;
}

function createBaseMonster(): Monster {
  return {
    monster_no_jp: 0,
    monster_no_na: 0,
    base_id: 0,
    leader_skill: undefined,
    active_skill: undefined,
    name_ja: "",
    name_en: "",
    types: [],
    rarity: 0,
    buy_mp: 0,
    sell_mp: 0,
    reg_date: "",
    attributes: [],
    inheritable: false,
    stackable: false,
    farmable: false,
    orb_skin_id: 0,
    cost: 0,
    exp_curve: 0,
    fodder_exp: 0,
    max_level: 0,
    limitbreak: false,
    latent_slots: 0,
    series: "",
    hp_max: 0,
    hp_min: 0,
    hp_scale: 0,
    atk_max: 0,
    atk_min: 0,
    atk_scale: 0,
    rcv_max: 0,
    rcv_min: 0,
    rcv_scale: 0,
    has_animation: false,
    has_hqimage: false,
    awakenings: [],
    super_awakenings: [],
  };
}

export const Monster = {
  encode(
    message: Monster,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.monster_no_jp !== 0) {
      writer.uint32(8).int32(message.monster_no_jp);
    }
    if (message.monster_no_na !== 0) {
      writer.uint32(16).int32(message.monster_no_na);
    }
    if (message.base_id !== 0) {
      writer.uint32(24).int32(message.base_id);
    }
    if (message.leader_skill !== undefined) {
      LeaderSkill.encode(
        message.leader_skill,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.active_skill !== undefined) {
      ActiveSkill.encode(
        message.active_skill,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.name_ja !== "") {
      writer.uint32(50).string(message.name_ja);
    }
    if (message.name_en !== "") {
      writer.uint32(58).string(message.name_en);
    }
    for (const v of message.types) {
      writer.uint32(66).string(v!);
    }
    if (message.rarity !== 0) {
      writer.uint32(72).int32(message.rarity);
    }
    if (message.buy_mp !== 0) {
      writer.uint32(80).int32(message.buy_mp);
    }
    if (message.sell_mp !== 0) {
      writer.uint32(88).int32(message.sell_mp);
    }
    if (message.reg_date !== "") {
      writer.uint32(98).string(message.reg_date);
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
    if (message.orb_skin_id !== 0) {
      writer.uint32(128).int32(message.orb_skin_id);
    }
    if (message.cost !== 0) {
      writer.uint32(136).int32(message.cost);
    }
    if (message.exp_curve !== 0) {
      writer.uint32(144).int32(message.exp_curve);
    }
    if (message.fodder_exp !== 0) {
      writer.uint32(152).int32(message.fodder_exp);
    }
    if (message.max_level !== 0) {
      writer.uint32(160).int32(message.max_level);
    }
    if (message.limitbreak === true) {
      writer.uint32(168).bool(message.limitbreak);
    }
    if (message.latent_slots !== 0) {
      writer.uint32(176).int32(message.latent_slots);
    }
    if (message.series !== "") {
      writer.uint32(298).string(message.series);
    }
    if (message.hp_max !== 0) {
      writer.uint32(184).int32(message.hp_max);
    }
    if (message.hp_min !== 0) {
      writer.uint32(192).int32(message.hp_min);
    }
    if (message.hp_scale !== 0) {
      writer.uint32(205).float(message.hp_scale);
    }
    if (message.atk_max !== 0) {
      writer.uint32(208).int32(message.atk_max);
    }
    if (message.atk_min !== 0) {
      writer.uint32(216).int32(message.atk_min);
    }
    if (message.atk_scale !== 0) {
      writer.uint32(229).float(message.atk_scale);
    }
    if (message.rcv_max !== 0) {
      writer.uint32(232).int32(message.rcv_max);
    }
    if (message.rcv_min !== 0) {
      writer.uint32(240).int32(message.rcv_min);
    }
    if (message.rcv_scale !== 0) {
      writer.uint32(253).float(message.rcv_scale);
    }
    if (message.has_animation === true) {
      writer.uint32(256).bool(message.has_animation);
    }
    if (message.has_hqimage === true) {
      writer.uint32(264).bool(message.has_hqimage);
    }
    for (const v of message.awakenings) {
      AwokenSkill.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    for (const v of message.super_awakenings) {
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
          message.monster_no_jp = reader.int32();
          break;
        case 2:
          message.monster_no_na = reader.int32();
          break;
        case 3:
          message.base_id = reader.int32();
          break;
        case 4:
          message.leader_skill = LeaderSkill.decode(reader, reader.uint32());
          break;
        case 5:
          message.active_skill = ActiveSkill.decode(reader, reader.uint32());
          break;
        case 6:
          message.name_ja = reader.string();
          break;
        case 7:
          message.name_en = reader.string();
          break;
        case 8:
          message.types.push(reader.string());
          break;
        case 9:
          message.rarity = reader.int32();
          break;
        case 10:
          message.buy_mp = reader.int32();
          break;
        case 11:
          message.sell_mp = reader.int32();
          break;
        case 12:
          message.reg_date = reader.string();
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
          message.orb_skin_id = reader.int32();
          break;
        case 17:
          message.cost = reader.int32();
          break;
        case 18:
          message.exp_curve = reader.int32();
          break;
        case 19:
          message.fodder_exp = reader.int32();
          break;
        case 20:
          message.max_level = reader.int32();
          break;
        case 21:
          message.limitbreak = reader.bool();
          break;
        case 22:
          message.latent_slots = reader.int32();
          break;
        case 37:
          message.series = reader.string();
          break;
        case 23:
          message.hp_max = reader.int32();
          break;
        case 24:
          message.hp_min = reader.int32();
          break;
        case 25:
          message.hp_scale = reader.float();
          break;
        case 26:
          message.atk_max = reader.int32();
          break;
        case 27:
          message.atk_min = reader.int32();
          break;
        case 28:
          message.atk_scale = reader.float();
          break;
        case 29:
          message.rcv_max = reader.int32();
          break;
        case 30:
          message.rcv_min = reader.int32();
          break;
        case 31:
          message.rcv_scale = reader.float();
          break;
        case 32:
          message.has_animation = reader.bool();
          break;
        case 33:
          message.has_hqimage = reader.bool();
          break;
        case 34:
          message.awakenings.push(AwokenSkill.decode(reader, reader.uint32()));
          break;
        case 35:
          message.super_awakenings.push(
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
      monster_no_jp: isSet(object.monster_no_jp)
        ? Number(object.monster_no_jp)
        : 0,
      monster_no_na: isSet(object.monster_no_na)
        ? Number(object.monster_no_na)
        : 0,
      base_id: isSet(object.base_id) ? Number(object.base_id) : 0,
      leader_skill: isSet(object.leader_skill)
        ? LeaderSkill.fromJSON(object.leader_skill)
        : undefined,
      active_skill: isSet(object.active_skill)
        ? ActiveSkill.fromJSON(object.active_skill)
        : undefined,
      name_ja: isSet(object.name_ja) ? String(object.name_ja) : "",
      name_en: isSet(object.name_en) ? String(object.name_en) : "",
      types: Array.isArray(object?.types)
        ? object.types.map((e: any) => String(e))
        : [],
      rarity: isSet(object.rarity) ? Number(object.rarity) : 0,
      buy_mp: isSet(object.buy_mp) ? Number(object.buy_mp) : 0,
      sell_mp: isSet(object.sell_mp) ? Number(object.sell_mp) : 0,
      reg_date: isSet(object.reg_date) ? String(object.reg_date) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => String(e))
        : [],
      inheritable: isSet(object.inheritable)
        ? Boolean(object.inheritable)
        : false,
      stackable: isSet(object.stackable) ? Boolean(object.stackable) : false,
      farmable: isSet(object.farmable) ? Boolean(object.farmable) : false,
      orb_skin_id: isSet(object.orb_skin_id) ? Number(object.orb_skin_id) : 0,
      cost: isSet(object.cost) ? Number(object.cost) : 0,
      exp_curve: isSet(object.exp_curve) ? Number(object.exp_curve) : 0,
      fodder_exp: isSet(object.fodder_exp) ? Number(object.fodder_exp) : 0,
      max_level: isSet(object.max_level) ? Number(object.max_level) : 0,
      limitbreak: isSet(object.limitbreak) ? Boolean(object.limitbreak) : false,
      latent_slots: isSet(object.latent_slots)
        ? Number(object.latent_slots)
        : 0,
      series: isSet(object.series) ? String(object.series) : "",
      hp_max: isSet(object.hp_max) ? Number(object.hp_max) : 0,
      hp_min: isSet(object.hp_min) ? Number(object.hp_min) : 0,
      hp_scale: isSet(object.hp_scale) ? Number(object.hp_scale) : 0,
      atk_max: isSet(object.atk_max) ? Number(object.atk_max) : 0,
      atk_min: isSet(object.atk_min) ? Number(object.atk_min) : 0,
      atk_scale: isSet(object.atk_scale) ? Number(object.atk_scale) : 0,
      rcv_max: isSet(object.rcv_max) ? Number(object.rcv_max) : 0,
      rcv_min: isSet(object.rcv_min) ? Number(object.rcv_min) : 0,
      rcv_scale: isSet(object.rcv_scale) ? Number(object.rcv_scale) : 0,
      has_animation: isSet(object.has_animation)
        ? Boolean(object.has_animation)
        : false,
      has_hqimage: isSet(object.has_hqimage)
        ? Boolean(object.has_hqimage)
        : false,
      awakenings: Array.isArray(object?.awakenings)
        ? object.awakenings.map((e: any) => AwokenSkill.fromJSON(e))
        : [],
      super_awakenings: Array.isArray(object?.super_awakenings)
        ? object.super_awakenings.map((e: any) => AwokenSkill.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Monster): unknown {
    const obj: any = {};
    message.monster_no_jp !== undefined &&
      (obj.monster_no_jp = Math.round(message.monster_no_jp));
    message.monster_no_na !== undefined &&
      (obj.monster_no_na = Math.round(message.monster_no_na));
    message.base_id !== undefined &&
      (obj.base_id = Math.round(message.base_id));
    message.leader_skill !== undefined &&
      (obj.leader_skill = message.leader_skill
        ? LeaderSkill.toJSON(message.leader_skill)
        : undefined);
    message.active_skill !== undefined &&
      (obj.active_skill = message.active_skill
        ? ActiveSkill.toJSON(message.active_skill)
        : undefined);
    message.name_ja !== undefined && (obj.name_ja = message.name_ja);
    message.name_en !== undefined && (obj.name_en = message.name_en);
    if (message.types) {
      obj.types = message.types.map((e) => e);
    } else {
      obj.types = [];
    }
    message.rarity !== undefined && (obj.rarity = Math.round(message.rarity));
    message.buy_mp !== undefined && (obj.buy_mp = Math.round(message.buy_mp));
    message.sell_mp !== undefined &&
      (obj.sell_mp = Math.round(message.sell_mp));
    message.reg_date !== undefined && (obj.reg_date = message.reg_date);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e);
    } else {
      obj.attributes = [];
    }
    message.inheritable !== undefined &&
      (obj.inheritable = message.inheritable);
    message.stackable !== undefined && (obj.stackable = message.stackable);
    message.farmable !== undefined && (obj.farmable = message.farmable);
    message.orb_skin_id !== undefined &&
      (obj.orb_skin_id = Math.round(message.orb_skin_id));
    message.cost !== undefined && (obj.cost = Math.round(message.cost));
    message.exp_curve !== undefined &&
      (obj.exp_curve = Math.round(message.exp_curve));
    message.fodder_exp !== undefined &&
      (obj.fodder_exp = Math.round(message.fodder_exp));
    message.max_level !== undefined &&
      (obj.max_level = Math.round(message.max_level));
    message.limitbreak !== undefined && (obj.limitbreak = message.limitbreak);
    message.latent_slots !== undefined &&
      (obj.latent_slots = Math.round(message.latent_slots));
    message.series !== undefined && (obj.series = message.series);
    message.hp_max !== undefined && (obj.hp_max = Math.round(message.hp_max));
    message.hp_min !== undefined && (obj.hp_min = Math.round(message.hp_min));
    message.hp_scale !== undefined && (obj.hp_scale = message.hp_scale);
    message.atk_max !== undefined &&
      (obj.atk_max = Math.round(message.atk_max));
    message.atk_min !== undefined &&
      (obj.atk_min = Math.round(message.atk_min));
    message.atk_scale !== undefined && (obj.atk_scale = message.atk_scale);
    message.rcv_max !== undefined &&
      (obj.rcv_max = Math.round(message.rcv_max));
    message.rcv_min !== undefined &&
      (obj.rcv_min = Math.round(message.rcv_min));
    message.rcv_scale !== undefined && (obj.rcv_scale = message.rcv_scale);
    message.has_animation !== undefined &&
      (obj.has_animation = message.has_animation);
    message.has_hqimage !== undefined &&
      (obj.has_hqimage = message.has_hqimage);
    if (message.awakenings) {
      obj.awakenings = message.awakenings.map((e) =>
        e ? AwokenSkill.toJSON(e) : undefined
      );
    } else {
      obj.awakenings = [];
    }
    if (message.super_awakenings) {
      obj.super_awakenings = message.super_awakenings.map((e) =>
        e ? AwokenSkill.toJSON(e) : undefined
      );
    } else {
      obj.super_awakenings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Monster>, I>>(object: I): Monster {
    const message = createBaseMonster();
    message.monster_no_jp = object.monster_no_jp ?? 0;
    message.monster_no_na = object.monster_no_na ?? 0;
    message.base_id = object.base_id ?? 0;
    message.leader_skill =
      object.leader_skill !== undefined && object.leader_skill !== null
        ? LeaderSkill.fromPartial(object.leader_skill)
        : undefined;
    message.active_skill =
      object.active_skill !== undefined && object.active_skill !== null
        ? ActiveSkill.fromPartial(object.active_skill)
        : undefined;
    message.name_ja = object.name_ja ?? "";
    message.name_en = object.name_en ?? "";
    message.types = object.types?.map((e) => e) || [];
    message.rarity = object.rarity ?? 0;
    message.buy_mp = object.buy_mp ?? 0;
    message.sell_mp = object.sell_mp ?? 0;
    message.reg_date = object.reg_date ?? "";
    message.attributes = object.attributes?.map((e) => e) || [];
    message.inheritable = object.inheritable ?? false;
    message.stackable = object.stackable ?? false;
    message.farmable = object.farmable ?? false;
    message.orb_skin_id = object.orb_skin_id ?? 0;
    message.cost = object.cost ?? 0;
    message.exp_curve = object.exp_curve ?? 0;
    message.fodder_exp = object.fodder_exp ?? 0;
    message.max_level = object.max_level ?? 0;
    message.limitbreak = object.limitbreak ?? false;
    message.latent_slots = object.latent_slots ?? 0;
    message.series = object.series ?? "";
    message.hp_max = object.hp_max ?? 0;
    message.hp_min = object.hp_min ?? 0;
    message.hp_scale = object.hp_scale ?? 0;
    message.atk_max = object.atk_max ?? 0;
    message.atk_min = object.atk_min ?? 0;
    message.atk_scale = object.atk_scale ?? 0;
    message.rcv_max = object.rcv_max ?? 0;
    message.rcv_min = object.rcv_min ?? 0;
    message.rcv_scale = object.rcv_scale ?? 0;
    message.has_animation = object.has_animation ?? false;
    message.has_hqimage = object.has_hqimage ?? false;
    message.awakenings =
      object.awakenings?.map((e) => AwokenSkill.fromPartial(e)) || [];
    message.super_awakenings =
      object.super_awakenings?.map((e) => AwokenSkill.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLeaderSkill(): LeaderSkill {
  return {
    name_ja: "",
    name_en: "",
    max_hp: 0,
    max_atk: 0,
    max_rcv: 0,
    max_shield: 0,
    max_combos: 0,
    bonus_damage: 0,
    mult_bonus_damage: 0,
    extra_time: 0,
    desc_ja: "",
    desc_en: "",
  };
}

export const LeaderSkill = {
  encode(
    message: LeaderSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name_ja !== "") {
      writer.uint32(10).string(message.name_ja);
    }
    if (message.name_en !== "") {
      writer.uint32(18).string(message.name_en);
    }
    if (message.max_hp !== 0) {
      writer.uint32(29).float(message.max_hp);
    }
    if (message.max_atk !== 0) {
      writer.uint32(37).float(message.max_atk);
    }
    if (message.max_rcv !== 0) {
      writer.uint32(45).float(message.max_rcv);
    }
    if (message.max_shield !== 0) {
      writer.uint32(53).float(message.max_shield);
    }
    if (message.max_combos !== 0) {
      writer.uint32(56).int32(message.max_combos);
    }
    if (message.bonus_damage !== 0) {
      writer.uint32(64).int32(message.bonus_damage);
    }
    if (message.mult_bonus_damage !== 0) {
      writer.uint32(72).int32(message.mult_bonus_damage);
    }
    if (message.extra_time !== 0) {
      writer.uint32(85).float(message.extra_time);
    }
    if (message.desc_ja !== "") {
      writer.uint32(90).string(message.desc_ja);
    }
    if (message.desc_en !== "") {
      writer.uint32(98).string(message.desc_en);
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
          message.name_ja = reader.string();
          break;
        case 2:
          message.name_en = reader.string();
          break;
        case 3:
          message.max_hp = reader.float();
          break;
        case 4:
          message.max_atk = reader.float();
          break;
        case 5:
          message.max_rcv = reader.float();
          break;
        case 6:
          message.max_shield = reader.float();
          break;
        case 7:
          message.max_combos = reader.int32();
          break;
        case 8:
          message.bonus_damage = reader.int32();
          break;
        case 9:
          message.mult_bonus_damage = reader.int32();
          break;
        case 10:
          message.extra_time = reader.float();
          break;
        case 11:
          message.desc_ja = reader.string();
          break;
        case 12:
          message.desc_en = reader.string();
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
      name_ja: isSet(object.name_ja) ? String(object.name_ja) : "",
      name_en: isSet(object.name_en) ? String(object.name_en) : "",
      max_hp: isSet(object.max_hp) ? Number(object.max_hp) : 0,
      max_atk: isSet(object.max_atk) ? Number(object.max_atk) : 0,
      max_rcv: isSet(object.max_rcv) ? Number(object.max_rcv) : 0,
      max_shield: isSet(object.max_shield) ? Number(object.max_shield) : 0,
      max_combos: isSet(object.max_combos) ? Number(object.max_combos) : 0,
      bonus_damage: isSet(object.bonus_damage)
        ? Number(object.bonus_damage)
        : 0,
      mult_bonus_damage: isSet(object.mult_bonus_damage)
        ? Number(object.mult_bonus_damage)
        : 0,
      extra_time: isSet(object.extra_time) ? Number(object.extra_time) : 0,
      desc_ja: isSet(object.desc_ja) ? String(object.desc_ja) : "",
      desc_en: isSet(object.desc_en) ? String(object.desc_en) : "",
    };
  },

  toJSON(message: LeaderSkill): unknown {
    const obj: any = {};
    message.name_ja !== undefined && (obj.name_ja = message.name_ja);
    message.name_en !== undefined && (obj.name_en = message.name_en);
    message.max_hp !== undefined && (obj.max_hp = message.max_hp);
    message.max_atk !== undefined && (obj.max_atk = message.max_atk);
    message.max_rcv !== undefined && (obj.max_rcv = message.max_rcv);
    message.max_shield !== undefined && (obj.max_shield = message.max_shield);
    message.max_combos !== undefined &&
      (obj.max_combos = Math.round(message.max_combos));
    message.bonus_damage !== undefined &&
      (obj.bonus_damage = Math.round(message.bonus_damage));
    message.mult_bonus_damage !== undefined &&
      (obj.mult_bonus_damage = Math.round(message.mult_bonus_damage));
    message.extra_time !== undefined && (obj.extra_time = message.extra_time);
    message.desc_ja !== undefined && (obj.desc_ja = message.desc_ja);
    message.desc_en !== undefined && (obj.desc_en = message.desc_en);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeaderSkill>, I>>(
    object: I
  ): LeaderSkill {
    const message = createBaseLeaderSkill();
    message.name_ja = object.name_ja ?? "";
    message.name_en = object.name_en ?? "";
    message.max_hp = object.max_hp ?? 0;
    message.max_atk = object.max_atk ?? 0;
    message.max_rcv = object.max_rcv ?? 0;
    message.max_shield = object.max_shield ?? 0;
    message.max_combos = object.max_combos ?? 0;
    message.bonus_damage = object.bonus_damage ?? 0;
    message.mult_bonus_damage = object.mult_bonus_damage ?? 0;
    message.extra_time = object.extra_time ?? 0;
    message.desc_ja = object.desc_ja ?? "";
    message.desc_en = object.desc_en ?? "";
    return message;
  },
};

function createBaseActiveSkill(): ActiveSkill {
  return {
    active_subskills: [],
    compound_skill_type: "",
    name_ja: "",
    name_en: "",
    cooldown_turns_min: 0,
    cooldown_turns_max: 0,
  };
}

export const ActiveSkill = {
  encode(
    message: ActiveSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.active_subskills) {
      ActiveSubskill.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.compound_skill_type !== "") {
      writer.uint32(18).string(message.compound_skill_type);
    }
    if (message.name_ja !== "") {
      writer.uint32(26).string(message.name_ja);
    }
    if (message.name_en !== "") {
      writer.uint32(34).string(message.name_en);
    }
    if (message.cooldown_turns_min !== 0) {
      writer.uint32(40).int32(message.cooldown_turns_min);
    }
    if (message.cooldown_turns_max !== 0) {
      writer.uint32(48).int32(message.cooldown_turns_max);
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
          message.active_subskills.push(
            ActiveSubskill.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.compound_skill_type = reader.string();
          break;
        case 3:
          message.name_ja = reader.string();
          break;
        case 4:
          message.name_en = reader.string();
          break;
        case 5:
          message.cooldown_turns_min = reader.int32();
          break;
        case 6:
          message.cooldown_turns_max = reader.int32();
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
      active_subskills: Array.isArray(object?.active_subskills)
        ? object.active_subskills.map((e: any) => ActiveSubskill.fromJSON(e))
        : [],
      compound_skill_type: isSet(object.compound_skill_type)
        ? String(object.compound_skill_type)
        : "",
      name_ja: isSet(object.name_ja) ? String(object.name_ja) : "",
      name_en: isSet(object.name_en) ? String(object.name_en) : "",
      cooldown_turns_min: isSet(object.cooldown_turns_min)
        ? Number(object.cooldown_turns_min)
        : 0,
      cooldown_turns_max: isSet(object.cooldown_turns_max)
        ? Number(object.cooldown_turns_max)
        : 0,
    };
  },

  toJSON(message: ActiveSkill): unknown {
    const obj: any = {};
    if (message.active_subskills) {
      obj.active_subskills = message.active_subskills.map((e) =>
        e ? ActiveSubskill.toJSON(e) : undefined
      );
    } else {
      obj.active_subskills = [];
    }
    message.compound_skill_type !== undefined &&
      (obj.compound_skill_type = message.compound_skill_type);
    message.name_ja !== undefined && (obj.name_ja = message.name_ja);
    message.name_en !== undefined && (obj.name_en = message.name_en);
    message.cooldown_turns_min !== undefined &&
      (obj.cooldown_turns_min = Math.round(message.cooldown_turns_min));
    message.cooldown_turns_max !== undefined &&
      (obj.cooldown_turns_max = Math.round(message.cooldown_turns_max));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveSkill>, I>>(
    object: I
  ): ActiveSkill {
    const message = createBaseActiveSkill();
    message.active_subskills =
      object.active_subskills?.map((e) => ActiveSubskill.fromPartial(e)) || [];
    message.compound_skill_type = object.compound_skill_type ?? "";
    message.name_ja = object.name_ja ?? "";
    message.name_en = object.name_en ?? "";
    message.cooldown_turns_min = object.cooldown_turns_min ?? 0;
    message.cooldown_turns_max = object.cooldown_turns_max ?? 0;
    return message;
  },
};

function createBaseActiveSubskill(): ActiveSubskill {
  return {
    desc_ja: "",
    desc_en: "",
    desc_templated_ja: "",
    desc_templated_en: "",
    cooldown: 0,
  };
}

export const ActiveSubskill = {
  encode(
    message: ActiveSubskill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.desc_ja !== "") {
      writer.uint32(10).string(message.desc_ja);
    }
    if (message.desc_en !== "") {
      writer.uint32(18).string(message.desc_en);
    }
    if (message.desc_templated_ja !== "") {
      writer.uint32(26).string(message.desc_templated_ja);
    }
    if (message.desc_templated_en !== "") {
      writer.uint32(34).string(message.desc_templated_en);
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
          message.desc_ja = reader.string();
          break;
        case 2:
          message.desc_en = reader.string();
          break;
        case 3:
          message.desc_templated_ja = reader.string();
          break;
        case 4:
          message.desc_templated_en = reader.string();
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
      desc_ja: isSet(object.desc_ja) ? String(object.desc_ja) : "",
      desc_en: isSet(object.desc_en) ? String(object.desc_en) : "",
      desc_templated_ja: isSet(object.desc_templated_ja)
        ? String(object.desc_templated_ja)
        : "",
      desc_templated_en: isSet(object.desc_templated_en)
        ? String(object.desc_templated_en)
        : "",
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
    };
  },

  toJSON(message: ActiveSubskill): unknown {
    const obj: any = {};
    message.desc_ja !== undefined && (obj.desc_ja = message.desc_ja);
    message.desc_en !== undefined && (obj.desc_en = message.desc_en);
    message.desc_templated_ja !== undefined &&
      (obj.desc_templated_ja = message.desc_templated_ja);
    message.desc_templated_en !== undefined &&
      (obj.desc_templated_en = message.desc_templated_en);
    message.cooldown !== undefined &&
      (obj.cooldown = Math.round(message.cooldown));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveSubskill>, I>>(
    object: I
  ): ActiveSubskill {
    const message = createBaseActiveSubskill();
    message.desc_ja = object.desc_ja ?? "";
    message.desc_en = object.desc_en ?? "";
    message.desc_templated_ja = object.desc_templated_ja ?? "";
    message.desc_templated_en = object.desc_templated_en ?? "";
    message.cooldown = object.cooldown ?? 0;
    return message;
  },
};

function createBaseAwokenSkill(): AwokenSkill {
  return {
    awoken_skill_id: 0,
    name_ja: "",
    name_en: "",
    desc_ja: "",
    desc_en: "",
    adj_hp: 0,
    adj_atk: 0,
    adj_rcv: 0,
  };
}

export const AwokenSkill = {
  encode(
    message: AwokenSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.awoken_skill_id !== 0) {
      writer.uint32(8).int32(message.awoken_skill_id);
    }
    if (message.name_ja !== "") {
      writer.uint32(18).string(message.name_ja);
    }
    if (message.name_en !== "") {
      writer.uint32(26).string(message.name_en);
    }
    if (message.desc_ja !== "") {
      writer.uint32(34).string(message.desc_ja);
    }
    if (message.desc_en !== "") {
      writer.uint32(42).string(message.desc_en);
    }
    if (message.adj_hp !== 0) {
      writer.uint32(48).int32(message.adj_hp);
    }
    if (message.adj_atk !== 0) {
      writer.uint32(56).int32(message.adj_atk);
    }
    if (message.adj_rcv !== 0) {
      writer.uint32(64).int32(message.adj_rcv);
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
          message.awoken_skill_id = reader.int32();
          break;
        case 2:
          message.name_ja = reader.string();
          break;
        case 3:
          message.name_en = reader.string();
          break;
        case 4:
          message.desc_ja = reader.string();
          break;
        case 5:
          message.desc_en = reader.string();
          break;
        case 6:
          message.adj_hp = reader.int32();
          break;
        case 7:
          message.adj_atk = reader.int32();
          break;
        case 8:
          message.adj_rcv = reader.int32();
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
      awoken_skill_id: isSet(object.awoken_skill_id)
        ? Number(object.awoken_skill_id)
        : 0,
      name_ja: isSet(object.name_ja) ? String(object.name_ja) : "",
      name_en: isSet(object.name_en) ? String(object.name_en) : "",
      desc_ja: isSet(object.desc_ja) ? String(object.desc_ja) : "",
      desc_en: isSet(object.desc_en) ? String(object.desc_en) : "",
      adj_hp: isSet(object.adj_hp) ? Number(object.adj_hp) : 0,
      adj_atk: isSet(object.adj_atk) ? Number(object.adj_atk) : 0,
      adj_rcv: isSet(object.adj_rcv) ? Number(object.adj_rcv) : 0,
    };
  },

  toJSON(message: AwokenSkill): unknown {
    const obj: any = {};
    message.awoken_skill_id !== undefined &&
      (obj.awoken_skill_id = Math.round(message.awoken_skill_id));
    message.name_ja !== undefined && (obj.name_ja = message.name_ja);
    message.name_en !== undefined && (obj.name_en = message.name_en);
    message.desc_ja !== undefined && (obj.desc_ja = message.desc_ja);
    message.desc_en !== undefined && (obj.desc_en = message.desc_en);
    message.adj_hp !== undefined && (obj.adj_hp = Math.round(message.adj_hp));
    message.adj_atk !== undefined &&
      (obj.adj_atk = Math.round(message.adj_atk));
    message.adj_rcv !== undefined &&
      (obj.adj_rcv = Math.round(message.adj_rcv));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AwokenSkill>, I>>(
    object: I
  ): AwokenSkill {
    const message = createBaseAwokenSkill();
    message.awoken_skill_id = object.awoken_skill_id ?? 0;
    message.name_ja = object.name_ja ?? "";
    message.name_en = object.name_en ?? "";
    message.desc_ja = object.desc_ja ?? "";
    message.desc_en = object.desc_en ?? "";
    message.adj_hp = object.adj_hp ?? 0;
    message.adj_atk = object.adj_atk ?? 0;
    message.adj_rcv = object.adj_rcv ?? 0;
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
