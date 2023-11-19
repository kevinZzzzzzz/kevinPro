import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KvButton: typeof components.KvButton;
  }
}
export {};

