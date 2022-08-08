/// <reference types="Cypress" />

describe('2. Add Items', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add a new item', () => {
    /**
     * 1. Add a new task and ensure it exists in the list of todos.
     */

    cy.get('.new-todo')
      .type('Teach Cypress{enter}') // Use {enter} to press the "enter" key.
    cy.contains('.todo-list', 'Teach Cypress')

    /**
     * 2. Edit the message by double-clicking the task's text.
     */

    cy.contains('.todo-list li', 'Teach Cypress')
      .dblclick()
      .type(' Altered{enter}')

    /**
     * 3. Complete the "Teach Cypress" task by clicking its toggle button.
     */

    cy.contains('.todo-list li', 'Teach Cypress Altered')
      .find('.toggle')
      .click()
  })

})
