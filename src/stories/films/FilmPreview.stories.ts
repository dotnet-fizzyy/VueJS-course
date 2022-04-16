import FilmPreview, { FilmPreviewProps } from '@/components/films/FilmPreview.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'films/FilmPreview',
    component: FilmPreview,
};

const Template = (args, { argTypes }) => ({
    components: { FilmPreview },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #232323; padding: 30px; width: fit-content"><FilmPreview v-bind="$props" @click="$props.onClick" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    id: 'rd',
    name: 'Reservoir dogs',
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649708947/vue/ReservoirDogs.png',
    posterAlt: 'reservoir dogs',
    shortDescription: 'Oscar winning movie',
    releaseYear: 1994,
    onClick: action('onClick'),
} as FilmPreviewProps;

export const FilmWithoutPoster = Template.bind({});
FilmWithoutPoster.args = {
    ...Default.args,
    posterUrl: undefined,
    posterAlt: undefined,
} as FilmPreviewProps;
