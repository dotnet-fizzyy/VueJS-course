// noinspection ES6UnusedImports
// eslint-disable-next-line
import Vue from 'vue';
import VueResource from 'vue-resource';

declare module 'vue/types/vue' {
    interface VueConstructor {
        http: VueResource.Http;
    }
}
