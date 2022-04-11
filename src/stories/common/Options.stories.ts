import Options, { OptionGroup } from '@/components/common/Options.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/Options',
};

export const Default = () => ({
    components: { Options },
    template:
        '<div style="max-width: 400px; width: 100%; background-color: #555555; padding: 10px"><Options :label="label" :options="options" :selected-option="selectedOption" :on-select-option="onSelectOption" /></div>',
    data: () => ({
        label: 'Test Label',
        options: [
            { label: 'First', name: 'first' },
            { label: 'Second', name: 'second' },
        ] as OptionGroup[],
        selectedOption: 'first',
    }),
    methods: {
        onSelectOption: action('selected-option'),
    },
});
