import type { Fork } from "../types";
import typesPlugin from "../types";
import { maybeSetModuleExports } from "../shared";
import es2021Def from "./es2021";

export default function (fork: Fork) {
  fork.use(es2021Def);

  const types = fork.use(typesPlugin);
  const def = types.Type.def;

  def("StaticBlock")
    .bases("Declaration")
    .build("body")
    .field("body", [def("Statement")]);
}

maybeSetModuleExports(() => module);
