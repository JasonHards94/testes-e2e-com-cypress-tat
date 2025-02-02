// cypress/e2e/signup.cy.js

import { faker } from '@faker-js/faker/locale/en'

describe('Sign up', () => {
  it('successfully signs up using confirmation code sent via email', () => {
    const emailAddress = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
    const password = Cypress.env('USER_PASSWORD')

    cy.intercept('GET', '**/notes').as('getNotes')
    cy.signUp(emailAddress, password)
    cy.get('#confirmationCode').should('be.visible')

    cy.submitConfirmationCode(emailAddress)
    cy.wait('@getNotes')
    cy.contains('h1', 'Your Notes').should('be.visible')
  })
})
