<template>
    <div class="sidebar-container">
        <logo :collapse="false"/>
        <sidebar-menu/>
    </div>
</template>
<script>
import Logo from './Logo'
import SidebarMenu from './SidebarMenu'
export default {
    name: 'Sidebar',

    components: {
        Logo,
        SidebarMenu,
    },

}
</script>
