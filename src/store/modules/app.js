import Cookies from 'js-cookie'
const state = {
    sidebar: {
        opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
        withoutAnimation: false,
    },
}

const mutations = {
    TOGGLE_SIDEBAR: ({ sidebar }) => {
        sidebar.opened = !sidebar.opened
    },

}

const actions = {
    toggleSideBar ({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
