export const loader = {
    state: {
        isLoading: false
    },
    mutations: {
        show(state) {
            state.isLoading = true;
        },
        hide(state) {
            state.isLoading = false;
        }
    },
    actions: {
        show({ commit }) {
            commit('show')
        },
        hide({ commit }) {
            commit('hide')
        }
    }
}