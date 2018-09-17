<template>
    <div>
        <menu-management/>
        <!--<user-management/>-->
        <!--<notice/>-->
        <!--<auth-management/>-->
    </div>
</template>

<script>
    import MenuManagement from "./components/menu/MenuManagement"
    import UserManagement from "./components/user/UserManagement"
    import Notice from "./components/notice/Notice"
    import AuthManagement from "./components/auth/AuthManagement"

    export default {
        name: "Index",
        components: {
            MenuManagement, UserManagement, Notice, AuthManagement
        },
    }
</script>

<style scoped>

</style>
