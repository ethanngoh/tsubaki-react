import { Button, Checkbox, FormGroup, InputGroup, HTMLTable } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { ActiveSkill, ActiveSubskill, LeaderSkill, Monster, TranslatedString } from "protogen/monsters";
import { GetMonsterRequest } from "protogen/monsters_api";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { MonsterStore } from "services/monsters/MonsterStore";

interface MonsterSkillsProps {
  monster: Monster;
  lang: string;
}

export class MonsterSkills extends React.Component<any, any> {
  constructor(props: MonsterSkillsProps) {
    super(props);
  }

  private activeSkillText = (lang: string, skill?: ActiveSkill) => {
    if (!skill) return "N/A";
    if (!skill.activeSubskills) return "N/A";
    let arr = [];
    for (const subskill of skill.activeSubskills) {
      if (!subskill.descTemplated) return;
      arr.push(subskill.descTemplated[lang as keyof TranslatedString]);
    }
    return arr.join("\n");
  };

  private leaderSkillText = (lang: string, skill?: LeaderSkill) => {
    if (!skill) return "N/A";
    if (!skill.desc) return "N/A";
    return skill.desc[lang as keyof TranslatedString];
  };

  render() {
    const monster: Monster = this.props.monster;
    const activeSkill = monster.activeSkill;
    const leaderSkill = monster.leaderSkill;
    return (
      <div className="monster-skills">
        <h2>Active skill</h2>
        <div className="">{this.activeSkillText(this.props.lang, activeSkill)}</div>
        <h2>Leader skill</h2>
        <div className="">{this.leaderSkillText(this.props.lang, leaderSkill)}</div>
      </div>
    );
  }
}
