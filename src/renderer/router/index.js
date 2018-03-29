import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/reader',
      name: 'qr-code-reader',
      component: require('@/components/Reader').default
    },
    {
      path: '/teams',
      name: 'team-list',
      component: require('@/components/Teams').default
    },
    {
      path: '/matches',
      name: 'match-list',
      component: require('@/components/Matches').default
    },
    {
      path: '/team:number',
      name: 'team',
      component: require('@/components/Team').default
    },
    {
      path: '/match:number',
      name: 'match',
      component: require('@/components/Match').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
