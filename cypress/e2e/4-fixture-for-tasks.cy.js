/// <reference types="Cypress" />

describe('4. Fixture for default tasks', () => {
  beforeEach(() => {
    /**
     * 1. Intercept the Ajax Fetch and replace with fixture data.
     */

    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://docs.cypress.io/api/commands/intercept
  it('Intercept an API call and fake the response', () => {
    /**
     * 2. Tasks should show fixture data instead of remote API data.
     */

    cy.contains('Fixture 1')
    cy.contains('Fixture 2')
    cy.contains('Fixture 3')
  })

})
