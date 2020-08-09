import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    render: h => h(App)
  }).$mount('#app')