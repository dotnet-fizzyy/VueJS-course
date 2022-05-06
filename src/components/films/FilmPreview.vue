<template>
    <div data-aqa-preview :class="$style.root" @click="click(id)">
        <!--v-lazy is registered as plugin-->
        <img v-lazy="posterUrl" :class="$style.poster" :alt="posterAlt" />

        <div :class="$style['poster-footer']">
            <div :class="$style['poster-footer-description-container']">
                <span data-aqa-film-preview-name :class="$style['film-name']">{{ name }}</span>
                <span data-aqa-film-preview-short-desc :class="$style['film-short-info']">{{ shortDescription }}</span>
            </div>
            <div :class="$style['poster-footer-year-release-container']">
                <span data-aqa-film-preview-release-year :class="$style['release-year-pill']">{{ releaseYear }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAppSettings } from '@/utils/appSettings';

export interface FilmPreviewProps {
    id: string;
    posterUrl?: string;
    posterAlt?: string;
    name: string;
    shortDescription: string;
    releaseYear: number;
    select: (id: string) => void;
}

export default Vue.extend({
    name: 'FilmPreview',
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
        click(id: string): void {
            this.$emit('select', id);
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
