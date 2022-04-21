<template>
    <div :class="$style.root">
        <!--v-lazy is registered as plugin-->
        <img v-lazy="posterUrl" :class="$style.poster" :alt="posterAlt" />

        <div :class="$style['film-description-container']">
            <div :class="$style['name-container']">
                <span :class="$style.name">{{ name }}</span>
                <span :class="$style.rating">{{ rating | precision }}</span>
            </div>

            <span :class="$style['short-description']">{{ shortDescription }}</span>

            <div :class="$style['summary-container']">
                <film-description-item :key-label="releaseYear | string" additional-label="year" />
                <film-description-item :key-label="runtime | round('up')" additional-label="min" />
            </div>

            <span :class="$style.description">
                {{ fullDescription }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import FilmDescriptionItem from '@/components/films/FilmDescriptionItem.vue';
import Vue from 'vue';
import { getAppSettings } from '@/utils/appSettings';

export interface FilmFullDescriptionProps {
    name: string;
    releaseYear: number;
    runtime: number;
    rating: number;
    shortDescription: string;
    fullDescription: string;
    posterUrl?: string;
    posterAlt?: string;
}

export default Vue.extend({
    name: 'FilmFullDescription',
    components: { FilmDescriptionItem },
    props: {
        name: {
            type: String,
            required: true,
        },
        posterUrl: {
            type: String,
            default: getAppSettings().defaultPosterUrl,
        },
        posterAlt: {
            type: String,
            default: getAppSettings().defaultPosterAlt,
        },
        shortDescription: {
            type: String,
            required: true,
        },
        fullDescription: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        runtime: {
            type: Number,
            required: true,
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.poster {
    width: 280px;
    height: 390px;
}

.film-description-container {
    width: 100%;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
}

.name-container {
    display: flex;
    flex-direction: row;
}

.name {
    @extend .font;

    font-size: 46px;
    color: $white;
    margin-right: 30px;
    width: fit-content;
}

.rating {
    @extend .font;

    display: flex;
    border-radius: 50%;
    width: 66px;
    height: 66px;
    color: $light-green;
    border: 1px solid $white;
    align-items: center;
    justify-content: center;
    font-size: 22px;
}

.summary-container {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 180px;
}

.short-description {
    @extend .film-short-info;

    margin-top: 10px;
    font-size: 16px;
}

.description {
    @extend .font;

    margin-top: 20px;
    font-size: 16px;
    color: $white;
}
</style>
