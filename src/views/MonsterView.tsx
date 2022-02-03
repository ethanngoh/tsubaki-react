import { Button, Checkbox, FormGroup, InputGroup } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
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
    const name_en = monster.cost;
    console.log(monster);
    return (
      <>
        <h1>Kittens</h1>

        <div>
          DEBUG:
          <div>{JSON.stringify(monster)}</div>
          kittens
          <div>{name_en}</div>
        </div>
      </>
    );
  }
}

export const InjectedMonsterView = withRouter(injectStore(MonsterView, "monsterStore"));
