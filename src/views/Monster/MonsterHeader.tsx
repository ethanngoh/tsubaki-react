import { Button, Checkbox, FormGroup, InputGroup } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { Monster, TranslatedString } from "protogen/monsters";
import { GetMonsterRequest } from "protogen/monsters_api";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { MonsterStore } from "services/monsters/MonsterStore";

interface MonsterHeaderProps {
  monster: Monster;
  lang: string;
}

export class MonsterHeader extends React.Component<MonsterHeaderProps, {}> {
  constructor(props: MonsterHeaderProps) {
    super(props);
  }
  render() {
    const monster: Monster = this.props.monster;
    const monsterImagePath: string = monster.monsterNoJp.toString().padStart(5, "0");
    if (!monster.name) return;
    return (
      <div className="monster-header">
        <img src={`https://d30r6ivozz8w2a.cloudfront.net/media/icons/${monsterImagePath}.png`}></img>
        <div className="monster-name">{monster.name[this.props.lang as keyof TranslatedString]}</div>
      </div>
    );
  }
}
