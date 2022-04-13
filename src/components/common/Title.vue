<template>
    <span :class="style"><slot /></span>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';

export interface TitleProps {
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    title: string;
}

export default Vue.extend({
    name: 'Title',
    props: {
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
        fontSize: {
            type: String,
            default: FontSize.Medium,
        },
    },
    computed: {
        style(): string[] {
            const fontStyle: string = this.$style[this.fontStyle];
            const fontSize: string = this.$style[this.fontSize];

            return [this.$style.font, fontStyle, fontSize];
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/fonts';
</style>
