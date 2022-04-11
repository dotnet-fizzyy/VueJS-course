import Button from '@/components/common/Button.vue';
import { FontStyle } from '@/enums/styles';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/Button',
};

export const Default = () => ({
    components: { Button },
    template:
        '<div style="width: 100px; height: 30px"><Button :font-style="fontWeight" @on-click="onClick">{{ title }}</Button></div>',
    data: () => ({ title: 'Hello world!', fontWeight: FontStyle.Normal }),
    methods: { onClick: action('clicked') },
});
