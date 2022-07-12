/// <reference types="Cypress" />

describe('5. Stub Function', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://docs.cypress.io/api/commands/stub
  it('Stub the Confirm() dialog', () => {
    cy.get('.new-todo').type('Teach Cypress{enter}')
    cy.contains('.todo-list', 'Teach Cypress').should('exist')

    // 1. Start to remove a task but then cancel it.

    // Stub the Window.confirm() function and cancel it to retain the task.
    cy.window().then(win => {
      // Create a '@confirm' alias so we can use the stub later.
      cy.stub(win, 'confirm').returns(false).as('confirm')
    })
    cy.contains('.todo-list li', 'Teach Cypress')
      .find('.destroy')
      .click({ force: true }) // Force the click even thought the button is hidden.
    cy.contains('Teach Cypress').should('exist')

    // 2. Remove the task completely.

    // Remove the stub (by default cypress will click "ok" on the dialog).
    cy.get('@confirm').invoke('restore')
    cy.contains('.todo-list li', 'Teach Cypress')
      .find('.destroy')
      .click({ force: true })
    cy.contains('Teach Cypress').should('not.exist')
  })

})
