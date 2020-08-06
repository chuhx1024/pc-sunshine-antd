<template>
    <div style="width: 256px">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
            :default-selected-keys="['1']"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
        >
            <template v-for="item in routes" >
                <template v-if="!item.children">
                    <a-menu-item :key="item.path">
                        <app-link :to="item.path" >
                            <a-icon type="pie-chart" />
                            <span>{{ item.meta.title }}</span>
                        </app-link>
                    </a-menu-item>
                </template>
                <my-item v-else :key="item.path" :menu-info="item" />
            </template>
        </a-menu>
    </div>
</template>

<script>

import { Button, Icon } from 'ant-design-vue'
import MyItem from './MyItem'
import AppLink from './AppLink'
export default {
    components: {
        // 'sub-menu': SubMenu,
        AButton: Button,
        AIcon: Icon,
        MyItem,
        AppLink,
    },
    data () {
        return {
            collapsed: false,
            list: [
                {
                    key: '1',
                    title: 'Option 1',
                },
                {
                    key: '2',
                    title: 'Navigation 2',
                    children: [
                        {
                            key: '2.1',
                            title: 'Navigation 3',
                            children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        routes () {
            return this.$router.options.routes
        },
    },
    methods: {
        toggleCollapsed () {
            this.collapsed = !this.collapsed
        },
    },
}
</script>
