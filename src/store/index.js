/* 
vuex最核心的管理对象store ==> 仓库
 */
import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'

// 使用插件
Vue.use(Vuex)

const state = {}
const mutations = {
    xxx(state){ //state是总的状态

    }
}
const actions = {}
const getters = {}
//向外暴露store对象
export default new Vuex.Store({
    // ...
    state,
    mutations,
    actions,
    getters,
    modules: {
        home,
        user
    }
})

/* 
vuex多模块编程的总状态结构：
{
    home:{
        categoryList:[]
    },

    user:{
        userInfo: {}
    }
}
*/