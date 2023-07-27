// 该文件专门用于创建整个应用的路由器
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../views/home/index.vue"
import Login from "@/views/Login.vue";
import Detail from "@/views/Detail.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/login',
            component:Login,
        },
        {
            path:'/detail',
            component: Detail,
        },
        {
            path:'/',
            component: Home
        }
    ],
});

export default router;

