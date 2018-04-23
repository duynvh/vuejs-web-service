import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default new Vuex.Store({
    state: {
        movies: []
    },
    getters,
    mutations,
    actions
});
