import Vue from 'vue'
import Router from 'vue-router'
import Talk from '@/components/Talk'
import DifferentsWords from '@/components/DifferentsWords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Talk',
      component: Talk
    },
    {
      path: '/differents-words',
      name: 'DifferentsWords',
      component: DifferentsWords
    }
  ]
})
