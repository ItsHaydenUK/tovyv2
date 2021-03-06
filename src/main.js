import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import main from './layouts/main.vue'
import def from './layouts/default.vue'
import VueCookies from 'vue-cookies'
require('dotenv').config()
Vue.use(VueCookies)
console.log(process.env.VUE_APP_BASE)
let api = axios.create({
  baseURL: `${process.env.VUE_APP_BASE ? `http://${process.env.VUE_APP_BASE}` : ''}/api`,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
});
Vue.use(Vuex)
Vue.component('main-layout', main)
Vue.component('default-layout', def)
const store = new Vuex.Store({
  state: {
    user: {
      id: null,
      name: null,
      signedin: false
    }, group: {
      color: 'red'
    }
  },
  mutations: {
    setuser(state, user) {
      state.user = user
    }, setcolor(state, color) {
      state.group.color = color;
    }, netntext(state, text) {
      state.group.noticetext = text;
    }
  }
})
Vue.prototype.$http = api;
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,

  render: h => h(App)
}).$mount('#app')
