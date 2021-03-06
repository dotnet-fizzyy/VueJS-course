import ButtonGroup, { ButtonGroupProps } from '@/components/common/ButtonGroup.vue';
import { ButtonGroupOption } from '@/types/button';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/ButtonGroup',
    component: ButtonGroup,
};

const Template = (args, { argTypes }) => ({
    components: { ButtonGroup },
    props: Object.keys(argTypes),
    template:
        '<div style="max-width: 400px; width: 100%; background-color: #555555; padding: 10px"><ButtonGroup v-bind="$props" @select-option="selectOption" /></div>',
});

export const OptionsGroupWithLabel = Template.bind({});
OptionsGroupWithLabel.args = {
    label: 'Test Label',
    options: [
        { label: 'First', name: 'first' },
        { label: 'Second', name: 'second' },
    ] as ButtonGroupOption[],
    selectedOption: 'first',
    selectOption: action('selected-option'),
} as ButtonGroupProps;

export const OptionsGroupWithoutLabel = Template.bind({});
OptionsGroupWithoutLabel.args = {
    ...OptionsGroupWithLabel.args,
    label: '',
} as ButtonGroupProps;
