import PluginEntries from "./plugin-entries"

const packageConfig = require('../../package.json');
ParfaitPluginManager.getInstance().addPlugin(new ParfaitPlugin({
    id: packageConfig.name,
    version: packageConfig.version,
    entries: PluginEntries.get()
}));
