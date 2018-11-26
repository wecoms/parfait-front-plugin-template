import RegisterStores from "./store/register-stores.js"
import HelloPlugin from "./components/HelloPlugin"

const pluginRegisterStoreEntry = new ParfaitPluginEntry({
    type: ParfaitPluginEntryType.RegisterStores,
    target: function() {
        RegisterStores.register();
    }
});

const pluginMainLoadCompleteEntry = new ParfaitPluginEntry({
    type: ParfaitPluginEntryType.MainLoadCompleteEvent,
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
            pluginRegisterStoreEntry,
            pluginMainLoadCompleteEntry,
            pluginMenuEntry
        ];
    }
};
