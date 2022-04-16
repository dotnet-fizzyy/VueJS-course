<template>
    <span v-font-size="fontSize" :class="[$style.font, $style[fontStyle]]"><slot /></span>
</template>

<script lang="ts">
import FontDirective from '@/directives/fontSizeDirective';
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';

export interface TitleProps {
    fontStyle?: FontStyle;
    fontSize?: 14;
    title: string;
}

export default Vue.extend({
    name: 'Title',
    directives: {
        'font-size': FontDirective,
    },
    props: {
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
        fontSize: {
            type: Number,
            default: 14,
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/fonts';
</style>
