import * as Solid from "solid-js";
import { Route, Router } from "@solidjs/router";
import { routes } from "@/util/routes";
import env from "@/services/env";
import constants from "@/util/constants";
import "@/App.scss";
import { Title } from "@solidjs/meta";

function App(): Solid.JSXElement {
  const appName = env.get(constants.appName);

  return (
    <>
      <Title>{appName}</Title>
      <Router>
        <Route path="/">
          <main>
            <h1>Hello World!</h1>
          </main>
        </Route>
      </Router>
    </>
  );
}

export default App as Solid.Component;
