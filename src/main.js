import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import SUP from 'ssc-ui-vue-pro';
import 'ssc-ui-vue-pro/dist/ssc-ui-vue-pro.css';
import SSCUI from 'ssc-ui-vue'
import 'ssc-ui-vue/dist/ssc-ui-vue.css' // Use the old design spec style, which SPX is using
import 'ssc-ui-vue/dist/ssc-ui-vue-new.css' // Use the new design spec style, which WMS & other will use

//main.js
import vdr from './components/Drag.vue'

// 导入默认样式
import './components/Drag.css'
Vue.component('vdr', vdr)

Vue.config.productionTip = false
Vue.use(SUP);
Vue.use(SSCUI);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
