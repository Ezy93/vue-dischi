import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'axios/dist/axios.min.js'/* ricordarsi che potrebbe non funzionare per import sbagliata */


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
