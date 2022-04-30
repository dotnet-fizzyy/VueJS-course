<template>
    <fragment>
        <template v-if="isLoadingSelectedItem">
            <loading-icon />
        </template>

        <template v-if="selectedFilm">
            <div data-aqa-back-to-search :class="$style['search-icon-container']" @click="backToSearch">
                <search-icon />
            </div>

            <film-full-description v-bind="selectedFilm" />
        </template>
    </fragment>
</template>

<script lang="ts">
import FilmFullDescription from '@/components/films/FilmFullDescription.vue';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { MoviesRoute } from '@/router/routes';
import { getFilmByIdRequestActionPayload } from '@/vuex/modules/films/actions';
import { getFilmModuleType } from '@/vuex/store/utils';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'StartPageFilmFullDescription',
    components: { FilmFullDescription, SearchIcon, LoadingIcon },
    computed: {
        ...mapGetters({
            selectedFilm: getFilmModuleType(FilmGetterProps.GetSelectedFilmWithFullDescription),
            isLoadingSelectedItem: getFilmModuleType(FilmGetterProps.IsLoadingSelectedItem),
        }),
    },
    methods: {
        backToSearch(): void {
            this.$router.push(MoviesRoute);
        },
    },
    created(): void {
        this.$store.dispatch(getFilmByIdRequestActionPayload(this.$route.params.id));
    },
    beforeRouteUpdate(to, from, next): void {
        if (to.params.id !== from.params.id) {
            this.$store.dispatch(getFilmByIdRequestActionPayload(to.params.id));
        }

        next();
    },
});
</script>

<style lang="scss" module scoped>
.search-icon-container {
    position: absolute;
    right: 60px;
    top: 20px;
    cursor: pointer;
}
</style>
