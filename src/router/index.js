import { createWebHistory, createRouter } from "vue-router";
import Landing from '../views/Landing';
import Portfolio from '../views/Portfolio';
import Photos from '../views/Photos'
import Register from '../views/Register'
import Login from '../views/Login'
import Contact from '../views/Contact';
import About from '../views/About';
import Admin from '../views/Admin';
import NewAlbum from '../components/NewAlbum'
import ManageAlbum from '../components/ManageAlbum'
import ManagePhotos from '../components/ManagePhotos'
import ManageVideos from '../components/ManageVideos'
import ManageAbout from '../components/ManageAbout'
import Faq from '../components/ManageFaq'
import PageNotFound from '../components/PageNotFound'

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/portfolio/album/:id",
    name: "albumphotos",
    component: Photos,
    props(route) {
      return {  myprop: route.query.myprop }
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [
      {
        path: 'newalbum',
        component: NewAlbum,
      },
      {
        path: 'managealbum',
        component: ManageAlbum,
      },
      {
        path: 'managephotos',
        component: ManagePhotos,
      },
      {
        path: 'managevideos',
        component: ManageVideos,
      },
      {
        path: 'manageabout',
        component: ManageAbout,
      },
      {
        path: 'faq',
        component: Faq,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PageNotFound,
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['admin','adminnewalbum','adminmanagealbum','adminmanagephotos','adminmanagevideos',];
  const authRequired = publicPages.includes(to.path.replace(/[^a-zA-Z ]/g, ""));
  const store = require('../store/store.js')
  let isLoggedIn = store.store.state.isLoggedIn;
  if (authRequired && (isLoggedIn == false)) {
    return next('/login');
  }
  next();
})

export default router;