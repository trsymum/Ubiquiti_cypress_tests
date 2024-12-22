import { login } from '../support/utils';

describe('Logout Tests', () => {
  it('Should log out successfully', () => {
    // Log in
    login('standard_user', 'secret_sauce');

    // Open menu and log out
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();

    // Verify redirection to the login page
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});
