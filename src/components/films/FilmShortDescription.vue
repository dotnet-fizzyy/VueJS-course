<template>
    <div :class="$style.root" v-on:click="onClick(id)">
        <img :class="$style.poster" :src="posterUrl" :alt="posterAlt" />

        <div :class="$style['poster-footer']">
            <div :class="$style['poster-footer-description-container']">
                <span :class="$style['film-name']">{{ name }}</span>
                <span :class="$style['film-short-info']">{{ shortDescription }}</span>
            </div>
            <div :class="$style['poster-footer-year-release-container']">
                <span :class="$style['release-year-pill']">{{ releaseYear }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAppSettings } from '@/utils/appSettings';

export interface FilmShortDescriptionProps {
    id: string;
    posterUrl?: string;
    posterAlt?: string;
    name: string;
    shortDescription: string;
    releaseYear: number;
    onClick: (id: string) => void;
}

export default Vue.extend({
    name: 'FilmShortDescription',
    props: {
        id: {
            type: String,
            required: true,
        },
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
        releaseYear: {
            type: Number,
            required: true,
        },
    },
    methods: {
        onClick(id: string): void {
            this.$emit('on-click', id);
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.poster {
    width: 320px;
    height: 455px;
}

.poster-footer {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}

.poster-footer-description-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.poster-footer-year-release-container {
    flex-basis: fit-content;
}

.film-name {
    @extend .font;
    @extend .bold;

    margin-bottom: 10px;
}

.release-year-pill {
    @extend .font;

    display: block;
    font-size: 12px;
    padding: 4px 20px;
    border: 1px solid getRgbaWhite($white-medium-opacity);
    border-radius: 4px;
    box-sizing: border-box;
}
</style>
