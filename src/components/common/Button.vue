<template>
    <button v-bind:class="style" v-on:click="onClick"><slot /></button>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';

export default Vue.extend({
    name: 'Button',
    props: {
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
    },
    computed: {
        style(): string[] {
            return [this.$style['primary-button'], this.fontStyle];
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
