// This file is created automatically by system.

import LoginContent from "./components/login/LoginContent.vue"
import NoticeList from "./components/notice/NoticeList.vue"
import NoticeListDetail from "./components/notice/NoticeListDetail.vue"

export default {
    get: function() {
        const map = new Map();
        map.set(LoginContent.name, LoginContent);
        map.set(NoticeList.name, NoticeList);
        map.set(NoticeListDetail.name, NoticeListDetail);
        
        return map;
    }
}
