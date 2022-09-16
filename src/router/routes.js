/* 
配置路由
*/
import Home from '@/views/Home'
import Search from '@/views/Search'
import Register from '@/views/Register'
import Login from '@/views/Login'


export default [
    {
        path:'/',
        component: Home,
        
    },
    {
        path:'/search/:keyword?',
        component: Search,
        name:'search'
    },
    {
        path:'/register',
        component: Register,
        meta:{
            isHideFooter: true
        }
    },
    {
        path:'/login',
        component: Login,
        meta:{
            isHideFooter: true
        }
    },

]