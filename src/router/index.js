import Vue from 'vue'
import Router from 'vue-router'
import All from '../views/All'
import Detail from '../views/Detail'
import Cartoon from '../views/Cartoon'
import Game from '../views/Game'
import Movie from '../views/Movie'
import Try from '../views/Try'
import Scenery from '../views/Scenery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', redirect: '/all' },
    { path: '/all', component: All },
    { path: '/all/detail', component: Detail },
    { path: '/Cartoon', component: Cartoon },
    { path: '/Game', component: Game },
    { path: '/Movie', component: Movie },
    { path: '/Try', component: Try },
    { path: '/Scenery', component: Scenery }

  ]
})
