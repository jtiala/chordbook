declare let module: any;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import Hello from "./components/Hello";

ReactDOM.render(
  <>
    <Normalize />
    <Hello compiler="TypeScript" framework="React" />
  </>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
