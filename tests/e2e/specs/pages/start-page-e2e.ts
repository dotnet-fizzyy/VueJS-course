describe('Start page E2E Tests', () => {
    const baseAqaDataAttributePrefix = 'data-aqa';
    const timeout = 1000;

    const searchFilmName = 'The Mummy';

    it.skip('Should visit the app root url and find all main sections', () => {
        // visit base url and verify all main sections are displayed
        cy.visit('/')
            .get(`[${baseAqaDataAttributePrefix}-start-header]`)
            .get(`[${baseAqaDataAttributePrefix}-start-body]`)
            .get(`[${baseAqaDataAttributePrefix}-start-footer]`);
    });

    it.skip('Should visit non-existing app url and display not found page', () => {
        // visit random url and verify not-page-found is displayed
        cy.visit('/test-url').get(`[${baseAqaDataAttributePrefix}-not-found-page]`);
    });

    it.skip('Should visit the app root url, select preview item, view its full description and go back to search', () => {
        // visit base url
        cy.visit('/');

        // verify search panel is displayed
        cy.get(`[${baseAqaDataAttributePrefix}-search-panel]`);
        cy.wait(timeout);

        // click first available item in previews
        cy.get(`[${baseAqaDataAttributePrefix}-preview]`).first().click();
        cy.wait(timeout);

        // verify full description for item is available
        cy.get(`[${baseAqaDataAttributePrefix}-full-description]`);
        cy.wait(timeout);

        // find item name on preview and full description, verify their equality
        let previewNameText;
        let fullDescriptionNameText;

        cy.get(`[${baseAqaDataAttributePrefix}-film-preview-name]`).should($identifier => {
            previewNameText = $identifier.text();
        });
        cy.get(`[${baseAqaDataAttributePrefix}-full-desc-name]`).should($identifier => {
            fullDescriptionNameText = $identifier.text();
        });

        // @ts-ignore to.equal belongs to Cypress for comparison
        expect(previewNameText).to.equal(fullDescriptionNameText);

        // verify rest important item full description items are displayed
        cy.get(`[${baseAqaDataAttributePrefix}-full-poster]`);
        cy.get(`[${baseAqaDataAttributePrefix}-full-rating]`);
        cy.get(`[${baseAqaDataAttributePrefix}-full-short-desc]`);
        cy.get(`[${baseAqaDataAttributePrefix}-full-full-desc]`);

        // go back to search panel (close full description)
        cy.get(`[${baseAqaDataAttributePrefix}-back-to-search]`).click();
        cy.wait(timeout);

        // verify search panel is displayed again
        cy.get(`[${baseAqaDataAttributePrefix}-search-panel]`);
    });

    // todo: refactor
    it.skip('Should visit app url, change search criteria, search for results', () => {
        // visit base url
        cy.visit('/');

        // verify search panel is displayed
        cy.get(`[${baseAqaDataAttributePrefix}-search-panel]`);
        cy.wait(timeout);

        // set search criteria
        cy.get(`[${baseAqaDataAttributePrefix}-app-input]`).type(searchFilmName);
        cy.get(`[${baseAqaDataAttributePrefix}-button-name="rating"]`).click();
        cy.get(`[${baseAqaDataAttributePrefix}-primary-button]`).click();

        cy.wait(timeout);

        // verify all available results names have the same search value
        cy.get(`[${baseAqaDataAttributePrefix}-film-preview-name]`).each($el => {
            $el.text().includes(searchFilmName);
        });
    });

    // todo: refactor
    it('Should visit app url with search criteria in query params, parse them and search for results', () => {
        const encodedSearchFilmName = encodeURIComponent(searchFilmName);
        const searchByOption = 'title';
        const sortByOption = 'rating';

        // visit base url
        cy.visit(`/?searchBy=${searchByOption}&sortBy=${sortByOption}&term=${encodedSearchFilmName}`);

        cy.wait(timeout);

        // search for components
        cy.get(`[${baseAqaDataAttributePrefix}-app-input]`).should($el => {
            // @ts-ignore to.equal belongs to Cypress for comparison
            expect($el.val()).to.equal(searchFilmName);
        });

        cy.get(
            `[${baseAqaDataAttributePrefix}-button-name="${searchByOption}"][${baseAqaDataAttributePrefix}-is-button-selected]`
        );
        cy.get(
            `[${baseAqaDataAttributePrefix}-button-name="${sortByOption}"][${baseAqaDataAttributePrefix}-is-button-selected]`
        );
    });
});
