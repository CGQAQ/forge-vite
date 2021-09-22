import ForgePlugin from "@electron-forge/plugin-base";
import Logger from "@electron-forge/web-multi-logger";

export class VitePlugin extends ForgePlugin {
  constructor(config) {
    super();
    this.config = config;
    this.logger = new Logger();
    console.log("config: ", config);
  }
  getHook(hookType) {
    console.log(hookType);
    switch (hookType) {
      case "":
        break;
    }
  }
  startLogic() {
    const tab = logger.createTab("StartLogic");
    tab.log("hello?");
    return false;
  }
}
