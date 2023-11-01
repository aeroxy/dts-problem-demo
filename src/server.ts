import { Demo } from "./index";
import type { IFoo } from "./index";

class ServerDemo extends Demo {
  serverFoo(opts: IFoo) {
    console.log(opts.text);
  }
}

export { ServerDemo };
export type { IFoo };
