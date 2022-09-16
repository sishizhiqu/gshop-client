/* 

axios二次封装

1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response，而直接是响应体数据response.data
4. 统一处理错误请求，具体请求也可以选择处理或不处理
*/

import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

//配置通用的基础路径和超时
//service是一个能发任意ajax请求的函数，也可以作为对象使用
const service = axios.create({
    baseURL: '/api', //基础路径,使用了代理
    timeout: 15000  //超时时间

})

//添加请求拦截器
service.interceptors.request.use(config => {
    nProgress.start()  //显示请求进度条
    return config
})


//添加响应拦截器
service.interceptors.response.use(
    response => {
        nProgress.done() //结束请求进度条
        return response.data;  
    } ,
    error => {
        nProgress.done() //结束请求进度条
        alert('请求出错:' + error.message||'未知错误')
        return Promise.reject(error) }
)


//向外暴露service
export default service