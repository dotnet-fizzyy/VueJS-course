import Title from '@/components/common/AppTitle.vue';
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('AppTitle.vue Tests', () => {
    const createComponent = (propsData, slots): Wrapper<Vue> =>
        shallowMount(Title, {
            propsData,
            slots,
        });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent(
            {
                fontSize: 20,
                fontStyle: FontStyle.Italic,
            },
            {
                default: 'Hello world!',
            }
        );

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should contain correct text message', () => {
        //Arrange
        const message = 'Some message';

        const wrapper = createComponent(
            {
                fontSize: 20,
                fontStyle: FontStyle.Italic,
            },
            {
                default: message,
            }
        );

        //Act & Assert
        expect(wrapper.text()).toEqual(message);
    });
});
