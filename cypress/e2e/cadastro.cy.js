// ajuda a escrever o código de forma mais rápida
/// <reference types="cypress"/>

describe('US-0012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
        cy.screenshot()
    });

  // Campos preenchidos
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `elaini${Date.now()}@teste.com`
    cy.preencherCadastro('Elaini', 'Silva', email, '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  //Campos não preenchidos
  // ONLY - é apenas para executar esse teste e igorar os outros testes
  it('Deve validar mensagem de erro com envio dos campos em branco', () => {
    cy.preencherCadastro('', '', '', '', '')
    cy.get('#signup-response').should('contain', 'Preencha os campos obrigatórios.')
  });

  //Tetes de validação
  it('Deve validar mensagem de erro com campo nome inválido', () => {
    cy.preencherCadastro('Elaini21', 'Silva', 'elaini@teste23.com', '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços.')
  });

  it('Deve validar mensagem de erro com campo sobrenome inválido', () => {
    cy.preencherCadastro('Elaini', 'Silva456', 'elaini@teste23.com', '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços.')
  });

  it('Deve validar mensagem de erro com campo e-mail inválido', () => {
    cy.preencherCadastro('Elaini', 'Silva', 'elaini.com', '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', '"E-mail deve ser um email válido.')
  });

  it('Deve validar mensagem de erro com campo telefone inválido', () => {
    cy.preencherCadastro('Elaini', 'Silva', 'elaini@teste23.com', 'wnfnrnfi', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números.')
  });

  it('Deve validar mensagem de erro com campo senha inválido', () => {
    cy.preencherCadastro('Elaini', 'Silva', 'elaini@teste23.com', '23999119955', 'abelha1')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial.')
  });

  //testes de campo em branco
  it('Deve validar mensagem de erro com campo nome em branco', () => {
    cy.preencherCadastro('', 'Silva', 'elaini@teste23.com', '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Preencha os campos obrigatórios.')
  });

  it('Deve validar mensagem de erro com campo sobrenome em branco', () => {
    cy.preencherCadastro('Elaini', '', 'elaini@teste23.com', '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Preencha os campos obrigatórios.')
  });

  it('Deve validar mensagem de erro com campo e-mail em branco', () => {
    cy.preencherCadastro('Elaini', 'Silva', '', '11999999999', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Preencha os campos obrigatórios.')
  });

  //telefone não é obrigatório
  it('Deve validar mensagem de sucesso mesmo com campo telefone em branco', () => {
    cy.preencherCadastro('Elaini', 'Silva', 'elaini@teste23.com', '', '1234Eabelha@56')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com campo senha em branco', () => {
    cy.preencherCadastro('Elaini', 'Silva', 'elaini@teste23.com', '11999999999', '')
    cy.get('#signup-response').should('contain', 'Preencha os campos obrigatórios.')
  });
})