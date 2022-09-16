/* 
路由器对象
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


//使用插件
Vue.use(VueRouter)

//解决vue-router在3.1.0版本以上重复点报错问题
//重新封装push方法
//缓存原本的push方法
const originalPush = VueRouter.prototype.push
//指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  //如果制定了成功或失败的回调
  if (onResolve || onReject)
    //直接调用原本的方法
    //通过call调用并修改this指向，这里的this指的是VueRouter
    //如果直接originalPush（），则是window调用的，严格模式里，内部this是undefined

    return originalPush.call(this, location, onResolve, onReject)

  //如果没有指定成功或失败回调，必须用catch处理
  return originalPush.call(this, location).catch((err) => {
    //如果是重复导航产生的错误，不再向外传递错误，
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err  //产生的是成功的promise，成功promise的value是err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

//向外暴露路由器对象
export default new VueRouter({
  //模式
  mode: 'history',
  //配置路由
  routes
})




