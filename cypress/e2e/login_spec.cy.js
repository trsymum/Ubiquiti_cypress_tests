describe('Login Tests', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl); // Go to site before each test
  });

  it('Locked out user should not be able to log in', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.error-message-container').should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Standard user should be able to log in', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html'); // Verify successful login
  });
});
