import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from '../components/MyButton.vue';

export default {
    title: 'Button',
};

export const WithText = () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
});

export const WithJSX = () => ({
    render() {
        return <MyButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</MyButton>;
    },
});

export const WithSomeEmoji = () => ({
    components: { MyButton },
    template: '<my-button>😀 😎 👍 💯</my-button>',
});
