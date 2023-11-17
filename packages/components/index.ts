import * as components from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => { // vue全局挂载 app.use()使用 
    for (let c in components) {
      app.use(components[c]);
    }
  },
  ...components
};