<template>
    <div :class="$style.root">
        <span :class="$style['key-label']">{{ keyLabel }}</span>

        <span v-if="!!additionalLabel" :class="$style['additional-label']">{{ additionalLabel }}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'FilmDescriptionItem',
    props: {
        keyLabel: {
            type: String,
            required: true,
        },
        additionalLabel: {
            type: String,
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
