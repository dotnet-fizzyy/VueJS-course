<template>
    <div v-bind:class="rootStyle" v-on:click="onClick(id)">
        <img v-bind:class="posterStyle" v-bind:src="posterLink" v-bind:alt="posterAlt" />

        <div v-bind:class="posterFooterStyle">
            <div v-bind:class="posterFooterDescriptionContainerStyle">
                <span v-bind:class="filmNameStyle">{{ name }}</span>
                <span v-bind:class="filmShortInfoStyle">{{ shortInfo }}</span>
            </div>
            <div v-bind:class="posterFooterYearReleaseContainerStyle">
                <span v-bind:class="releaseYearPillStyle">{{ releaseYear }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface FilmItemProps {
    id: string;
    posterLink?: string;
    posterAlt?: string;
    name: string;
    shortInfo: string;
    releaseYear: number;
    onClick: (id: string) => void;
}

export default Vue.extend({
    name: 'FilmItem',
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        posterLink: {
            type: String,
            // todo: move to env variables
            default: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649763572/vue/NoImageAvailable.png',
        },
        posterAlt: {
            type: String,
            default: 'film poster',
        },
        shortInfo: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
        },
    },
    computed: {
        rootStyle(): string {
            return this.$style.root;
        },
        posterStyle(): string {
            return this.$style.poster;
        },
        posterFooterStyle(): string {
            return this.$style['poster-footer'];
        },
        posterFooterDescriptionContainerStyle(): string {
            return this.$style['poster-footer-description-container'];
        },
        posterFooterYearReleaseContainerStyle(): string {
            return this.$style['poster-footer-year-release-container'];
        },
        filmNameStyle(): string {
            return this.$style['film-name'];
        },
        filmShortInfoStyle(): string {
            return this.$style['film-short-info'];
        },
        releaseYearPillStyle(): string {
            return this.$style['release-year-pill'];
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

.film-short-info {
    @extend .font;
    color: getRgbaWhite($white-small-opacity);
    font-size: 13px;
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
