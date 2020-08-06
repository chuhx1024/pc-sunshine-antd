<template>
    <a-breadcrumb class="navbar-breadcrumb">
        <a-breadcrumb-item
            v-for="(item,index) in levelList"
            :key="item.path"
        >
            <transition-group name="breadcrumb">
                <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" :key="item.path" class="no-redirect">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)" :key="item.path">{{ item.meta.title }}</a>
            </transition-group>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
    name: 'NavbarBreadcrumb',
    data () {
        return {
            levelList: null,
        }
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        },
    },
    methods: {
        getBreadcrumb () {
            // only show routes with meta.title
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first = matched[0]

            if (!this.isDashboard(first)) {
                matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
            }

            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        isDashboard (route) {
            const name = route && route.name
            if (!name) {
                return false
            }
            return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
        },
        pathCompile (path) {
            // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
            const { params } = this.$route
            var toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
        handleLink (item) {
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            this.$router.push(this.pathCompile(path))
        },
    },

}
</script>
<style lang="scss" scoped>
.navbar-breadcrumb{
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>
