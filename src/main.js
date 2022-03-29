import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/index.css'
import components from './components'
import VueLazyLoad from 'vue-lazyload'

//使用lazyload提升图片加载性能
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 2,
})

Vue.config.productionTip = false

Vue.use(components)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
