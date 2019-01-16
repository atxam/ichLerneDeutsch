import Vue from 'vue'

export default {
  state: {
    userData: {
      books: {},
      words: {}
    }
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload
    },
    setUserDataBook(state, {
      bookId,
      book
    }) {
      Vue.set(state.userData.books, bookId, book)
    },
    setUserDataBookPart(state, {
      bookId,
      partId,
      part
    }) {
      Vue.set(state.userData.books[bookId].parts, [partId], part)
    },
    updateUserDataBookPartLastOpened(state, {
      bookId,
      partId
    }) {
      Vue.set(state.userData.books[bookId].parts[partId], 'lastOpenedDate', new Date())
    },
    finishedUserDataBookPart(state, {
      bookId,
      partId,
      rating
    }) {
      Vue.set(state.userData.books[bookId].parts[partId], 'rating', rating)
      Vue.set(state.userData.books[bookId].parts[partId], 'finishedDate', new Date())
    }
  },
  actions: {
    async fetchUserData({ // FETCH USER DATA
        commit
      },
      userId
    ) {
      commit('setLoading', true)
      commit('clearError')

      try {
        const userDataRef = await Vue.$db.collection('userData').doc(userId).get()

        if (userDataRef.exists) {
          let userData = userDataRef.data()
          if (!userData.books) userData.books = {}
          commit('setUserData', userData)
        }
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error.message
      }
    },

    async addUserDataBook({ // ADD USER DATA BOOK
      commit
    }, {
      userId,
      bookId
    }) {
      commit('setLoading', true)
      commit('clearError')

      try {
        let book = {
          addedDate: new Date(),
          parts: {}
        }
        await Vue.$db.collection('userData').doc(userId).set({
          books: {
            [bookId]: book
          }
        }, {
          merge: true
        })
        commit('setUserDataBook', {
          bookId,
          book
        })

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error.message
      }
    },

    async updateUserDataBookPart({ // UPDATE USER DATA BOOK PART
      commit,
      getters
    }, {
      bookId,
      partId
    }) {
      commit('setLoading', true)
      commit('clearError')

      try {
        if (!getters.getUserData.books[bookId].parts[partId]) {
          let part = {
            "addedDate": new Date(),
            "lastOpenedDate": new Date()
          }
          await Vue.$db.collection('userData').doc(getters.getUser)
            .set({
              books: {
                [bookId]: {
                  parts: {
                    [partId]: part
                  }
                }
              }
            }, {
              merge: true
            })
          commit('setUserDataBookPart', {
            bookId,
            partId,
            part
          })
        } else {
          await Vue.$db.collection('userData').doc(getters.getUser).update({
            [`books.${bookId}.parts.${partId}.lastOpenedDate`]: new Date()
          })
          commit('updateUserDataBookPartLastOpened', {
            bookId,
            partId
          })
        }
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error.message
      }
    },

    async finishedUserDataBookPart({ // FINISHED USER DATA BOOK PART
      commit,
      getters
    }, {
      bookId,
      partId,
      rating
    }) {
      commit('setLoading', true)
      commit('clearError')

      try {
        await Vue.$db.collection('userData').doc(getters.getUser).update({
          [`books.${bookId}.parts.${partId}.finishedDate`]: new Date(),
          [`books.${bookId}.parts.${partId}.rating`]: rating
        })

        commit('finishedUserDataBookPart', {
          bookId,
          partId,
          rating
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error.message
      }
    }
  },
  getters: {
    getUserData(state) {
      return state.userData
    }
  }
}