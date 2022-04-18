<template>
    <span v-font-size="fontSize" :class="[$style.font, $style[fontStyle]]"><slot /></span>
</template>

<script lang="ts">
import Vue from 'vue';
import { DefaultFontSize, DefaultFontStyle } from '@/constants/styles';
import { FontSizeDirective, FontSizeDirectiveName } from '@/directives/fontSizeDirective';
import { FontStyle } from '@/enums/styles';

export interface TitleProps {
    fontStyle?: FontStyle;
    fontSize?: number;
    title: string;
}

export default Vue.extend({
    name: 'Title',
    directives: {
        [FontSizeDirectiveName]: FontSizeDirective,
    },
    props: {
        fontStyle: {
            type: String,
            default: DefaultFontStyle,
        },
        fontSize: {
            type: Number,
            default: DefaultFontSize,
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/fonts';
</style>
