import HelloPlugin from "./components/HelloPlugin"

const packageConfig = require('../../package.json');
const pluginEntry = new WelinkPluginEntry({
    // Set component type within Welink-Front
    type: WelinkPluginEntryType.MainMenuItem,       
    
    // Set your component or object about type
    target: {
        id: "hello-plugin-menu",
        component: HelloPlugin
    }
});

WelinkPluginManager.addPlugin(new WelinkPlugin({
    id: packageConfig.name,
    version: packageConfig.version,
    entries: [pluginEntry]
}));
