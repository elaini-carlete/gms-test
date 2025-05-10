/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
  cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
 });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `rodrigo${Date.now()}@teste.com`
    cy.preencherCadastro('Rodrigo', 'Costa', email, '2345678', 'Teste123!' )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

    it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Rodrigo20', 'Costa', 'rodrigo@teste.com', '2345678', 'Teste123!' )
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
})