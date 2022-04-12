import FilmItem, { FilmItemProps } from '@/components/films/FilmItem.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'films/FilmItem',
    component: FilmItem,
};

const Template = (args, { argTypes }) => ({
    components: { FilmItem },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #232323; padding: 30px; width: fit-content"><FilmItem :id="$props.id" :name="$props.name" :poster-alt="$props.posterAlt" :poster-link="$props.posterLink" :short-info="$props.shortInfo" :release-year="$props.releaseYear" @on-click="$props.onClick" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    id: 'rd',
    name: 'Reservoir dogs',
    posterLink: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649708947/vue/ReservoirDogs.png',
    posterAlt: 'reservoir dogs',
    shortInfo: 'Oscar winning movie',
    releaseYear: 1994,
    onClick: action('onClick'),
} as FilmItemProps;

export const FilmWithoutPoster = Template.bind({});
FilmWithoutPoster.args = {
    ...Default.args,
    posterLink: undefined,
    posterAlt: undefined,
} as FilmItemProps;
