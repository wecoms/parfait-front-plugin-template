import Vue from "vue"
import HelloPlugin from "./components/HelloPlugin"

new Vue({
    el: "#plugin",
    components: {
        HelloPlugin         // Add Your Components
    },
    template: "<hello-plugin/>"
});
