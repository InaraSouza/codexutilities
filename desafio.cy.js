describe('Calculadora de Orçamento', () => {
  it('Preenche o formulário e calcula o orçamento', () => {
    cy.visit('http://127.0.0.1:5500/index.html#home'); //precisei fazer um goLive como o cypress nao reconhce file
    
    cy.get('#home').should('contain.text', 'Bem-vindo ao Codex Travel'); 
    cy.get('#valorPassagem').type('1000'); //informando no campo valor da passagem no valor de R$:1000
    cy.get('#numeroPessoas').type('2'); //informando no campo numero de pessoas a quanitdade de 2
    cy.get('#diasHospedagem').type('5'); // dias de hospedagem
    cy.get('#dataNascimento').type('1999-02-25'); // data de nascimento
    cy.contains('Calcular').click(); 
    cy.get('#resultadoOrcamento').should('contain.text', 'Orçamento total: R$ 2000.00'); 
    // deu errado porque essa nao e a soma e multipliacao correta dos valores
  
  });

  it('Preenche o formulário de contato', () => {
    cy.visit('http://127.0.0.1:5500/index.html#home');

    cy.get('#home').should('contain.text', 'Bem-vindo ao Codex Travel'); 
    cy.get('#nome').type('Inara Souza Almeida'); //informando no campo nome o nome Inara
    cy.get('#email').type('inara250243@gmail.com'); //informando no campo email o email
    cy.get('#mensagem').type('Ola, tudo bem? Quero ter mais informações sobre o destino para Paris, pode me passar o seu contato, por favor?'); // dias de hospedagem
    cy.contains('Enviar').click(); 
    cy.on('window:alert', (text) => { 
      expect(text).to.equal('Mensagem enviada com sucesso!'); //mensagem se sucesso!! apos clicar no botao
    });
  });
});