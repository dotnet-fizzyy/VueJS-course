import NoPageFound from '@/pages/no-page-found/NoPageFound.vue';
import StartPage from '@/pages/start-page/StartPage.vue';
import StartPageFilmFullDescription from '@/pages/start-page/StartPageFilmFullDescription.vue';
import StartPageSearchPanel from '@/pages/start-page/StartPageSearchPanel.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { MoviesRoute } from '@/constants/routes';
import { getAppSettings } from '@/utils/appSettings';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        redirect: MoviesRoute,
    },
    {
        path: MoviesRoute,
        component: StartPage,
        children: [
            {
                path: '',
                component: StartPageSearchPanel,
            },
            {
                path: ':id',
                component: StartPageFilmFullDescription,
            },
        ],
    },
    {
        path: '*',
        component: NoPageFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: getAppSettings().defaultAppUrl,
    routes,
});

export default router;
