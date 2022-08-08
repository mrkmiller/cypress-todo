/// <reference types="Cypress" />

describe('6. Viewport Resizing', () => {
  beforeEach(() => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://docs.cypress.io/api/commands/viewport
  it('Check mobile vs desktop displays', () => {
    /**
     * 1. Set a Desktop with specific width and height.
     */

    cy.viewport(1366, 768)
    cy.contains('I only appear in Mobile').should('not.be.visible')

    /**
     * 2. Set a Mobile size with a preset name.
     */

    cy.viewport('iphone-8')
    cy.contains('I only appear in Mobile').should('be.visible')
  })

})
