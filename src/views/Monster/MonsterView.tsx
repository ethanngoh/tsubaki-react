import { Button, Checkbox, FormGroup, InputGroup } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { Monster } from "protogen/monsters";
import { GetMonsterRequest } from "protogen/monsters_api";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { MonsterStore } from "services/monsters/MonsterStore";
import { LanguageChanger } from "./LanguageChanger";
import { MonsterHeader } from "./MonsterHeader";
import { MonsterSkills } from "./MonsterSkills";
import { MonsterStats } from "./MonsterStats";

interface MonsterViewProps {
  monsterStore: MonsterStore;
  router: {
    params: { id: string };
  };
  userLang: string;
}

interface MonsterViewState {
  lang: string;
}

export default class MonsterView extends Component<MonsterViewProps, MonsterViewState> {
  constructor(props: MonsterViewProps) {
    super(props);
    this.state = {
      // TODO: this is not the right way to implement this!!!!!!!!!!!
      lang: "en",
    };
  }

  async componentDidMount() {
    await this.props.monsterStore.get({
      id: parseInt(this.props.router.params.id),
    });
  }

  private onToggleLang = () => {
    this.setState({
      lang: this.state.lang == "en" ? "ja" : "en",
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
        <div className="main-container bp3-dark">
          <LanguageChanger lang={this.state.lang} onToggle={this.onToggleLang} />
          <MonsterHeader monster={monster} lang={this.state.lang} />
          <MonsterStats monster={monster} lang={this.state.lang} />
          <MonsterSkills monster={monster} lang={this.state.lang} />
        </div>
      </>
    );
  }
}

export const InjectedMonsterView = withRouter(injectStore(MonsterView, "monsterStore"));
