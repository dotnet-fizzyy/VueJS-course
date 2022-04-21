<template>
    <div :class="$style.root">
        <div :class="$style['sort-panel-container']">
            <sort-panel />
        </div>

        <div :class="$style['films-display']">
            <div v-for="film in films" :key="film.id" :class="$style['film-container']">
                <film-preview
                    :id="film.id"
                    :name="film.name"
                    :short-description="film.shortDescription"
                    :release-year="film.releaseYear"
                    :poster-url="film.posterUrl"
                    :poster-alt="film.posterAlt"
                    @select="selectFilm"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import FilmPreview from '@/components/films/FilmPreview.vue';
import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { getFilmModuleType } from '@/vuex/store/utils';
import { mapGetters } from 'vuex';
import { setSelectedFilmActionPayload } from '@/vuex/modules/films/actions';

export default Vue.extend({
    name: 'StartPageBody',
    components: { FilmPreview, SortPanel },
    computed: {
        ...mapGetters({
            films: getFilmModuleType(FilmGetterProps.FilmsPreviews),
        }),
    },
    methods: {
        selectFilm(id: string): void {
            this.$store.dispatch(setSelectedFilmActionPayload(id));
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
}

.films-display {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px;
}

.film-container {
    padding: 25px;
    max-width: 370px;
    box-sizing: border-box;
}

.sort-panel-container {
    height: 70px;
    background-color: $light-grey;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 120px;
}
</style>
