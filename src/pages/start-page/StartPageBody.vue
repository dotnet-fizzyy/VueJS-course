<template>
    <div data-aqa-start-body :class="$style.root">
        <div :class="$style['sort-panel-container']">
            <sort-panel />
        </div>

        <template v-if="!!films.length">
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
        </template>

        <template v-else>
            <div id="no-films-message-container" :class="$style['no-films-found-container']">
                <template v-if="isLoadingItems">
                    <loading-icon />
                </template>

                <template v-else>
                    <app-title :font-size="30" :font-style="noFoundTitleFontStyle">{{ noFilmsFoundMessage }}</app-title>
                </template>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import AppTitle from '@/components/common/AppTitle.vue';
import FilmPreview from '@/components/films/FilmPreview.vue';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FontStyle } from '@/enums/styles';
import { NoFilmsFoundMessage } from '@/constants/search';
import { getFilmByIdRequestActionPayload, getFilmsRequestActionPayload } from '@/vuex/modules/films/actions';
import { getFilmModuleType } from '@/vuex/store/utils';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'StartPageBody',
    components: { LoadingIcon, FilmPreview, SortPanel, AppTitle },
    data: () => ({
        noFoundTitleFontStyle: FontStyle.Bold,
        noFilmsFoundMessage: NoFilmsFoundMessage,
    }),
    computed: {
        ...mapGetters({
            films: getFilmModuleType(FilmGetterProps.FilmsPreviews),
            isLoadingItems: getFilmModuleType(FilmGetterProps.IsLoadingItems),
        }),
    },
    methods: {
        selectFilm(id: string): void {
            this.$store.dispatch(getFilmByIdRequestActionPayload(id));
        },
    },
    created(): void {
        this.$store.dispatch(getFilmsRequestActionPayload());
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

.no-films-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    height: 100%;
}
</style>
