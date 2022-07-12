/// <reference types="Cypress" />

describe('7. Custom command', () => {
  beforeEach(() => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://docs.cypress.io/api/cypress-api/custom-commands
  it('Use a custom command to add new tasks', () => {
    // Use a custom cy.addTask() command for often repeated code.
    cy.addTask('Task 1')
    cy.addTask('Task 2', true)
    cy.addTask('Task 3')
  })

})
