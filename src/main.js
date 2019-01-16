import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase/app'
import firebaseConfig from './cfg/firebase.js'
import 'firebase/firestore'
import formattedDate from './filters/formattedDate'

Vue.use(Vuetify)
Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

// firestore database
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
Vue.$db = db;

Vue.filter('formattedDate', formattedDate)

new Vue({
  el: '#app',
  router,
  store,
  created() {
    console.log('refresh')

    firebase.auth().onAuthStateChanged(user => {
      console.log('onAuthStateChanged')
      if (user) {
        store.dispatch('changeState', user.uid)
      }
    })
    this.$store.dispatch("fetchBooks");
  },
  render: h => h(App)
})