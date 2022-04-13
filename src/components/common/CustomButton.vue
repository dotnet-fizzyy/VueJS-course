<template>
    <button :class="root" v-on:click="onClick"><slot /></button>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface CustomButtonProps {
    title: string;
    type?: ButtonType;
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    onClick: () => void;
}

export default Vue.extend({
    name: 'CustomButton',
    props: {
        type: {
            type: String,
            default: ButtonType.Primary,
        },
        fontSize: {
            type: String,
            default: FontSize.Medium,
        },
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
    },
    computed: {
        root(): string[] {
            const fontStyle: string = this.$style[this.fontStyle];
            const fontSize: string = this.$style[this.fontSize];

            let buttonStyle: string;

            switch (this.type) {
                case ButtonType.Primary:
                    buttonStyle = this.$style['primary-button'];
                    break;
                case ButtonType.Secondary:
                    buttonStyle = this.$style['secondary-button'];
                    break;
            }

            return [buttonStyle, fontStyle, fontSize];
        },
    },
    methods: {
        onClick() {
            this.$emit('on-click');
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/buttons';
@import '../../styles/fonts';
</style>
