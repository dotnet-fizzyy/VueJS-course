import Title, { TitleProps } from '@/components/common/Title.vue';
import { FontSize, FontStyle } from '@/enums/styles';

export default {
    title: 'common/Title',
    component: Title,
};

const Template = (args, { argTypes }) => ({
    components: { Title },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #555555; width: fit-content; padding: 10px"><Title v-bind="$props">{{ $props.title }}</Title></div>',
});

export const NormalFontStyle = Template.bind({});
NormalFontStyle.args = {
    title: 'Hello world!',
    fontStyle: FontStyle.Normal,
    fontSize: FontSize.Medium,
} as TitleProps;

export const BoldFontStyle = Template.bind({});
BoldFontStyle.args = {
    ...NormalFontStyle.args,
    fontStyle: FontStyle.Bold,
} as TitleProps;

export const ItalicFontStyle = Template.bind({});
ItalicFontStyle.args = {
    ...NormalFontStyle.args,
    fontStyle: FontStyle.Italic,
} as TitleProps;

export const SmallFontSize = Template.bind({});
SmallFontSize.args = {
    ...NormalFontStyle.args,
    fontSize: FontSize.Small,
} as TitleProps;

export const MediumFontSize = Template.bind({});
MediumFontSize.args = {
    ...NormalFontStyle.args,
    fontSize: FontSize.Medium,
} as TitleProps;

export const LargeFontSize = Template.bind({});
LargeFontSize.args = {
    ...NormalFontStyle.args,
    fontSize: FontSize.Large,
} as TitleProps;
