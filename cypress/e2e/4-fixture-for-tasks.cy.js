/// <reference types="Cypress" />

describe('4. Fixture for default tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://docs.cypress.io/api/commands/intercept
  it('Intercept an API call and fake the response', () => {
    cy.get('.new-todo').type('Teach Cypress{enter}')

    // Remove the task.
    cy.contains('.todo-list li', 'Teach Cypress')
      .find('.destroy')
      .click({ force: true })
  })

})
