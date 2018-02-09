import Vue from 'vue'
import Router from 'vue-router'
import blog from '@/components/blog/blog'
import create from '@/components/blog/create'
import edit from '@/components/blog/edit'
import show from '@/components/blog/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: blog
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/blogs/:id/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/blogs/:id',
      name: 'show',
      component: show
    }
  ],
  mode: 'history'
})
