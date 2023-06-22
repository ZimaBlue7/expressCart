/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-undef */
describe('Casos de pruebas', () => {
  /* beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('mongod && npm start');
  }); */
  it('asserts', () => {
    cy.visit('/');

    // Caso 1
    cy.get(':nth-child(4) > .thumbnail > p.text-center > .btn').click();
    cy.contains('Cart').click();
    cy.get('.cart-contents-shipping > :nth-child(1)').should(
      'contain',
      'Ultra shipping :£20.00'
    );

    // Caso 2
    cy.get('.pushy-link').click();
    cy.get(':nth-child(4) > .thumbnail > p.text-center > .btn').click();
    cy.get(':nth-child(3) > .thumbnail > p.text-center > .btn').click();
    cy.contains('Cart').click();
    for (let i = 0; i < 2; i++) {
      cy.contains('+').click();
    }
    cy.get('.cart-contents-shipping > :nth-child(1)').should(
      'contain',
      'Normal shipping :£10.00'
    );

    cy.get('.pushy-link').click();

    // Caso 3
    cy.get(':nth-child(2) > .thumbnail > p.text-center > .btn').click();
    cy.contains('Cart').click();
    for (let i = 0; i < 3; i++) {
      cy.contains('+').last().click();
    }
    cy.get('.cart-contents-shipping > :nth-child(1)').should(
      'contain',
      'FREE shipping'
    );

    // Caso 4
    for (let i = 0; i < 2; i++) {
      cy.get(
        ':nth-child(1) > .p-2 > .h-200 > .col-md-9 > .row > .col-4 > .btn'
      ).click();
    }
    for (let i = 0; i < 3; i++) {
      cy.contains('+').last().click();
    }
    cy.get('.cart-contents-shipping > :nth-child(1)').should(
      'contain',
      'FREE shipping'
    );

    // Caso 5
    cy.get(
      ':nth-child(1) > .p-2 > .h-200 > .col-md-9 > .row > .col-4 > .btn'
    ).click();
    cy.get('.pushy-link').click();
    cy.get(':nth-child(1) > .thumbnail > p.text-center > .btn').click();
    cy.contains('Cart').click();
    cy.get('.cart-contents-shipping > :nth-child(1)').should(
      'contain',
      'FREE shipping'
    );
    cy.visit('/admin');
    cy.get('#email').type('juan.getial@correounivalle.edu.co');
    cy.get('#password').type('199656');
    cy.get('#loginForm').click();
    cy.contains('Products').click();
    cy.contains('yellow').click();
    cy.get('#productSubscription').should('have.value', 'plan_199656125194');
  });
});
