declare let module: any;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import { SettingsProvider } from "./contexts/Settings";

import Song from "./components/Song";

ReactDOM.render(
  <SettingsProvider>
    <Normalize />
    <Song songRef="songs/nickel" />
  </SettingsProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
