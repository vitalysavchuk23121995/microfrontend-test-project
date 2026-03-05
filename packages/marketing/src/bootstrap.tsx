import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el: Element): void => {
  ReactDOM.render(<App />, el);
};

// Case 1: We are running in development and isolation of the marketing app
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// Case 2: We are running in production and isolation of the container app
export { mount };
