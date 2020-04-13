import "./plugin"
import "./resources/css/common.css"
import RegisterStores from "./store/register-stores"
import LoadMessages from "./locale/load-messages"

export default {
    registerStore: function() {
        RegisterStores.register();
    },

    load: function() {
        RegisterStores.load();
        LoadMessages.load();
    }
}
