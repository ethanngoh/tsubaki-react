import { Button, Checkbox, FormGroup, InputGroup, HTMLTable } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { Monster } from "protogen/monsters";
import { GetMonsterRequest } from "protogen/monsters_api";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { MonsterStore } from "services/monsters/MonsterStore";

interface MonsterSkillsProps {
  monster: Monster;
}

export class MonsterSkills extends React.Component<any, any> {
  constructor(props: MonsterSkillsProps) {
    super(props);
  }
  render() {
    const monster: Monster = this.props.monster;
    return <div className="monster-skills"></div>;
  }
}
