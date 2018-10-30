import PluginEntries from "./plugin-entries"
import PluginComponents from "./plugin-components"

const packageConfig = require('../../package.json');
ParfaitPluginManager.getInstance().addPlugin(new ParfaitPlugin({
    id: packageConfig.name,
    version: packageConfig.version,
    entries: PluginEntries.get(),
    components: PluginComponents.get()
}));
