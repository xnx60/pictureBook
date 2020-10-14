import Vue from 'vue'
import { createStore } from 'vuex'

// Vue.use(Vuex)

export default createStore({
    state: {
        pictureStories: ['entry', 'catView', 'CantoneseClub', 'zhongTingLife', 'showTheater', 'xiGuanStories'],
        selected: 0
    },
    mutations: {
        select(state, name) {
            let index = state.pictureStories.indexOf(name)
            console.log(index)
            index = -1 ? state.selected = 0 : state.selected = index
            console.log(state.selected);
        },
        return (state) {
            console.log(state.selected);
            state.selected = 0
        }
    },
    actions: {},
    modules: {}
})