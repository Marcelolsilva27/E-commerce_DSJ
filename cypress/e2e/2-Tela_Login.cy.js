// Objetivo: Entrar na tela de longin de usuário e digitar a senha corretamente fazendo o login na aplicação
// Resultado Esperado: O Teste automatizado deverá validar se a senha esta correta.

describe('Tela de Login', () => {describe('Teste acessar o Site', () => {

    before(() => {
        
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');
      });

      beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        // Recarrega a página pra garantir estado limpo, se necessário:
        cy.reload();
      });


    it('Login com sucesso', () => {
      
      cy.get('.justify-center > .text-base').click();
  
      // Criar conta
      cy.wait(2000);
      
      cy.get('#email').click().type('marcelo.silva@szsolucoes.com.br');

      cy.get('#password').click().type('Marcelo@123');

      cy.get('.bg-orange-500').click();
      cy.wait(2000);

      
    });

// Objetivo: Entrar na tela de longin de usuário e digitar a senha incorretamente
// Resultado Esperado: O Teste automatizado deverá validar que a senha digitada está incorreta
    it('Login com Erro', () => {
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');
        cy.wait(2000);
        cy.get('.justify-center > .text-base').click();
    
        // Criar conta
        cy.wait(2000);
        
        cy.get('#email').click().type('marcelo.silva@sz.com.br');
  
        //Passar a senha errada para o cenário estoura erro em tela
        cy.get('#password').click().type('Marcelo@12345');
  
        cy.get('.bg-orange-500').click();
        cy.wait(2000);
        
      });



});
});