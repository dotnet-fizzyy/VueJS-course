<template>
    <div :class="$style.root">
        <div :class="$style.header">
            <div :class="$style['header-background']">
                <div :class="$style['search-container']">
                    <div :class="$style['logo-container']">
                        <logo />
                    </div>

                    <search-panel />
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
                        @on-click="onSelectFilm"
                    />
                </div>
            </div>
        </div>

        <div :class="$style.footer">
            <logo />
        </div>
    </div>
</template>

<script lang="ts">
import FilmShortDescription from '@/components/films/FilmShortDescription.vue';
import Logo from '@/assets/icons/Logo.vue';
import SearchPanel from '@/components/search/SearchPanel.vue';
import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';
import { shortFilmsDescription } from '@/mocks/mockFilms';

export default Vue.extend({
    name: 'StartView',
    components: { FilmShortDescription, SearchPanel, SortPanel, Logo },
    data() {
        return {
            films: shortFilmsDescription,
            selectedFilm: null,
        };
    },
    methods: {
        onSelectFilm(id: string): void {
            this.selectedFilm = shortFilmsDescription.find(x => x.id === id);
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 400px;
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
    padding: 0 120px;
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
