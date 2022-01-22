import { Button, Checkbox, FormGroup, InputGroup } from "@blueprintjs/core";
import { handleBooleanChange } from "components/blueprintHelpers";
import { AccountMetadata, AddAccountRequest } from "protogen/accounts";
import React, { Component } from "react";
import { injectStore, withRouter } from "services";
import { AccountStore } from "services/accounts/AccountStore";

interface State {
  readonly formData: Partial<AddAccountRequest>;
}

interface AddAccountViewProps {
  accountStore: AccountStore;
}

export default class AddAccountView extends Component<AddAccountViewProps, State> {
  state: State = {
    formData: {},
  };
  constructor(props: AddAccountViewProps) {
    super(props);
  }

  private setFormData(newFormData: Partial<AddAccountRequest>): void {
    this.setState({
      formData: {
        ...this.state.formData,
        ...newFormData,
      },
    });
  }

  private setMetadata(newMetadata: Partial<AccountMetadata>): void {
    var m: Partial<AccountMetadata> = {
      ...this.state.formData.metadata,
      ...newMetadata,
    };
    this.setState({
      formData: {
        ...this.state.formData,
        metadata: {
          virtual: m.virtual!!,
          provider: m.provider || "",
          net_zero: m.net_zero!!,
        },
      },
    });
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    this.props.accountStore.add(this.state.formData as AddAccountRequest);
  };

  private get canSubmit(): boolean {
    const { currency, entity_id, name } = this.state.formData;
    if (!entity_id || !name || !currency) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <>
        <h1>Add Account</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup label="Entity ID">
            <InputGroup placeholder="Entity ID" onChange={(e) => this.setFormData({ entity_id: e.target.value })} />
          </FormGroup>

          <FormGroup label="Name">
            <InputGroup placeholder="Name" onChange={(e) => this.setFormData({ name: e.target.value })} />
          </FormGroup>
          <FormGroup label="Description">
            <InputGroup placeholder="Description" onChange={(e) => this.setFormData({ description: e.target.value })} />
          </FormGroup>
          <FormGroup label="Currency">
            <InputGroup placeholder="Currency" onChange={(e) => this.setFormData({ currency: e.target.value })} />
          </FormGroup>
          <FormGroup label="Metadata">
            <Checkbox
              label="Net Zero"
              onChange={handleBooleanChange((e) => {
                this.setMetadata({ net_zero: e });
              })}
            />
          </FormGroup>
          <FormGroup label="Provider">
            <InputGroup placeholder="Provider" onChange={(e) => this.setMetadata({ provider: e.target.value })} />
          </FormGroup>
          <FormGroup label="Virtual">
            <Checkbox
              label="Virtual"
              onChange={handleBooleanChange((e) => {
                this.setMetadata({ virtual: e });
              })}
            />
          </FormGroup>
          <Button type="submit" onClick={this.handleSubmit} intent="primary" disabled={!this.canSubmit}>
            Upload
          </Button>
        </form>

        <div>
          DEBUG:
          <div>{JSON.stringify(this.state.formData)}</div>
        </div>
      </>
    );
  }
}

export const InjectedAddAccountView = withRouter(injectStore(AddAccountView, "accountStore"));
