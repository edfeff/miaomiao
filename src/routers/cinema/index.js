//  导出一个路由组件
export default {
  path: '/cinema',
  //使用延迟加载，导入view中的视图Cinema/index.vue ,可以省略后面的index.vue
  //@表示src根路径
  component: () => import('@/views/Cinema')
}