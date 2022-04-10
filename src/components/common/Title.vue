<template>
    <span v-bind:class="style"><slot /></span>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';

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
            return [this.$style.font, this.fontStyle];
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/fonts';
</style>
