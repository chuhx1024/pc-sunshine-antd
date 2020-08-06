<template>
    <div class="app-navbar">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
    </div>
</template>
<script>
import { Button, Icon } from 'ant-design-vue'
export default {
    name: 'navbar',
    components: {
        AButton: Button,
        AIcon: Icon,
    },
    methods: {
        toggleCollapsed () {
            this.$store.dispatch('app/toggleSideBar')
        },
    },
}
</script>
