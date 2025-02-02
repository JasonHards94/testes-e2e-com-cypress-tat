// cypress/e2e/login.cy.js

describe('Login', () => {
  beforeEach(() => {
    // Custom command will be used here
    cy.guiLogin()
  })

  it('successfully logs in', () => {
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})