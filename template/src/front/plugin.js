import HelloPlugin from "./components/HelloPlugin"

const packageConfig = require('../../package.json');
const pluginEntry = new WelinkPluginEntry({
    type: "MainMenu",               // Set Component Type within Welink-Front
    component: HelloPlugin          // Set Your Component
});

WelinkPluginManager.addPlugin(new WelinkPlugin({
    id: packageConfig.name,
    version: packageConfig.version,
    entries: [pluginEntry]
}));
