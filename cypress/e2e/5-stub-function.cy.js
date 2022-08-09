/// <reference types="Cypress" />

describe('5. Stub Function', () => {
  beforeEach(() => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://docs.cypress.io/api/commands/stub
  it('Stub the Confirm() dialog', () => {
    // Setup: add a new task and ensure it now exists.
    cy.get('.new-todo').type('Teach Cypress{enter}')
    cy.contains('.todo-list', 'Teach Cypress').should('exist')

    /**
     * 1. Stub the Window.confirm() function and cancel it to retain the tasks.
     */

    // cy.window().then(win => {
    //   // Create a '@confirm' alias so we can use the stub later.
    //   cy.stub(win, 'confirm').returns(false).as('confirm')
    // })

    /**
     * 2. Start to remove a task but then cancel it.
     */

    // cy.contains('.todo-list li', 'Teach Cypress')
    //   .find('.destroy')
    //   .click({ force: true }) // Force the click even thought the button is hidden.
    // cy.contains('Teach Cypress').should('exist')

    /**
     * 3. Remove the stub (by default cypress will click "ok" on the dialog).
     */

    // // Use the "confirm" alias we created in step 1.
    // cy.get('@confirm').invoke('restore')

    /**
     * 4. Remove the task completely.
     */

    // cy.contains('.todo-list li', 'Teach Cypress')
    //   .find('.destroy')
    //   .click({ force: true })
    // cy.contains('Teach Cypress').should('not.exist')
  })

})
