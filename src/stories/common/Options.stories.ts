import Options, { OptionGroup, OptionsProps } from '@/components/common/Options.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/Options',
    component: Options,
};

const Template = (args, { argTypes }) => ({
    components: { Options },
    props: Object.keys(argTypes),
    template:
        '<div style="max-width: 400px; width: 100%; background-color: #555555; padding: 10px"><Options :label="label" :options="options" :selected-option="selectedOption" @on-select-option="onSelectOption" /></div>',
});

export const OptionsGroupWithLabel = Template.bind({});
OptionsGroupWithLabel.args = {
    label: 'Test Label',
    options: [
        { label: 'First', name: 'first' },
        { label: 'Second', name: 'second' },
    ] as OptionGroup[],
    selectedOption: 'first',
    onSelectOption: action('selected-option'),
} as OptionsProps;

export const OptionsGroupWithoutLabel = Template.bind({});
OptionsGroupWithoutLabel.args = {
    ...OptionsGroupWithLabel.args,
    label: '',
} as OptionsProps;
