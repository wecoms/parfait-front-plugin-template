import Vue from "vue"
import Vuex from "vuex"
import ParfaitFront from "parfait-front"
ParfaitFront.use("w2ui");
ParfaitFront.use("aui");
ParfaitFront.use("highcharts");
ParfaitFront.use("fullcalendar");

Vue.use(Vuex);
const store = new Vuex.Store();

import "./plugin"
import "./resources/css/common.css"
import Index from "./Index.vue"
import RegisterStores from "./store/register-stores.js"

new Vue({
    el: "#plugin",
    template: "<component :is='index'></component>",
    data: {
        index: null
    },
    store,
    mounted() {
        ParfaitContext.setMainComponent(this);
        
        ParfaitPluginUtil.loads(
            [
                RegisterStores.register(),
                RegisterStores.load()
            ],
            function() {
                this.index = Index;
            }.bind(this)
        );
    }
});
