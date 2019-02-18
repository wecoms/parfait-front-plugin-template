import Vue from "vue"
import Vuex from "vuex"
import ParfaitFront from "parfait-front"

Vue.use(Vuex);
Vue.use(ParfaitFront);

import "./plugin"
import "./resources/css/common.css"
import Index from "./Index.vue"
import RegisterStores from "./store/register-stores.js"

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
        
        ParfaitPluginUtil.registerStores(
            [
                RegisterStores.register
            ]
        );
        ParfaitPluginUtil.loads(
            [
                RegisterStores.load
            ],
            function() {
                this.index = Index;
            }.bind(this)
        );
    }
});
