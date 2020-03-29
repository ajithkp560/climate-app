import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/components/IndexPage';
import HelpPage from '@/components/HelpPage';
import AboutPage from '@/components/AboutPage';
import NotFoundPage from '@/components/NotFoundPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage, 
    },
    {
      path: '/help',
      name: 'HelpPage',
      component: HelpPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
