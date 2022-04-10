import Button from '../../components/common/Button';
import { FontStyle } from '../../enums/styles';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
};

export const Default = () => ({
    components: { Button },
    template:
        '<div style="width: 100px; height: 30px"><Button :onClick="onClick" :font-style="fontWeight">{{ title }}</Button></div>',
    data: () => ({ title: 'Hello world!', fontWeight: FontStyle.Normal }),
    methods: { onClick: action('clicked') },
});
