import FilmFullDescription from '@/components/films/FilmFullDescription.vue';
import Vue from 'vue';
import { Wrapper, shallowMount } from '@vue/test-utils';
import { createDefaultVueInstance } from '../../setup';

const localVue = createDefaultVueInstance();

describe('FilmFullDescription.vue Tests', () => {
    const createComponent = (propsData): Wrapper<Vue> =>
        shallowMount(FilmFullDescription, {
            localVue,
            propsData,
        });

    const findFilmRating = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-full-rating]');

    const findAllFilmDescriptionItemComponents = (wrapper: Wrapper<Vue>) =>
        wrapper.findAllComponents({ name: 'film-description-item' });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent({
            name: 'Film Name',
            releaseYear: 2022,
            runtime: 120,
            rating: 4.2,
            shortDescription: 'Short Description',
            fullDescription: 'Some Long Film Description',
            posterUrl: 'posterUrl',
            posterAlt: 'posterAlt',
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should add precision to rating if it is numeral', () => {
        //Arrange
        const numeralRating = 4;

        const wrapper = createComponent({
            name: 'Film Name',
            releaseYear: 2022,
            runtime: 120,
            rating: numeralRating,
            shortDescription: 'Short Description',
            fullDescription: 'Some Long Film Description',
            posterUrl: 'posterUrl',
            posterAlt: 'posterAlt',
        });

        //Act
        const ratingWrapper = findFilmRating(wrapper);

        //Assert
        expect(ratingWrapper.element).toBeTruthy();
        expect(ratingWrapper.text()).toEqual(`${numeralRating}.0`);
    });

    it('Should round to up film runtime if it is digit', () => {
        //Arrange
        const originalRuntime = 121.4;
        const expectedRuntime = 122;

        const wrapper = createComponent({
            name: 'Film Name',
            releaseYear: 2022,
            runtime: originalRuntime,
            rating: 4.2,
            shortDescription: 'Short Description',
            fullDescription: 'Some Long Film Description',
            posterUrl: 'posterUrl',
            posterAlt: 'posterAlt',
        });

        //Act
        const filmDescriptionWrappers = findAllFilmDescriptionItemComponents(wrapper);
        const runtimeWrapper = filmDescriptionWrappers.wrappers[1];

        //Assert
        expect(runtimeWrapper.element).toBeTruthy();
        expect(runtimeWrapper.attributes('additionallabel')).toEqual('min');
        expect(runtimeWrapper.attributes('keylabel')).toEqual(expectedRuntime.toString());
    });
});
