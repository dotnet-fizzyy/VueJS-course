import FilmDescriptionItem from '@/components/films/FilmDescriptionItem.vue';
import Vue from 'vue';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('FilmDescriptionItem.vue Tests', () => {
    const createComponent = (propsData): Wrapper<Vue> =>
        shallowMount(FilmDescriptionItem, {
            propsData,
        });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent({
            keyLabel: 'Key Label',
            additionalLabel: 'Addit Label',
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });
});
