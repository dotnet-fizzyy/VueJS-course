describe('Start page E2E Tests', () => {
    const baseAqaDataAttributePrefix = 'data-aqa';
    const timeout = 1000;

    it('Should visit the app root url and find all main sections', () => {
        // visit base url and verify all main sections are displayed
        cy.visit('/')
            .get(`[${baseAqaDataAttributePrefix}-start-header]`)
            .get(`[${baseAqaDataAttributePrefix}-start-body]`)
            .get(`[${baseAqaDataAttributePrefix}-start-footer]`);
    });

    it('Should visit the app root url, select preview item, view its full description and go back to search', () => {
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
});
