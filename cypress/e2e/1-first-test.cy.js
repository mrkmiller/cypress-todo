/// <reference types="Cypress" />

/**
 * 1. Group multiple tests in this file with "describe()".
 */

describe('1. My First Test', () => {

  /**
   * 2. Run before every test in this group.
   */

  beforeEach(() => {
    cy.visit('/')
  })

  /**
   * 3. Create a single test with "it()".
   */

  it('The TodoMVC loads', () => {
    cy.contains('todo')
  })

})
