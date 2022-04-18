<template>
    <div :class="$style.root">
        <div :class="$style.background">
            <div :class="$style['logo-icon-container']">
                <logo-icon />
            </div>

            <template v-if="selectedFilmId && selectedFilm">
                <div :class="$style['search-icon-container']" @click="backToSearch">
                    <search-icon />
                </div>

                <film-full-description v-bind="selectedFilm" />
            </template>

            <template v-else>
                <search-panel />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import FilmFullDescription from '@/components/films/FilmFullDescription.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import SearchPanel from '@/components/search/SearchPanel.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'StartPageHeader',
    components: { SearchIcon, LogoIcon, SearchPanel, FilmFullDescription },
    props: {
        selectedFilmId: {
            type: String,
            required: true,
        },
    },
    computed: {
        selectedFilm() {
            return this.$store.getters['films/fullDescriptionFilmById'](this.selectedFilmId);
        },
    },
    methods: {
        backToSearch(): void {
            this.$emit('back-to-search');
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    background-image: url('https://res.cloudinary.com/djlynoeio/image/upload/v1649880735/vue/film-posters.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.background {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: getRgbaBlack(0.8);
    backdrop-filter: blur(3px);
    box-sizing: border-box;
    padding: 100px 120px;
}

.logo-icon-container {
    position: absolute;
    left: 60px;
    top: 20px;
}

.search-icon-container {
    position: absolute;
    right: 60px;
    top: 20px;
    cursor: pointer;
}
</style>
