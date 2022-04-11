import Title, { TitleProps } from '@/components/common/Title.vue';
import { FontStyle } from '@/enums/styles';

export default {
    title: 'common/Title',
    component: Title,
};

const Template = (args, { argTypes }) => ({
    components: { Title },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #555555; width: fit-content; padding: 10px"><Title :font-style="$props.fontStyle">{{ $props.title }}</Title></div>',
});

export const Normal = Template.bind({});
Normal.args = {
    title: 'Hello world!',
    fontStyle: FontStyle.Normal,
} as TitleProps;

export const Bold = Template.bind({});
Bold.args = {
    title: 'Hello world!',
    fontStyle: FontStyle.Bold,
} as TitleProps;

export const Italic = Template.bind({});
Italic.args = {
    title: 'Hello world!',
    fontStyle: FontStyle.Italic,
} as TitleProps;
