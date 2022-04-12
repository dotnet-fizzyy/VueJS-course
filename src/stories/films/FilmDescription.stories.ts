import FilmDescription, { FilmDescriptionProps } from '@/components/films/FilmDescription.vue';

export default {
    title: 'films/FilmDescription',
    component: FilmDescription,
};

const Template = (args, { argTypes }) => ({
    components: { FilmDescription },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: rgba(0, 0, 0, 0.8); padding: 30px; width: fit-content"><FilmDescription v-bind="$props" /></div>',
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
} as FilmDescriptionProps;

export const DescriptionWithoutPoster = Template.bind({});
DescriptionWithoutPoster.args = {
    ...Default.args,
    posterUrl: undefined,
    posterAlt: undefined,
} as FilmDescriptionProps;
