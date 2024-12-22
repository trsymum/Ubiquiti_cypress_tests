import { login } from '../support/utils';
describe('Opening About page Tests', () => {
    it('Should navigate to the About page successfully', () => {
        // Log in
        login('standard_user', 'secret_sauce');
    
        // Open menu and click About
        cy.get('#react-burger-menu-btn').click();
        cy.get('#about_sidebar_link').click();
    
        // Verify redirection to the About page
        cy.get('[data-test="complete-header"]').should('include', 'saucelabs.com');
    });
    });
    