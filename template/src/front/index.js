import Vue from "vue"
import Vuex from "vuex"
import VueI18n from "vue-i18n"
import VueRouter from "vue-router"
import ParfaitFront from "parfait-front"
import ParfaitKernel from "parfait-kernel"

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(ParfaitFront);
Vue.use(ParfaitKernel);

import Main from "./main"
import Index from "./Index.vue"

const router = new VueRouter();
const store = new Vuex.Store();
const i18n = new VueI18n({ locale: "ko" });
new Vue({
    el: "#plugin",
    template: "<div style='width: 100%; height: 100%;'><component :is='index'></component><vue-snotify/></div>",
    data: {
        index: null
    },
    i18n,
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
    }
});
