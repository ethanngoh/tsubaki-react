import { Button, Checkbox, FormGroup, InputGroup, HTMLTable } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { Monster } from "protogen/monsters";
import { GetMonsterRequest } from "protogen/monsters_api";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { MonsterStore } from "services/monsters/MonsterStore";

interface MonsterHeaderProps {
  monster: Monster;
}

export class MonsterStats extends React.Component<any, any> {
  constructor(props: MonsterHeaderProps) {
    super(props);
  }
  render() {
    const monster: Monster = this.props.monster;
    return (
      <div>
        Statistics:
        <HTMLTable className="bp3-html-table-bordered">
          <tr>
            <th>HP:</th>
            <td>{monster.hpMax}</td>
          </tr>
          <tr>
            <th>ATK:</th>
            <td>{monster.atkMax}</td>
          </tr>
          <tr>
            <th>RCV:</th>
            <td>{monster.rcvMax}</td>
          </tr>
        </HTMLTable>
      </div>
    );
  }
}
