import store from '../store/'
import firebase from 'firebase/app'

export default function (to, from, next) {
  console.log('auth-guard')
  if (store.getters.getUser) next()
  else next('/login')
}