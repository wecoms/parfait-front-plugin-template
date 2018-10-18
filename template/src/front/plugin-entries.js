import RegisterStores from "./store/register-stores.js"

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

export default {
    get: function() {
        return [
            pluginRegisterStoreEntry,
            pluginMainLoadCompleteEntry
        ];
    }
};
