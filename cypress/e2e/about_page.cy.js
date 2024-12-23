import { login } from '../support/utils';

describe('About Page Tests', () => {
  it('Should navigate to the About page successfully', () => {
    // Log in
    login('standard_user', 'secret_sauce');

    // Open menu and click About
    cy.get('#react-burger-menu-btn').click();
    cy.get('#about_sidebar_link').click();

    // Handle cross-origin navigation and assertions
    cy.origin('https://saucelabs.com', () => {
      // Verify About page content
      cy.contains('The world relies on your code.').should('be.visible');
    });
  });
});
