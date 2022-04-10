import Title from '../../components/common/Title';
import { FontStyle } from '../../enums/styles';

export default {
    title: 'Title',
};

export const Default = () => ({
    components: { Title },
    template:
        '<div style="background-color: #424242; width: fit-content; padding: 5px"><Title :font-style="fontStyle">{{ title }}</Title></div>',
    data: () => ({ title: 'Hello world!', fontStyle: FontStyle.Normal }),
});
