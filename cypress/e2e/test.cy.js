
describe('Scenarios where authentication is a pre-condition', () => {
// Código já existente ...

  it.only('logs out', () => {
    cy.visit('/')
    cy.wait('@getNotes')

    cy.contains('.nav a', 'Logout').click()

    cy.get('#email').should('be.visible')
  })
})