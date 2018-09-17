export default {
    namespaced: true,

    state: {
        helloPlugin: null
    },

    mutations: {
    },

    actions: {
        testHelloPlugin(context) {
            console.log("test hello-plugin");
        }
    }
};
