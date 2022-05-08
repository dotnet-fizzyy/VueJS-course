describe('Start page E2E Tests', () => {
    /**
     *  Constants
     */
    const searchFilmName = 'The Mummy';
    const timeout = 1000;

    const baseAqaDataAttributePrefix = 'data-aqa';
    const startPageAqaDataAttributePrefix = `${baseAqaDataAttributePrefix}-start`;
    const filmFullDescAqaDataAttributePrefix = `${baseAqaDataAttributePrefix}-full`;

    /**
     *  Helpers
     */
    const delay = () => cy.wait(timeout);

    const getStartPageHeader = () => cy.get(`[${startPageAqaDataAttributePrefix}-header]`);

    const getStartPageBody = () => cy.get(`[${startPageAqaDataAttributePrefix}-body]`);

    const getStartPageFooter = () => cy.get(`[${startPageAqaDataAttributePrefix}-footer]`);

    const getNotFoundPage = () => cy.get(`[${baseAqaDataAttributePrefix}-not-found-page]`);

    const getSearchPanel = () => cy.get(`[${baseAqaDataAttributePrefix}-search-panel]`);

    const getSearchInput = () => cy.get(`[${baseAqaDataAttributePrefix}-app-input]`);

    const getFilmPreview = () => cy.get(`[${baseAqaDataAttributePrefix}-preview]`);

    const getFilmPreviewName = () => cy.get(`[${baseAqaDataAttributePrefix}-film-preview-name]`);

    const getFilmFullDescription = () => cy.get(`[${filmFullDescAqaDataAttributePrefix}-description]`);

    const getFilmFullDescriptionName = () => cy.get(`[${filmFullDescAqaDataAttributePrefix}-desc-name]`);

    const getFilmFullDescriptionPoster = () => cy.get(`[${filmFullDescAqaDataAttributePrefix}-poster]`);

    const getFilmFullDescriptionRating = () => cy.get(`[${filmFullDescAqaDataAttributePrefix}-rating]`);

    const getFilmFullDescriptionShortOverview = () => cy.get(`[${filmFullDescAqaDataAttributePrefix}-short-desc]`);

    const getFilmFullDescriptionFullOverview = () => cy.get(`[${filmFullDescAqaDataAttributePrefix}-full-desc]`);

    const getPrimaryButton = () => cy.get(`[${baseAqaDataAttributePrefix}-primary-button]`);

    const getBackToSearchButton = () => cy.get(`[${baseAqaDataAttributePrefix}-back-to-search]`);

    const getButtonGroupOption = (value, includeSelectedOptionAttribute) => {
        let buttonNameAttribute = `[${baseAqaDataAttributePrefix}-button-name="${value}"]`;

        if (includeSelectedOptionAttribute) {
            buttonNameAttribute += `[${baseAqaDataAttributePrefix}-is-button-selected]`;
        }

        return cy.get(buttonNameAttribute);
    };

    const visitRandomUrl = () => cy.visit('/test-url');

    const visitBaseUrl = (params = null) => {
        let url = '/';

        if (params) {
            url += params;
        }

        return cy.visit(url);
    };

    /**
     *  Tests
     */
    it('Should visit the app root url and find all main sections', () => {
        // visit base url
        visitBaseUrl();

        // verify all main sections are displayed
        getStartPageHeader();
        getStartPageBody();
        getStartPageFooter();
    });

    it('Should visit non-existing app url and display not found page', () => {
        // visit random url
        visitRandomUrl();

        // verify not-page-found is displayed
        getNotFoundPage();
    });

    // todo: mock network requests
    it('Should visit the app root url, select preview item, view its full description and go back to search', () => {
        // visit base url
        visitBaseUrl();

        // verify search panel is displayed
        getSearchPanel();
        delay();

        // click first available item in previews
        getFilmPreview().first().click();
        delay();

        // verify full description for item is available
        getFilmFullDescription();
        delay();

        // find item name on preview and full description, verify their equality
        let previewNameText;
        let fullDescriptionNameText;

        getFilmPreviewName().should($identifier => {
            previewNameText = $identifier.text();
        });
        getFilmFullDescriptionName().should($identifier => {
            fullDescriptionNameText = $identifier.text();
        });

        // @ts-ignore to.equal belongs to Cypress for comparison
        expect(previewNameText).to.equal(fullDescriptionNameText);

        // verify rest important item full description items are displayed
        getFilmFullDescriptionPoster();
        getFilmFullDescriptionRating();
        getFilmFullDescriptionShortOverview();
        getFilmFullDescriptionFullOverview();

        // go back to search panel (close full description)
        getBackToSearchButton().click();
        delay();

        // verify search panel is displayed again
        getSearchPanel();
    });

    // todo: mock network requests
    it('Should visit app url, change search criteria, search for results', () => {
        const includeSelectedOption = false;

        // visit base url
        visitBaseUrl();

        // verify search panel is displayed
        getSearchPanel();
        delay();

        // set search criteria
        getSearchInput().type(searchFilmName);
        getButtonGroupOption('rating', includeSelectedOption).click();
        getPrimaryButton().click();

        delay();

        // verify all available results names have the same search value
        getFilmPreviewName().each($el => {
            $el.text().includes(searchFilmName);
        });
    });

    it('Should visit app url with search criteria in query params, parse them and search for results', () => {
        const encodedSearchFilmName = encodeURIComponent(searchFilmName);
        const searchByOption = 'title';
        const sortByOption = 'rating';
        const includeSelectedOption = true;

        // visit base url
        visitBaseUrl(`?searchBy=${searchByOption}&sortBy=${sortByOption}&term=${encodedSearchFilmName}`);

        delay();

        // verify search parameters are set correctly in search header
        getSearchInput().should($el => {
            // @ts-ignore to.equal belongs to Cypress for comparison
            expect($el.val()).to.equal(searchFilmName);
        });
        getButtonGroupOption(searchByOption, includeSelectedOption);
        getButtonGroupOption(sortByOption, includeSelectedOption);
    });
});
