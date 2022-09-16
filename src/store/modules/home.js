/* 
管理首页相关数据的vuex子模块

*/

import { reqCategoryList } from "@/api"

const state ={
    categoryList: []
}
const mutations = {
    RECIEVE_CATEGOTY_LIST(state,categoryList){//state是当前模块的 
        state.categoryList = categoryList.splice(0,15)
    } 
}
const actions = {
    //获取三级分类列表的异步action
    async getCategoryList({commit}){
        //commit是触发的所有匹配的mutations，不止是当前模块，可能是其他模块或总的
        //发异步ajax请求（调用接口请求函数）
        try{
            const result = await reqCategoryList()
            //如果成功了，得到数据提交给mutation
            if (result.code === 200){
                const categoryList = result.data
                commit('RECIEVE_CATEGOTY_LIST',categoryList)
            }
        }catch(error){
            alert('请求出错！' + error)
        }
        
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}