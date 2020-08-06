// recommend use functional component
<template functional>
    <a-sub-menu :key="props.menuInfo.meta.title">
        <span slot="title">
            <a-icon type="mail" /><span>{{ props.menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in props.menuInfo.children">
            <a-menu-item v-if="!item.children" :key="item.key">
                <app-link :to="item.path" >
                    <a-icon type="pie-chart" />
                    <span>{{ item. meta.title }}</span>
                </app-link>
            </a-menu-item>
            <my-item v-else :key="item.key" :menu-info="item" />
        </template>
    </a-sub-menu>
</template>
import AppLink from './AppLink'
export default {
    props: ['menuInfo'],
    components: {
        AppLink,
    },
};
