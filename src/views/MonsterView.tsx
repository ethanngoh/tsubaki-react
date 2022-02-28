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
  userEnJa: string;
}

interface MonsterHeaderProps {
  monster: Monster;
}

class MonsterHeader extends React.Component<MonsterHeaderProps, {}> {
  constructor(props: MonsterHeaderProps) {
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

interface MonsterViewState {
  enJa: string;
}

interface MyToggleProps {
  enJa: string;
  onToggle: (newEnJa: string) => void;
}

class MyToggle extends React.Component<MyToggleProps, {}> {
  constructor(props: MyToggleProps) {
    super(props);
  }

  private toggleEnJa = () => {
    this.props.onToggle("ja or en logic here");
  };

  render() {
    return <Button onClick={this.toggleEnJa}>{this.props.enJa}</Button>;
  }
}

export default class MonsterView extends Component<MonsterViewProps, MonsterViewState> {
  constructor(props: MonsterViewProps) {
    super(props);
    this.state = {
      enJa: props.userEnJa,
    };
  }

  async componentDidMount() {
    await this.props.monsterStore.get({
      id: parseInt(this.props.router.params.id),
    });
  }

  private onToggleEnJa = (newEnJa: string) => {
    this.setState({
      enJa: newEnJa,
    });
  };

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
          <MyToggle enJa={this.state.enJa} onToggle={this.onToggleEnJa} />
          <MonsterHeader monster={monster} />
          <MonsterStats monster={monster} enJa={this.state.enJa} />
          <MonsterSkills monster={monster} />
        </div>
      </>
    );
  }
}

export const InjectedMonsterView = withRouter(injectStore(MonsterView, "monsterStore"));
