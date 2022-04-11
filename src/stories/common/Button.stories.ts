import CustomButton, { ButtonType, CustomButtonProps } from '@/components/common/CustomButton.vue';
import { FontStyle } from '@/enums/styles';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/CustomButton',
    component: CustomButton,
};

const Template = (args, { argTypes }) => ({
    components: { CustomButton },
    props: Object.keys(argTypes),
    template:
        '<div style="width: 100px; height: 30px"><CustomButton :font-style="$props.fontStyle" :type="$props.type" @on-click="$props.onClick">{{ $props.title }}</CustomButton></div>',
});

export const Primary = Template.bind({});
Primary.args = {
    title: 'Hello world!',
    type: ButtonType.Primary,
    fontStyle: FontStyle.Normal,
    onClick: action('clicked'),
} as CustomButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    type: ButtonType.Secondary,
} as CustomButtonProps;

export const PrimaryWithBoldFont = Template.bind({});
PrimaryWithBoldFont.args = {
    ...Primary.args,
    fontStyle: FontStyle.Bold,
} as CustomButtonProps;

export const SecondaryWithItalicFont = Template.bind({});
SecondaryWithItalicFont.args = {
    ...Secondary.args,
    fontStyle: FontStyle.Italic,
} as CustomButtonProps;