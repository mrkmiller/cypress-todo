/// <reference types="Cypress" />

describe('4. Fixture for default tasks', () => {
  // https://docs.cypress.io/api/commands/intercept
  it('Intercept an API call and fake the response', () => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')

    // Remove the task.
    cy.contains('Fixture Task')
  })

})
