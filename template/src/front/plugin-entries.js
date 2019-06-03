import RegisterStores from "./store/register-stores.js"
import HelloPlugin from "./components/HelloPlugin"

const pluginRegisterStoresEntry = new ParfaitPluginEntry({
    type: ParfaitPluginEntryType.RegisterStores,
    target: function() {
        RegisterStores.register();
    }
});

const pluginLoadStoresEntry = new ParfaitPluginEntry({
    type: ParfaitPluginEntryType.LoadStores,
    target: function() {
        return RegisterStores.load();
    }
});

const pluginActionEntry = new ParfaitPluginEntry({
    type: ParfaitPluginEntryType.Action,
    target: new ParfaitPluginEntryActionTarget({
        id: "parfait-hello-plugin",
        actionComponent: HelloPlugin,
        actionOptions: {
            id: "parfait-hello-plugin",
            caption: "플러그인 테스트",
            lockable: true,
            closable: true
        }
    })
});

export default {
    get: function() {
        return [
            pluginRegisterStoresEntry,
            pluginLoadStoresEntry,
            pluginActionEntry
        ];
    }
};
