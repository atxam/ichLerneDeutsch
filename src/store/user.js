import firebase from 'firebase/app'
import 'firebase/auth'

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: {
      id: null
    }
  },
  mutations: {
    setUser(state, payload) {
      console.log('setUser')
      state.user = payload
    }
  },
  actions: {
    async register({ // REGISTER
      commit
    }, {
      email,
      password
    }) {
      try {
        commit('setLoading', true)
        commit('clearError')
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password)

        commit('setUser', {
          id: data.user.uid
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error.message
      }
    },

    async login({ // LOGIN
      commit
    }, {
      email,
      password
    }) {
      try {
        commit('setLoading', true)
        commit('clearError')
        await firebase.auth().signInWithEmailAndPassword(email, password)

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error.message
      }
    },

    logout({ // LOGOUT
      commit
    }) {
      console.log('logout')
      firebase.auth().signOut()
      commit('setUser', new User(null))
    },

    changeState({ // CHANGE STATE
      commit
    }, id) {
      commit('setUser', new User(id))
    }
  },
  getters: {
    getUser(state) {
      return state.user.id
    }
  }
}