<template>
    <div v-bind:class="rootStyle">
        <span v-bind:class="keyLabelStyle">{{ keyLabel }}</span>

        <span v-if="!!additionalLabel" v-bind:class="additionalLabelStyle">{{ additionalLabel }}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'FilmSummary',
    props: {
        keyLabel: {
            type: String,
            required: true,
        },
        additionalLabel: {
            type: String,
        },
    },
    computed: {
        rootStyle(): string {
            return this.$style.root;
        },
        keyLabelStyle(): string {
            return this.$style['key-label'];
        },
        additionalLabelStyle(): string {
            return this.$style['additional-label'];
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

.key-label {
    @extend .font;

    font-size: 20px;
    color: $dark-pink;
    margin-right: 5px;
}

.additional-label {
    @extend .font;

    font-size: 15px;
    color: $extra-light-grey;
}
</style>
