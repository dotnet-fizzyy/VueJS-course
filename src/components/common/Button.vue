<template>
    <button v-bind:class="style" v-on:click="onClick"><slot /></button>
</template>

<script lang="ts">
import Vue from 'vue';

export enum FontStyle {
    Normal = 'normal',
    Bold = 'bold',
    Italic = 'italic',
}

export default Vue.extend({
    name: 'Button',
    props: {
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
        onClick: {
            type: Function,
            required: true,
        },
    },
    computed: {
        style(): string[] {
            return ['primary-button', this.fontStyle];
        },
    },
});
</script>

<style lang="scss" scoped>
@import '../../styles/buttons';
@import '../../styles/fonts';
</style>
