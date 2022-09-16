import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nav from '@/components/Nav'

Vue.config.productionTip = false

//注册全局组件
Vue.component(Nav.name,Nav)

new Vue({
  render: h => h(App),
  router,  //注册路由器，所有组件可以直接访问$router 和 $route
  store, //注册store
}).$mount('#app')


/* 
store对象功能：
读取数据
  store.state.xxx
  store.getters.yyy
更新数据
  store.dispatch(actions名称，data)
  store.commit(mutation名称，data)
*/