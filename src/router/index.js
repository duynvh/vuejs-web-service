import Vue from 'vue'
import Router from 'vue-router'
import Logout from '@/components/Logout'
import PageHome from '@/components/PageHome'
import PageAdmin from '@/components/PageAdmin'
import PageDetailMovie from '@/components/PageDetailMovie'
import PageManager from '@/components/PageManager'
import PageAdd from '@/components/PageAdd'
import PageEdit from '@/components/PageEdit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/admin',
      name: 'PageAdmin',
      component: PageAdmin
    },
    {
      path: '/manager',
      name: 'PageManager',
      component: PageManager
    },
    {
      path: '/manager/add',
      name: 'PageAdd',
      component: PageAdd
    },
    {
      path: '/manager/edit/:id',
      name: 'PageEdit',
      component: PageEdit
    },
    {
      path: '/detail/:id',
      name: 'PageDetailMovie',
      component: PageDetailMovie
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ],
  mode: 'history'
})
