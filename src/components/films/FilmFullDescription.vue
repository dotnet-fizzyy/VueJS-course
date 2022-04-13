<template>
    <div :class="$style.root">
        <img :class="$style.poster" :src="posterUrl" :alt="posterAlt" />

        <div :class="$style['film-description-container']">
            <div :class="$style['name-container']">
                <span :class="$style.name">{{ name }}</span>
                <span :class="$style.rating">{{ formattedRating }}</span>
            </div>

            <span :class="$style['short-description']">{{ shortDescription }}</span>

            <div :class="$style['summary-container']">
                <film-description-item :key-label="formattedReleaseYear" additional-label="year" />
                <film-description-item :key-label="formattedRuntime" additional-label="min" />
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
import { getAppSettings } from '@/components/utils/appSettings';

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
    computed: {
        formattedReleaseYear(): string {
            return this.releaseYear.toString();
        },
        formattedRuntime(): string {
            return this.runtime.toString();
        },
        formattedRating(): string {
            return this.rating.toLocaleString('en-US', { useGrouping: false, minimumFractionDigits: 1 });
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    display: flex;
    flex-direction: row;
}

.poster {
    width: 280px;
    height: 390px;
}

.film-description-container {
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
