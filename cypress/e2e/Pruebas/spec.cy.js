/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
describe('Test decision tables', () => {
  it('Gets, types and asserts', () => {
    // visit the principal page
    cy.visit('/');

    cy.contains('Add to cart').click();
    cy.contains('Cart').click();

    for (let i = 0; i < 2; i++) {
      cy.contains('+').click();
    }
    cy.get('.col-4 > .btn').click();

    cy.get('.pushy-link').click();

    cy.get(':nth-child(4) > .thumbnail > p.text-center > .btn').click();

    cy.contains('Cart').click();

    for (let i = 0; i < 9; i++) {
      cy.contains('+').click();
    }
    cy.contains('Checkout').click();
  });
});
