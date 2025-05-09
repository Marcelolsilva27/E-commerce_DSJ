///Script de teste que deve criar um novo usuário que não esteja cadastrado
// Resultado esperado: O Sistema  deve criar o novo usuário 

describe('Tela Cadastro de Usuário', () => {


    before(() => {
        
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');
       
      });

      beforeEach(() => {
        cy.get('.flex-col > .bg-primary').click({ force: true });
        cy.clearCookies();
        cy.clearLocalStorage();
        // Recarrega a página pra garantir estado limpo, se necessário:
        cy.reload();
      });
   
    it('Validação de novo Usuário', () => {
      
      cy.get('.justify-center > .text-base').click();
      // Criar conta
      cy.wait(2000);
      cy.get('div.text-sm > a').click();
      cy.wait(2000);
      cy.get('#firstName').click().type('Marcelo');
      cy.wait(2000);
      cy.get('#lastName').click().type('Pereira');
      cy.wait(2000);
      cy.get('#cpfOrCnpj').click().type('085.112.270-16');
      cy.wait(2000);
      //data de aniversário
      cy.get('#birthDate').click({ force: true }).type('1982-07-27', { force: true });

      //Selecionar Gênero
      
      cy.get('#gender').click({ force: true }).type('Masculino', { force: true });
      
      //cy.get('#gender').first().click();
      cy.wait(2000); 
       
      cy.get('#email').click().type('marcelo.lsilva27@gmail.com', { force: true });
      cy.wait(2000);
      cy.get('#phone').click().type('47991396138');
      cy.wait(2000);
      cy.get('#landlinePhone').click().type('47991396139');
      cy.wait(2000);
      
      cy.get('#password').click().type('Marcelo@2707'); 
      cy.wait(2000);

      cy.get('#confirmPassword').click().type('Marcelo@2707'); 
      cy.wait(2000);
      // Fleg para receber notificações
      cy.get('#notifyByEmail').click();
      cy.get('#notifyByWhatsapp').click();
      cy.get('#receivePromotions').click();

      cy.get('.space-y-5 > .inline-flex').click();
      cy.wait(2000);
    })
      
    // Esse teste valida que esse usuário já possui cadastro no E-commerce
    it.skip('Validação de Usuário ja Cadastrado', () => {
            cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/'); 
            cy.get('.justify-center > .text-base').click();
            cy.wait(2000);
            cy.get('div.text-sm > a').click();
        
            cy.wait(2000);
            cy.get('#firstName').click().type('Marcelo Luiz');
            cy.wait(2000);
            cy.get('#lastName').click().type('da Silva');
            cy.wait(2000);
      
            //061.142.960-87
            cy.get('#cpfOrCnpj').click().type('037.758.669-22');
            cy.wait(2000);
           //data de aniversário
           cy.get('#birthDate').click;
           cy.wait(2000);
           cy.get('#gender').click().type('27/07/1982');

            cy.get('#phone').click().type('47991357896');
            cy.wait(2000);
            cy.get('#email').click().type('marcelo.lsilva27@gmail.com');
            cy.wait(2000);
            cy.get('#password').click().type('Marcelo@2707'); 
            cy.wait(2000);
            cy.get('#confirmPassword').click().type('Marcelo@2707'); 
            cy.wait(2000);
            cy.get('.space-y-5 > .inline-flex').click();
            cy.wait(2000);
    })
    
   

    it.skip('Validação do CPF', () => {
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/'); 
        cy.get('.justify-center > .text-base').click();
      // Criar conta
        cy.wait(2000);
        cy.get('div.text-sm > a').click();
    
    
        cy.wait(2000);
        cy.get('#firstName').click().type('Marcelo Luiz');
        cy.wait(2000);
        cy.get('#lastName').click().type('da Silva');
        cy.wait(2000);
  

        cy.get('#cpfOrCnpj').click().type('999.999.999-99');
        cy.wait(2000);
        cy.get('#phone').click().type('47991357896');
        cy.wait(2000);
        cy.get('#email').click().type('marcelo@szsolucoes.com.br');
        cy.wait(2000);
        cy.get('#password').click().type('Marcelo@123'); 
        cy.wait(2000);
        cy.get('#confirmPassword').click().type('Marcelo@123'); 
        cy.wait(2000);
        cy.get('.space-y-5 > .inline-flex').click();
        cy.wait(2000);
    })
   
 

    it.skip('Validação do Formato de E-mail', () => {
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/'); 
        cy.get('.justify-center > .text-base').click();
      // Criar conta
        cy.wait(2000);
        cy.get('div.text-sm > a').click();
    
        cy.wait(2000);
        cy.get('#firstName').click().type('Marcelo Luiz');
        cy.wait(2000);
        cy.get('#lastName').click().type('da Silva');
        cy.wait(2000);
  
      
        cy.get('#cpfOrCnpj').click().type('428.383.450-52');
        cy.wait(2000);
        cy.get('#phone').click().type('47991357896');
        cy.wait(2000);
        cy.get('#email').click().type('marcelo.silva@szsoluções.com.br');
        cy.wait(2000);
        cy.get('#password').click().type('Marcelo@123'); 
        cy.wait(2000);
        cy.get('#confirmPassword').click().type('Marcelo@123'); 
        cy.wait(2000);
        cy.get('.space-y-5 > .inline-flex').click();
        cy.wait(2000);
    
    })
    
  

    it.skip('Formato da Senha Inválido', () => {
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/'); 
        cy.get('.justify-center > .text-base').click();
      // Criar conta
        cy.wait(2000);
        cy.get('div.text-sm > a').click();
    
   
        cy.wait(2000);
        cy.get('#firstName').click().type('Marcelo Luiz');
        cy.wait(2000);
        cy.get('#lastName').click().type('da Silva');
        cy.wait(2000);
  
        //061.142.960-87
        cy.get('#cpfOrCnpj').click().type('486.543.970-63');
        cy.wait(2000);
        cy.get('#phone').click().type('47991357896');
        cy.wait(2000);
        cy.get('#email').click().type('marcelo.silva@szsolucoes.com.br');
        cy.wait(2000);
        cy.get('#password').click().type('marcelo1234'); 
        cy.wait(2000);
        cy.get('#confirmPassword').click().type('marcelo1234'); 
        cy.wait(2000);
        cy.get('.space-y-5 > .inline-flex').click();
        cy.wait(2000);
    })

})

