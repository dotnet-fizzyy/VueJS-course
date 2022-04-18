<template>
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
</template>

<script lang="ts">
import FilmShortDescription from '@/components/films/FilmPreview.vue';
import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';
import { shortFilmsDescription } from '@/mocks/mockFilms';

export default Vue.extend({
    name: 'StartPageBody',
    components: { SortPanel, FilmShortDescription },
    props: {
        selectFilm: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            availableItemsCount: shortFilmsDescription.length,
            films: shortFilmsDescription,
        };
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
