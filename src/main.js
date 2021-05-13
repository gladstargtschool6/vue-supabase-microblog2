import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://imdvvfcbtrfewysxgrnr.supabase.co/';

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
