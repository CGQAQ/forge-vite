import ForgePlugin from "@electron-forge/plugin-base";
import Logger from "@electron-forge/web-multi-logger";

export interface VitePluginConfig {
  // pass
}

export class VitePlugin extends ForgePlugin<VitePluginConfig> {
  name = "vite";

  logger: Logger;

  constructor(config: VitePluginConfig) {
    super(config);

    this.logger = new Logger();

    console.log("hello, vite");
    console.log("config: ", this.config);

    this.getHook = this.getHook.bind(this);
    this.startLogic = this.startLogic.bind(this);
  }

  getHook(name: string) {
    console.log("hook", name);
    return null;
  }

  async startLogic(): Promise<false> {
    const tab = this.logger.createTab("StartLogic");
    tab.log("hello?");
    return false;
  }
}
