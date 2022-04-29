import Title, { TitleProps } from '@/components/common/AppTitle.vue';
import { DefaultFontSize, DefaultFontStyle } from '@/constants/styles';
import { FontStyle } from '@/enums/styles';

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

export const DefaultFontSizeAndStyle = Template.bind({});
DefaultFontSizeAndStyle.args = {
    title: 'Hello world!',
    fontStyle: DefaultFontStyle,
    fontSize: DefaultFontSize,
} as TitleProps;

export const BoldFontStyle = Template.bind({});
BoldFontStyle.args = {
    ...DefaultFontSizeAndStyle.args,
    fontStyle: FontStyle.Bold,
} as TitleProps;

export const ItalicFontStyle = Template.bind({});
ItalicFontStyle.args = {
    ...DefaultFontSizeAndStyle.args,
    fontStyle: FontStyle.Italic,
} as TitleProps;

export const SmallFontSize = Template.bind({});
SmallFontSize.args = {
    ...DefaultFontSizeAndStyle.args,
    fontSize: 12,
} as TitleProps;

export const LargeFontSize = Template.bind({});
LargeFontSize.args = {
    ...DefaultFontSizeAndStyle.args,
    fontSize: 20,
} as TitleProps;
