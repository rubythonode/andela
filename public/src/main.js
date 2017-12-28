import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'

Vue.use(VeeValidate)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App), 
  router:Router
})
