/// <reference types="Cypress" />

// Group multiple tests in this file with "describe()".
describe('1. My First Test', () => {

  // Run before every test in this group.
  beforeEach(() => {
    cy.visit('/')
  })

  // Create a single test with "it()".
  it('The TodoMVC loads', () => {
    cy.contains('todo')
  })

})
