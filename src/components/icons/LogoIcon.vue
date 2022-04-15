<template>
    <div>
        <span :class="$style['first-logo-part']">Netflix</span>
        <span :class="$style['second-logo-part']">Roulette</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LogoIcon',
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.common-logo {
    font-family: $roboto;
    color: $dark-pink;
    font-size: 20px;
    text-transform: lowercase;
}

.first-logo-part {
    @extend .common-logo;
    @extend .bold;
}

.second-logo-part {
    @extend .common-logo;
}
</style>
