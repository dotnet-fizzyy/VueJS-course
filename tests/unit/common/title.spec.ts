import Title from '@/components/common/AppTitle.vue';
import { FontStyle } from '@/enums/styles';
import { shallowMount } from '@vue/test-utils';

describe('AppTitle.vue Tests', () => {
    test('Should render', () => {
        //Arrange
        const wrapper = shallowMount(Title, {
            slots: {
                default: 'Hello world!',
            },
            propsData: {
                fontSize: 20,
                fontStyle: FontStyle.Italic,
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should contain correct text message', () => {
        //Arrange
        const message = 'Some message';

        const wrapper = shallowMount(Title, {
            slots: {
                default: message,
            },
            propsData: {
                fontSize: 20,
                fontStyle: FontStyle.Italic,
            },
        });

        //Act & Assert
        expect(wrapper.text()).toEqual(message);
    });
});
