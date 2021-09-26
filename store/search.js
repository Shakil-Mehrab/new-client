export default {
    state: () => ({
        isSearch: false
    }),

    getters: {
        isSearch(state) {
            return state.isSearch
        }
    },

    mutations: {
        SET_SEARCH_OPENED(state) {
            state.isSearch = true
        },

        SET_SEARCH_CLOSED(state) {
            state.isSearch = false
        }
    },

    actions: {
        openSearch({ commit }) {
            commit('SET_SEARCH_OPENED')
        },

        closeSearch({ commit }) {
            commit('SET_SEARCH_CLOSED')
        }
    }
}