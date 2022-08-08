/// <reference types="Cypress" />

describe('4. Fixture for default tasks', () => {
  beforeEach(() => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://docs.cypress.io/api/commands/intercept
  it('Intercept an API call and fake the response', () => {
    /**
     * 1. Tasks should show fixture data.
     */

    cy.contains('Fixture 1')
    cy.contains('Fixture 2')
    cy.contains('Fixture 3')
  })

})
