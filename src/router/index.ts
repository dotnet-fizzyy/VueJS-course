import StartPage from '@/pages/start-page/StartPage.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { getAppSettings } from '@/utils/appSettings';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'StartPage',
        component: StartPage,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: getAppSettings().defaultAppUrl,
    routes,
});

export default router;
