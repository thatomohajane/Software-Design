import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Fines from '@/components/Fines'
import IssueManager from '@/components/IssueManage'
import UserManager from '@/components/UserManage'
import Notices from '@/components/Notices'
import Reports from '@/components/Reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fines',
      name: 'Fines',
      component: Fines
    },
    {
      path: '/issue-manager',
      name: 'IssueManager',
      component: IssueManager
    },
    {
      path: '/user-manager',
      name: 'UserManager',
      component: UserManager
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/notices',
      name: 'Notices',
      component: Notices
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
