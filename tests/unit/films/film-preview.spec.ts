import FilmPreview from '@/components/films/FilmPreview.vue';
import Vue from 'vue';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('FilmPreview.vue Tests', () => {
    const createComponent = (propsData): Wrapper<Vue> =>
        shallowMount(FilmPreview, {
            propsData,
        });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent({
            id: 'id',
            posterUrl: 'poster_url',
            posterAlt: 'poster_alt',
            name: 'Film Name',
            shortDescription: 'Short Description',
            releaseYear: 2022,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should emit event on click', () => {
        //Arrange
        const id = 'filmId';

        const wrapper = createComponent({
            id,
            posterUrl: 'poster_url',
            posterAlt: 'poster_alt',
            name: 'Film Name',
            shortDescription: 'Short Description',
            releaseYear: 2022,
        });

        //Act
        wrapper.trigger('click');

        //Arrange
        expect(wrapper.emitted('select')).toBeTruthy();
        expect(wrapper.emitted('select')[0][0]).toEqual(id);
    });
});
