<template>
    <div v-bind:class="rootStyle">
        <img v-bind:class="posterStyle" :src="posterUrl" :alt="posterAlt" />

        <div v-bind:class="filmDescriptionContainerStyle">
            <div v-bind:class="nameContainerStyle">
                <span v-bind:class="nameStyle">{{ name }}</span>
                <span v-bind:class="ratingStyle">{{ formattedRating }}</span>
            </div>

            <span v-bind:class="shortInfoStyle">{{ shortDescription }}</span>

            <div v-bind:class="summaryContainer">
                <film-description-item :key-label="formattedReleaseYear" additional-label="year" />
                <film-description-item :key-label="formattedRuntime" additional-label="min" />
            </div>

            <span v-bind:class="descriptionStyle">
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
        /**
         *  styles
         */
        rootStyle(): string {
            return this.$style.root;
        },
        posterStyle(): string {
            return this.$style.poster;
        },
        filmDescriptionContainerStyle(): string {
            return this.$style['film-description-container'];
        },
        nameContainerStyle(): string {
            return this.$style['name-container'];
        },
        nameStyle(): string {
            return this.$style.name;
        },
        ratingStyle(): string {
            return this.$style.rating;
        },
        shortInfoStyle(): string {
            return this.$style['short-info'];
        },
        summaryContainer(): string {
            return this.$style['summary-container'];
        },
        descriptionStyle(): string {
            return this.$style.description;
        },

        /**
         *  properties
         */
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

.short-info {
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
