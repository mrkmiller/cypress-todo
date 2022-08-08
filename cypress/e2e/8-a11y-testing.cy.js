/// <reference types="Cypress" />

describe('8. Accessibility Testing', () => {
  beforeEach(() => {
    cy.intercept('**/todos', { fixture: 'todos.json' })
    cy.visit('/')
  })

  // https://www.npmjs.com/package/cypress-axe
  it('Use Axe to test accessibility', () => {
    /**
     * 1. Add the Axe accessibility library https://github.com/component-driven/cypress-axe.
     */

    cy.injectAxe()

    /**
     * 2. Add a task and check that the page is accessible.
     */

    cy.addTask('Task 1')
    cy.checkA11y()
  })

})
