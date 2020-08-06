<template>
    <div class="app-navbar">
        <div class="trigger-btn" @click="toggleCollapsed">
            <a-icon :type="isCollapse ? 'menu-unfold' : 'menu-fold'" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Icon } from 'ant-design-vue'
export default {
    name: 'navbar',
    components: {
        AIcon: Icon,
    },
    computed: {
        ...mapGetters(['sidebar']),
        isCollapse () {
            return !this.sidebar.opened
        },
    },
    methods: {
        toggleCollapsed () {
            this.$store.dispatch('app/toggleSideBar')
        },
    },
}
</script>
<style lang="scss" scoped>
   .app-navbar {
        position: fixed;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        .trigger-btn {
            line-height: 46px;
            width: 50px;
            text-align: center;
            font-size: 20px;
            height: 100%;
            float: left;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color:transparent;

            &:hover {
            background: rgba(0, 0, 0, .025)
            }
        }
   }
</style>
