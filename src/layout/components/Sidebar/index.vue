<template>
    <div>
        <logo :collapse="isCollapse"/>
        <sidebar-menu :collapse="isCollapse"/>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarMenu from './SidebarMenu'
export default {
    name: 'Sidebar',

    components: {
        Logo,
        SidebarMenu,
    },
    computed: {
        ...mapGetters(['sidebar']),
        isCollapse () {
            return !this.sidebar.opened
        },
    },

}
</script>
