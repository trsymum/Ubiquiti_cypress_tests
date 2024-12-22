import { login } from '../support/utils';

describe('Cart Icon Update Tests', () => {
  beforeEach(() => {
    login('standard_user', 'secret_sauce');
  });

  it('Should update the cart icon when items are added', () => {
    // Add the first item to the cart
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // Verify the cart icon updates to show 1 item
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');

    // Add another item to the cart
    cy.get('.inventory_item').eq(1).find('.btn_inventory').click();

    // Verify the cart icon updates to show 2 items
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '2');
  });

  it('Should decrease the cart icon count when items are removed', () => {
    // Remove an item from the cart
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // Verify the cart icon updates to show 1 item
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');

  });
});
