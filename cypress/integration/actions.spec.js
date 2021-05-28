/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.wait(3000)
    cy.get('[data-cy=load-more]').click()
    cy.wait(3000)
    // cy.get('[data-cy=load-more]').click()

    cy.get('.card').last().click()

  })

})
