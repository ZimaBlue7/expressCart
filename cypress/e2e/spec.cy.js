/* describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:1111/");
  });
}); */

/* describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("http://localhost:1111/");

    cy.contains("type");
  });
}); */

/* describe("Test decision tables", () => {
  it('clicks the Button "Add to cart"', () => {
    cy.visit("http://localhost:1111/");

    cy.contains("Add to cart").click();
  });
}); */

/* describe('Test decision tables', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:1111/')

    cy.contains('Cart').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
}) */
/* 
it("Does not do much!", () => {
  expect("Ultra shipping").to.equal("Ultra shipping");
}); */

/* describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("http://localhost:1111/");


    expect("Home").to.equal("Home");
  });
});
 */

describe("Test decision tables", () => {
  it("Gets, types and asserts", () => {
    cy.visit("/");

    cy.contains("Add to cart").click();
    cy.contains("Cart").click();

    cy.contains("Ultra shipping").should("not.equal", "Jane");

    cy.contains("+").click();
    cy.contains("+").click();
    cy.get("[data-cartid=646034e252af523f68793bf0]").click();

    // cy.contains("Checkout").click();
  });
});
