export const login = (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html'); // Ensure login was successful
  };
  