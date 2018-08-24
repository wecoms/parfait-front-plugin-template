const packageConfig = require('../../package.json');
const pluginEntry = new WelinkPluginEntry({
    type: "",           // Set Component Type within Welink-Front
    component: null     // Set Your Component
});

WelinkPluginManager.addPlugin(new WelinkPlugin({
    id: packageConfig.name,
    version: packageConfig.version,
    entries: [pluginEntry]
}));
