/// <reference types="Cypress" />

describe('8. Accessibility Testing', () => {
  beforeEach(() => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://www.npmjs.com/package/cypress-axe
  it('Use Axe to test accessibility', () => {
    cy.injectAxe()
    cy.addTask('Task 1')
    cy.checkA11y()
  })

})
