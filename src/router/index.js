import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '@/components/home'
import login from '@/components/login'
import article from '@/components/article'
import user from '@/components/user'

export default new Router({
  routes:[
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/article/:id',
      component: article
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]

})
