//Script de teste fazendo a aplicação navegar pelas Categorias

describe('Inclusão Itens na Sacola', () => {


     before(() => {
        
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');
      });

      

       
    it('Itens na Sacola sem Login', () => {
    
  
     //Conferindo a sacola Vazia
     cy.get(':nth-child(2) > .justify-center > .relative > .remixicon').click();
     cy.wait(2000);
     // Sai do modal da sacola
     cy.get('body').type('{esc}');
     //Adicionar 4 produtos na sacola entrando nas categorias
     cy.get('[href="/produtos/tortas"]').click();
     //adicionado nega maluca
     cy.get(':nth-child(2) > .rounded-lg > .pt-0 > .inline-flex').click();
     cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
     cy.wait(2000);
     cy.get('[href="/produtos/salgadinhos"]').click({ force: true });
     cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
     cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
     cy.wait(2000);
     cy.get('[href="/produtos/empadoes"]').click({ force: true });
     cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
     cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
     cy.wait(2000);
     cy.get('[href="/produtos/bebidas"]').click();
     cy.get(':nth-child(2) > .rounded-lg > .pt-0 > .inline-flex > p').click();
     cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
     cy.wait(2000);
     cy.get('[href="/produtos/docinhos"]').click();
     cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
     cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
     cy.wait(2000);
     cy.get('.h-14').click({ force: true });
    
     cy.get(':nth-child(2) > .justify-center > .relative > .remixicon > path').click({ force: true });
    
     //cy.get('.gap-2 > .relative > .border').click();
     cy.wait(5000);

    

     //clica para fechar a sacola

     cy.contains('Fechar Sacola').click({ force: true });

     //timer de 5 segundos antes de limpar a sacola
     cy.wait(5000);
     //Limpa os itens que constam na sacola com o o objetivo de nao deixar itens no Carrinho

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();
 
     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();
 
     cy.wait(2000);

     })


    it('Itens na Sacola com Login', () => {
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');
    
    
     cy.get('.justify-center > .text-base').click();

     // Fazer Login
     cy.wait(2000);
    
     cy.get('#email').click().type('marcelo.silva@szsolucoes.com.br');

     cy.get('#password').click().type('Marcelo@123');

     cy.get('.bg-orange-500').click();

  
       //Conferindo a sacola Vazia
      cy.get(':nth-child(2) > .justify-center > .relative > .remixicon').click();
      cy.wait(2000);
      // Sai do modal da sacola
      cy.get('body').type('{esc}');
      //Adicionar 4 produtos na sacola entrando nas categorias
      cy.get('[href="/produtos/tortas"]').click();
      //adicionado nega maluca
      cy.get(':nth-child(2) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/salgadinhos"]').click({ force: true });
      cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/empadoes"]').click({ force: true });
      cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/bebidas"]').click();
      cy.get(':nth-child(2) > .rounded-lg > .pt-0 > .inline-flex > p').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/docinhos"]').click();
      cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('.h-14').click({ force: true });
      
      cy.get(':nth-child(2) > .justify-center > .relative > .remixicon > path').click({ force: true });
      
      //cy.get('.gap-2 > .relative > .border').click();
      cy.wait(5000);
  
     // Aumentandoa quantidade dos itens
  
     for (let i = 0; i < 5; i++) {
      cy.get('[aria-label="Increase quantity"]').first().click({ force: true });
     }
  
  
     for (let i = 0; i < 10; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(1).click({ force: true });
     }
  
     
     for (let i = 0; i < 15; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(2).click({ force: true });
     }
  
     for (let i = 0; i < 20; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(3).click({ force: true });
     }
  
     for (let i = 0; i < 25; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(4).click({ force: true });
     }
  
     cy.contains('Fechar Sacola').click({ force: true });
  
     //timer de 5 segundos antes de limpar a sacola
     cy.wait(5000);
      // Limpar

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

     })



     it('Itens na Sacola com  Login Depois', () => {
        cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');
    
    
      cy.get('.justify-center > .text-base').click();

  
      //Conferindo a sacola Vazia
      cy.get(':nth-child(2) > .justify-center > .relative > .remixicon').click();
      cy.wait(2000);
      // Sai do modal da sacola
      cy.get('body').type('{esc}');
      //Adicionar 4 produtos na sacola entrando nas categorias
      cy.get('[href="/produtos/tortas"]').click();
      //adicionado nega maluca
      cy.get(':nth-child(2) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/salgadinhos"]').click({ force: true });
      cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/empadoes"]').click({ force: true });
      cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/bebidas"]').click();
      cy.get(':nth-child(2) > .rounded-lg > .pt-0 > .inline-flex > p').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('[href="/produtos/docinhos"]').click();
      cy.get(':nth-child(1) > .rounded-lg > .pt-0 > .inline-flex').click();
      cy.get(':nth-child(4) > .flex-wrap > .bg-green-900').click();
      cy.wait(2000);
      cy.get('.h-14').click({ force: true });
      
      cy.get(':nth-child(2) > .justify-center > .relative > .remixicon > path').click({ force: true });
      
      //cy.get('.gap-2 > .relative > .border').click();
      cy.wait(5000);
  
     // Aumentandoa quantidade dos itens
  
     for (let i = 0; i < 2; i++) {
      cy.get('[aria-label="Increase quantity"]').first().click({ force: true });
     }
  
  
     for (let i = 0; i < 4; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(1).click({ force: true });
      }
  
     
     for (let i = 0; i < 6; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(2).click({ force: true });
     }
  
     for (let i = 0; i < 8; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(3).click({ force: true });
     }
  
     for (let i = 0; i < 10; i++) {
      cy.get('[aria-label="Increase quantity"]').eq(4).click({ force: true });
     }
  
     cy.contains('Fechar Sacola').click({ force: true });
  
      //timer de 5 segundos antes de limpar a sacola
     cy.wait(5000);

     //Fazer Login

     cy.get('.justify-center > .text-base').click()

     cy.get('#email').click().type('marcelo.silva@szsolucoes.com.br');

     cy.get('#password').click().type('Marcelo@123');

     cy.get('.bg-orange-500').click();

     cy.wait(5000);

     //comfere sacola
     cy.get(':nth-child(2) > .justify-center > .relative > .remixicon > path').click({ force: true });

     cy.wait(5000);

     cy.contains('Fechar Sacola').click({ force: true });
     //elimina item
     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();
     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();
     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();
     cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();
      cy.get(':nth-child(1) > :nth-child(6) > .flex > .inline-flex').click();

  })


})

  