// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Create a new Issue Task.
 *
 * @param {string} name - The title text of the new issue.
 * @param {boolean} complete - The issue status for if it is complete or not.
 */
Cypress.Commands.add('addTask', (name, complete = false) => {
  /**
   * 1. Create a custom log message.
   */

  cy.log(`Add task: ${name}`)

  /**
   * 2. Create the task and ensure it exists.
   */

  cy.get('.new-todo', {log: false})
    .type(`${name}{enter}`, {log: false})
  cy.contains('.todo-list li', name, {log: false})
    .should('exist', {log: false})

  /**
   * 3. Toggle the "Complete" status button if this task is already complete and
   *    ensure the that it is now marked as complete.
   */

  if (complete) {
    cy.contains('.todo-list li', name, {log: false})
      .find('.toggle', {log: false})
      .click({log: false})
    cy.contains('.todo-list li', name, {log: false})
      .should('have.class', 'completed')
  }
})
