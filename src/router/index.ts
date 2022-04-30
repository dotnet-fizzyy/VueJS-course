import SearchPanel from '@/components/search/SearchPanel.vue';
import StartPage from '@/pages/start-page/StartPage.vue';
import StartPageFilmFullDescription from '@/pages/start-page/StartPageFilmFullDescription.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { DefaultRoute, MoviesRoute } from '@/router/routes';
import { getAppSettings } from '@/utils/appSettings';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: DefaultRoute,
        redirect: MoviesRoute,
    },
    {
        path: MoviesRoute,
        component: StartPage,
        children: [
            {
                path: '',
                component: SearchPanel,
            },
            {
                path: ':id',
                component: StartPageFilmFullDescription,
            },
        ],
    },
    {
        path: '*',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: getAppSettings().defaultAppUrl,
    routes,
});

export default router;
