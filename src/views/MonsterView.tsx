import { Button, Checkbox, FormGroup, InputGroup } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { Monster } from "protogen/monsters";
import { GetMonsterRequest } from "protogen/monsters_api";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { MonsterStore } from "services/monsters/MonsterStore";

interface State {}

interface MonsterViewProps {
  monsterStore: MonsterStore;
  router: {
    params: { id: string };
  };
}

class MonsterHeader extends React.Component<any, any> {
  constructor(props: MonsterViewProps) {
    super(props);
  }
  render() {
    const monster: Monster = this.props.monster;
    const monsterImagePath: string = monster.monsterNoJp.toString().padStart(5, "0");
    return (
      <div className="monster-header">
        <img src={`https://d30r6ivozz8w2a.cloudfront.net/media/icons/${monsterImagePath}.png`}></img>
        <div className="monster-name">{monster.nameEn}</div>
      </div>
    );
  }
}

class MonsterStats extends React.Component<any, any> {
  constructor(props: MonsterViewProps) {
    super(props);
  }
  render() {
    const monster: Monster = this.props.monster;
    return (
      <div>
        Statistics:
        <table className="monster-stats">
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
        </table>
      </div>
    );
  }
}

class MonsterSkills extends React.Component<any, any> {
  constructor(props: MonsterViewProps) {
    super(props);
  }
  render() {
    const monster: Monster = this.props.monster;
    return <div className="monster-skills"></div>;
  }
}

export default class MonsterView extends Component<MonsterViewProps, State> {
  state: State = {
    formData: {},
  };
  constructor(props: MonsterViewProps) {
    super(props);
  }

  async componentDidMount() {
    await this.props.monsterStore.get({
      id: parseInt(this.props.router.params.id),
    });
  }

  render() {
    const data = this.props.monsterStore.getResponse!;
    // comment
    if (!data) {
      return <div>Loading...</div>;
    }
    const monster = this.props.monsterStore.getResponse.monster;
    if (!monster) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <div className="main-container">
          <MonsterHeader monster={monster} />
          <MonsterStats monster={monster} />
          <MonsterSkills monster={monster} />
        </div>
      </>
    );
  }
}

export const InjectedMonsterView = withRouter(injectStore(MonsterView, "monsterStore"));
