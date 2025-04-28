// ajuda a escrever o código de forma mais rápida
/// <reference types="cypress" />

describe('US-0012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.0.111:8080/')
    cy.get('#signup-firstname').type('Elaini')
    cy.get('#signup-lastname').type('Cacau')
    cy.get('#signup-email').type('elainiCacau2@test.com')
    cy.get('#signup-phone').type('11999999999')
    cy.get('#signup-password').type('Cacauzinho@1290')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})