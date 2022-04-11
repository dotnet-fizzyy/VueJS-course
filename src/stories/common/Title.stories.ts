import Title from '@/components/common/Title.vue';
import { FontStyle } from '@/enums/styles';

export default {
    title: 'common/Title',
};

export const Default = () => ({
    components: { Title },
    template:
        '<div style="background-color: #555555; width: fit-content; padding: 10px"><Title :font-style="fontStyle">{{ title }}</Title></div>',
    data: () => ({ title: 'Hello world!', fontStyle: FontStyle.Normal }),
});
