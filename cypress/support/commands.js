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

Cypress.Commands.add('addTask', (name, complete = false) => {
  cy.log(`Add task: ${name}`)
  cy.get('.new-todo', {log: false})
    .type(`${name}{enter}`, {log: false})
  cy.contains('.todo-list li', name, {log: false})
    .should('exist', {log: false})

  if (complete) {
    cy.contains('.todo-list li', name, {log: false})
      .find('.toggle', {log: false})
      .click({log: false})
    cy.contains('.todo-list li', name, {log: false})
      .should('have.class', 'completed')
  }
})
