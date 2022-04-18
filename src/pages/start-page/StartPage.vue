<template>
    <div :class="$style.root">
        <start-page-header :selected-film-id="selectedFilmId" @back-to-search="backToSearch" />

        <start-page-body :select-film="selectFilm" />

        <start-page-footer />
    </div>
</template>

<script lang="ts">
import StartPageBody from '@/pages/start-page/StartPageBody.vue';
import StartPageFooter from '@/pages/start-page/StartPageFooter.vue';
import StartPageHeader from '@/pages/start-page/StartPageHeader.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'StartPage',
    components: {
        StartPageFooter,
        StartPageHeader,
        StartPageBody,
    },
    data() {
        return {
            selectedFilmId: '',
        };
    },
    methods: {
        selectFilm(id: string): void {
            this.selectedFilmId = id;
        },
        backToSearch(): void {
            this.selectedFilmId = '';
        },
    },
});
</script>

<style lang="scss" module scoped>
.root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
