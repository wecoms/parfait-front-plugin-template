import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import ParfaitFront from "parfait-front"
import ParfaitKernel from "parfait-kernel"

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ParfaitFront);
Vue.use(ParfaitKernel);

import Main from "./main"
import Index from "./Index.vue"

const router = new VueRouter();
const store = new Vuex.Store();
new Vue({
    el: "#plugin",
    template: "<component :is='index'></component>",
    data: {
        index: null
    },
    router,
    store,
    mounted() {
        ParfaitContext.setMainComponent(this);

        ParfaitPluginUtil.registerStores(
            [
                ParfaitKernel.registerStore,
                Main.registerStore
            ]
        );
        ParfaitPluginUtil.loads(
            [
                ParfaitKernel.load,
                Main.load
            ],
            function() {
                this.index = Index;
            }.bind(this)
        );

        this.index = Index;
    }
});
