/// <reference types="Cypress" />

describe('3. Complete Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Complete a task', () => {
    // First, add new tasks and complete one.
    cy.get('.new-todo').type('Teach Cypress{enter}')
    cy.get('.new-todo').type('Have Fun{enter}')
    cy.contains('.todo-list li', 'Teach Cypress').find('.toggle').click()

    // Assert that the task is complete.
    cy.contains('.todo-list li', 'Teach Cypress')
      .should('have.class', 'completed')

    // Check active status filter.
    cy.get('[data-active]').click()
    cy.get('.todo-list')
      .should('contain', 'Have Fun')
      .should('not.contain', 'Teach Cypress')

    // Check completed status filter.
    cy.get('[data-completed]').click()
    cy.get('.todo-list')
      .should('contain', 'Teach Cypress')
      .should('not.contain', 'Have Fun')

    // Clear all completed tasks.
    cy.get('[data-all]').click()
    cy.get('.clear-completed')
      .click()
    cy.get('.todo-list').should('not.contain', 'Teach Cypress')
  })

})
