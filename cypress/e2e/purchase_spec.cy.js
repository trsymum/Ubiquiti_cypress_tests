import { login } from '../support/utils';

describe('Purchase Flow Tests', () => {
  it('Should complete the purchase flow in one go', () => {
    // Log in
    login('standard_user', 'secret_sauce');

    // Sort items by price (low to high) and add the last product to the cart
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item').last().find('.btn_inventory').click();

    // Sort items by name (A to Z) and add the top-right product to the cart
    cy.get('.product_sort_container').select('az');
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // Proceed to checkout
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // Fill out customer details
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Verify items in the checkout summary
    cy.get('.cart_item').should('have.length', 2); // Verify 2 items are present

    // Complete the purchase
    cy.get('[data-test="finish"]').click();

    // Verify the purchase was successful
    cy.get('.complete-header').should('contain', 'Thank you for your order');
  });
});
