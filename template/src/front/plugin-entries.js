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

const pluginMenuEntry = new ParfaitPluginEntry({
    type: ParfaitPluginEntryType.MainMenuItem,
    target: new ParfaitPluginEntryMainMenuItemTarget({
        id: "hello-plugin-menu",
        order: 0,
        title: "메뉴1",
        actionType: ParfaitPluginEntryMainMenuActionType.Injection,
        actionComponent: HelloPlugin,
        actionOptions: {
            id: "hello-plugin",
            caption: "메뉴1",
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
