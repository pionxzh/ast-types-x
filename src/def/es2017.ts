import type { Fork } from "../types";
import typesPlugin from "../types";
import sharedPlugin, { maybeSetModuleExports } from "../shared";
import es2016Def from "./es2016";

export default function (fork: Fork) {
  fork.use(es2016Def);

  const types = fork.use(typesPlugin);
  const def = types.Type.def;
  const defaults = fork.use(sharedPlugin).defaults;

  def("Function")
    .field("async", Boolean, defaults["false"]);

  def("AwaitExpression")
    .bases("Expression")
    .build("argument")
    .field("argument", def("Expression"));
};

maybeSetModuleExports(() => module);
