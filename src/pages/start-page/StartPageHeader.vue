<template>
    <div data-aqa-start-header :class="$style.root">
        <div :class="[$style.background, { [$style['center-content-background']]: isLoadingSelectedItem }]">
            <div :class="$style['logo-icon-container']">
                <logo-icon />
            </div>

            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { getFilmModuleType } from '@/vuex/store/utils';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'StartPageHeader',
    components: { LogoIcon },
    computed: {
        ...mapGetters({
            isLoadingSelectedItem: getFilmModuleType(FilmGetterProps.IsLoadingSelectedItem),
        }),
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    background-image: url('https://res.cloudinary.com/djlynoeio/image/upload/v1649880735/vue/film-posters.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.background {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: getRgbaBlack(0.8);
    backdrop-filter: blur(3px);
    box-sizing: border-box;
    padding: 100px 120px;
}

.center-content-background {
    justify-content: center;
}

.logo-icon-container {
    position: absolute;
    left: 60px;
    top: 20px;
}
</style>
