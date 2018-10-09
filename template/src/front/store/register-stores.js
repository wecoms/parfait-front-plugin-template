import helloPlugin from "./hello-plugin"

export default {
    register: function() {
        ParfaitContext.getMainComponent().$store.registerModule("helloPlugin", helloPlugin);
    },

    load: function() {
        return new Promise(function (resolve, reject) {
            // initializing something..
            resolve();
        })
    }
}
