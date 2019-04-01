// 路由配置，使用index作为路由配置的入口
import Vue from 'vue'
import Router from 'vue-router'

//引入自定义的路由组件,自动会导入对应文件夹下的index.js文件
import cinemaRouter from './cinema'
import movieRouter from './movie'
import mineRouter from './mine'


// 开启路由模块
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    //默认路由跳转到电影
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
