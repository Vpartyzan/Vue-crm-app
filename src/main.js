import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyDJYSR2LWipzryLrkRCmCa0jT-8vNmRC5c',
  authDomain: 'vue-crm-vp.firebaseapp.com',
  databaseURL: 'https://vue-crm-vp.firebaseio.com',
  projectId: 'vue-crm-vp',
  storageBucket: 'vue-crm-vp.appspot.com',
  messagingSenderId: '497982923317',
  appId: '1:497982923317:web:56f8a689db33138352477c',
  measurementId: 'G-85V29V1LT5'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
