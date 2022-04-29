import FilmFullDescription, { FilmFullDescriptionProps } from '@/components/films/FilmFullDescription.vue';
import FiltersPlugin from '@/plugins/filtersPlugin';
import Vue from 'vue';
import VueLazyload, { VueLazyloadOptions } from 'vue-lazyload';
import { castNumberToStringWithPrecision, castNumberToStringWithRound, castToString } from '@/utils';

export default {
    title: 'films/FilmFullDescription',
    component: FilmFullDescription,
};

Vue.use(FiltersPlugin);
Vue.use(VueLazyload, {
    error: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649763572/vue/NoImageAvailable.png',
} as VueLazyloadOptions);

const Template = (args, { argTypes }) => ({
    components: { FilmFullDescription },
    props: Object.keys(argTypes),
    filters: {
        precision: castNumberToStringWithPrecision,
        round: castNumberToStringWithRound,
        string: castToString,
    },
    template:
        '<div style="background-color: rgba(0, 0, 0, 0.8); padding: 30px; width: fit-content"><FilmFullDescription v-bind="$props" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    name: 'Reservoir dogs',
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649708947/vue/ReservoirDogs.png',
    posterAlt: 'reservoir dogs',
    shortDescription: 'Oscar winning movie',
    fullDescription:
        ' A group of thieves assemble to pull of the perfect diamond heist. It turns into a bloody ambush when one\n' +
        "                of the men turns out to be a police informer. As the group begins to question each other's guilt, the\n" +
        '                heightening tensions threaten to explode the situation before the police step in.',
    releaseYear: 1994,
    rating: 5,
    runtime: 89,
} as FilmFullDescriptionProps;

export const FilmWithoutPoster = Template.bind({});
FilmWithoutPoster.args = {
    ...Default.args,
    posterUrl: undefined,
    posterAlt: undefined,
} as FilmFullDescriptionProps;
