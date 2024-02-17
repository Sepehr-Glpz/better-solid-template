import * as Solid from "solid-js";
import "@/App.scss";
import { classList } from "@/util/classname-factory/types";
import { classNamesFactory } from "@/util/classname-factory";

const cn = classNamesFactory("home");

function App(): Solid.JSXElement {
  const [active, setActive] = Solid.createSignal<boolean>(false);

  const onClick = () => setActive((prev) => !prev);

  const titleClasses = Solid.createMemo<classList>(() =>
    cn("title", {
      active: active(),
      deactive: !active(),
    })
  );

  return (
    <>
      <main classList={cn()}>
        <h1 classList={titleClasses()}>Hello World</h1>
        <button onclick={onClick} type="button">
          Change
        </button>
      </main>
    </>
  );
}

export default App as Solid.Component;
