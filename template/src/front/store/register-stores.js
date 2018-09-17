import helloPlugin from "./hello-plugin"

export default {
    register: function() {
        ParfaitContext.getMainComponent().$store.registerModule("helloPlugin", helloPlugin);
    }
}
