import ForgePlugin from "@electron-forge/plugin-base";
import Logger from "@electron-forge/web-multi-logger";


export class VitePlugin extends ForgePlugin {
  name = "vite";

  constructor(config) {
    super(config);

    this.logger = new Logger();

    console.log("hello, vite");
    console.log("config: ", this.config);

    this.getHook = this.getHook.bind(this);
    this.startLogic = this.startLogic.bind(this);
  }

  getHook(name) {
    console.log("hook", name);
    return null;
  }

  async startLogic() {
    const tab = this.logger.createTab("StartLogic");
    tab.log("hello?");
    return false;
  }
}
