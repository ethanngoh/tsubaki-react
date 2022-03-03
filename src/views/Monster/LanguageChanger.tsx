import { Button } from "@blueprintjs/core";
import React, { Component } from "react";

interface LanguageChangerProps {
  lang: string;
  onToggle: () => void;
}

export class LanguageChanger extends React.Component<LanguageChangerProps, {}> {
  constructor(props: LanguageChangerProps) {
    super(props);
  }

  render() {
    return <Button onClick={this.props.onToggle}>Change language</Button>;
  }
}
