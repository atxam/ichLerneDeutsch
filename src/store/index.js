import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Shared from './shared'
import Books from './books'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Shared,
    Books
  }
})