<template>
    <span v-bind:class="style"><slot /></span>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';

export interface TitleProps {
    fontStyle: FontStyle;
    title: string;
}

export default Vue.extend({
    name: 'Title',
    props: {
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
    },
    computed: {
        style(): string[] {
            const fontStyle: string = this.$style[this.fontStyle];

            return [this.$style.font, fontStyle];
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/fonts';
</style>
