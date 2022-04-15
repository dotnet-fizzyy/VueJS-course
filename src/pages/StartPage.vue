<template>
    <div :class="$style.root">
        <div :class="$style.header">
            <div :class="$style['header-background']">
                <div :class="$style['search-container']">
                    <div :class="$style['logo-container']">
                        <logo-icon />
                    </div>

                    <template v-if="!!selectedFilm">
                        <div :class="$style['search-icon-container']" @click="onBackToSearch">
                            <search-icon />
                        </div>

                        <film-full-description
                            :id="selectedFilm.id"
                            :name="selectedFilm.name"
                            :short-description="selectedFilm.shortDescription"
                            :full-description="selectedFilm.fullDescription"
                            :release-year="selectedFilm.releaseYear"
                            :poster-url="selectedFilm.posterUrl"
                            :poster-alt="selectedFilm.posterAlt"
                            :rating="selectedFilm.rating"
                            :runtime="selectedFilm.runtime"
                        />
                    </template>
                    <template v-else>
                        <search-panel />
                    </template>
                </div>
            </div>
        </div>

        <div :class="$style.body">
            <div :class="$style['sort-panel-container']">
                <sort-panel :available-items-count="7" />
            </div>

            <div :class="$style['films-display']">
                <div v-for="film in films" :key="film.id" :class="$style['film-container']">
                    <film-short-description
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

        <div :class="$style.footer">
            <logo-icon />
        </div>
    </div>
</template>

<script lang="ts">
import FilmFullDescription from '@/components/films/FilmFullDescription.vue';
import FilmShortDescription from '@/components/films/FilmPreview.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import SearchPanel from '@/components/search/SearchPanel.vue';
import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';
import { fullFilmsDescription, shortFilmsDescription } from '@/mocks/mockFilms';

export default Vue.extend({
    name: 'StartPage',
    components: { LogoIcon, SearchIcon, FilmFullDescription, FilmShortDescription, SearchPanel, SortPanel },
    data() {
        return {
            films: shortFilmsDescription,
            selectedFilm: null,
        };
    },
    methods: {
        selectFilm(id: string): void {
            this.selectedFilm = fullFilmsDescription.find(x => x.id === id);
        },
        onBackToSearch(): void {
            this.selectedFilm = null;
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../styles/fonts';

.root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    background-image: url('https://res.cloudinary.com/djlynoeio/image/upload/v1649880735/vue/film-posters.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.header-background {
    height: 100%;
    background-color: getRgbaBlack(0.8);
    backdrop-filter: blur(3px);
    position: relative;
}

.logo-container {
    position: absolute;
    left: 60px;
    top: 20px;
}

.search-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 100px 120px;
}

.search-icon-container {
    position: absolute;
    right: 60px;
    top: 20px;
    cursor: pointer;
}

.body {
}

.films-display {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px;
}

.film-container {
    padding: 25px;
}

.sort-panel-container {
    height: 70px;
    background-color: $light-grey;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 120px;
}

.footer {
    height: 70px;
    background-color: $light-grey;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
