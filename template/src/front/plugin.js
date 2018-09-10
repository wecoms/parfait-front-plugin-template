import HelloPlugin from "./components/HelloPlugin"

const packageConfig = require('../../package.json');
const pluginEntry = new ParfaitPluginEntry({
    // Set component type within Welink-Front
    type: ParfaitPluginEntryType.MainMenuItem,       
    
    // Set your component or object about type
    target: {
        id: "hello-plugin-menu",
        component: HelloPlugin
    }
});

ParfaitPluginManager.addPlugin(new ParfaitPlugin({
    id: packageConfig.name,
    version: packageConfig.version,
    entries: [pluginEntry]
}));
