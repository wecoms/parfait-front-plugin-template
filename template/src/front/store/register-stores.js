import users from "./users"
import menus from "./menus"
import codes from "./codes"

export default {
    register: function() {
        ParfaitContext.getMainComponent().$store.registerModule("users", users);
        ParfaitContext.getMainComponent().$store.registerModule("menus", menus);
        ParfaitContext.getMainComponent().$store.registerModule("codes", codes);
    }
}
