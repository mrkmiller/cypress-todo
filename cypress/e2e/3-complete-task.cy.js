/// <reference types="Cypress" />

describe('3. Complete Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Complete a task', () => {
    // Setup: add two new tasks and complete one.
    cy.get('.new-todo').type('Teach Cypress{enter}')
    cy.get('.new-todo').type('Have Fun{enter}')
    cy.contains('.todo-list li', 'Teach Cypress').find('.toggle').click()

    /**
     * 1. Assert that the new "Teach Cypress" task is complete.
     */

    // cy.contains('.todo-list li', 'Teach Cypress')
    //   .should('have.class', 'completed')

    /**
     * 2. Ensure the "Active" status filter does not show completed tasks.
     */

    // cy.get('[data-active]').click()
    // cy.get('.todo-list')
    //   .should('contain', 'Have Fun')
    //   .should('not.contain', 'Teach Cypress')

    /**
     * 3. Ensure the "Completed" status filter does not show active tasks.
     */

    // cy.get('[data-completed]').click()
    // cy.get('.todo-list')
    //   .should('contain', 'Teach Cypress')
    //   .should('not.contain', 'Have Fun')

    /**
     * 4. Clear all completed tasks.
     */

    // cy.get('[data-all]').click()
    // cy.get('.clear-completed')
    //   .click()
    // cy.get('.todo-list').should('not.contain', 'Teach Cypress')
  })

})
