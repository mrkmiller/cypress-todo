/// <reference types="Cypress" />

describe('2. Add Items', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add a new item', () => {
    cy.get('.new-todo')
      // .type('Teach Cypress')
      .type('Teach Cypress{enter}') // Use {enter} to press the "enter" key.
      .type('A second item{enter}')
    cy.contains('.todo-list', 'Teach Cypress')

    // Edit the message.
    // cy.contains('.todo-list', 'Teach Cypress') // The selector is too generic for future chaining.
    cy.contains('.todo-list li', 'Teach Cypress')
      .dblclick()
      .type(' Altered{enter}')

    // Complete the 'Teach Cypress' task.
    // cy.get('.toggle').click() // The selector is too generic and finds multiple toggles.
    cy.contains('.todo-list li', 'Teach Cypress Altered')
      .find('.toggle')
      .click()
  })

})
