import Vue from "vue"
import Vuex from "vuex"
import Index from "./Index.vue"
import RegisterStores from "./store/register-stores.js"

import ParfaitFront from "parfait-front"
ParfaitFront.use("w2ui");

Vue.use(Vuex);
const store = new Vuex.Store();

new Vue({
    el: "#plugin",
    template: "<component :is='index'></component>",
    data: {
        index: null
    },
    store,
    mounted() {
        ParfaitContext.setMainComponent(this);
        RegisterStores.register();
        RegisterStores.load()
            .then(function() {
                this.index = Index;
            }.bind(this));
    }
});
