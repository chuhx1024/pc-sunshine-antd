<template>
    <a-menu
        :default-selected-keys="['1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapse"
    >
        <template v-for="item in routes" >
            <template v-if="item.children.length === 1">
                <a-menu-item :key="item.children[0].path">
                    <app-link :to="item.children[0].path" >
                        <a-icon type="pie-chart" />
                        <span>{{ item.children[0].meta.title }}</span>
                    </app-link>
                </a-menu-item>
            </template>
            <my-item v-else :key="item.path" :menu-info="item" base-path="item.path" />
        </template>
    </a-menu>
</template>

<script>
import { Icon } from 'ant-design-vue'
import MyItem from './MyItem'
import AppLink from './AppLink'
export default {
    props: {
        collapse: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        AIcon: Icon,
        MyItem,
        AppLink,
    },
    data () {
        return {
        }
    },
    computed: {
        routes () {
            return this.$router.options.routes
        },
    },

}
</script>
