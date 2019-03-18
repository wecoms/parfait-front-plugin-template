import "./plugin"
import "./resources/css/common.css"
import RegisterStores from "./store/register-stores"

export default {
    registerStore: function() {
        RegisterStores.register();
    },

    load: function() {
        RegisterStores.load();
    }
}
