<template>
    <div :class="classObj" class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div >
                <navbar />
            </div>
            <app-main />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain } from './components'
export default {
    name: 'Layout',

    components: { Navbar, Sidebar, AppMain },

    computed: {
        ...mapGetters(['sidebar']),
        classObj () {
            return {
                hideSidebar: !this.sidebar.opened,
            }
        },
    },
}
</script>
