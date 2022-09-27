/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActiveSkill } from "./ActiveSkill";
import type { Attribute } from "./Attribute";
import type { Awakening } from "./Awakening";
import type { LeaderSkill } from "./LeaderSkill";
import type { MonsterType } from "./MonsterType";
import type { Series } from "./Series";
import type { StatValues } from "./StatValues";

export type MonsterResponse = {
  active_skill: ActiveSkill;
  active_skill_id: number;
  all_series: Array<Series>;
  atk_max: number;
  atk_min: number;
  atk_scale: number;
  attr1?: Attribute;
  attr2?: Attribute;
  awakenings: Array<Awakening>;
  base_evo_id: number;
  buy_mp?: number;
  collab_id: number;
  cost: number;
  evo_gem_id?: number;
  exp: number;
  fodder_exp: number;
  group_id: number;
  has_animation: boolean;
  has_hqimage: boolean;
  hp_max: number;
  hp_min: number;
  hp_scale: number;
  in_mpshop: boolean;
  in_pem: boolean;
  in_rem: boolean;
  in_vem: boolean;
  is_equip: boolean;
  is_farmable: boolean;
  is_inheritable: boolean;
  is_stackable: boolean;
  latent_slots: number;
  leader_skill: LeaderSkill;
  leader_skill_id: number;
  level: number;
  limit_mult: number;
  monster_id: number;
  monster_no_jp: number;
  monster_no_kr: number;
  monster_no_na: number;
  name_en: string;
  name_en_override?: string;
  name_ja: string;
  name_ko: string;
  on_jp: boolean;
  on_kr: boolean;
  on_na: boolean;
  orb_skin_id?: number;
  rarity: number;
  rcv_max: number;
  rcv_min: number;
  rcv_scale: number;
  reg_date: string;
  roma_subname?: string;
  sell_gold: number;
  sell_mp: number;
  series: Series;
  series_id: number;
  server_priority: string;
  stat_values: StatValues;
  superawakening_count: number;
  type1?: MonsterType;
  type2?: MonsterType;
  type3?: MonsterType;
  types: Array<MonsterType>;
  unoverridden_name_en: string;
  voice_id_jp?: number;
  voice_id_na?: number;
};
