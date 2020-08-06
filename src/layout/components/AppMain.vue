<template>
    <div class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view  />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.app-main {
    padding: 50px 15px 15px;
}
</style>
