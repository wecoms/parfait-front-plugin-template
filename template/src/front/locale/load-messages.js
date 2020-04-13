import messages from "./messages"

export default {
    load: function() {
        const keys = Object.keys(messages);
        keys.forEach(function(key) {
            ParfaitContext.getMainComponent().$i18n.mergeLocaleMessage(key, messages[key]);
        });
    }
}
