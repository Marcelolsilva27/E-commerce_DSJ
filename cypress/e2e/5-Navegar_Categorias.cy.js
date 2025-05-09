//Script de teste fazendo a aplicação navegar pelas Categorias

describe('Teste acessar o Site', () => {
  it('Acessar o site', () => {
  cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');  

// Passar pela Categoria Torta

    cy.get('[href="/produtos/tortas"]').click();
    //cy.wait(2000);
    cy.get(':nth-child(1) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
    //cy.wait(2000);
    cy.get('.w-full > .flex > :nth-child(3) > .transition-colors').click();
    //cy.wait(2000);
    cy.get(':nth-child(2) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
    //cy.wait(2000);
    cy.get('.h-14').click();
    //cy.wait(2000);

// Passar pela Categoria Salgadinho
    
    cy.get('[href="/produtos/salgadinhos"]').click();
    //cy.wait(2000);
    cy.get(':nth-child(1) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
    //cy.wait(2000);
    cy.get('.w-full > .flex > :nth-child(3) > .transition-colors').click();
    //cy.wait(2000);
    cy.get(':nth-child(2) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
    //cy.wait(2000);
    cy.get('.h-14').click();
    //cy.wait(2000);

//Passar pela Categoria Empadão
    cy.get('[href="/produtos/empadoes"]').click({ force: true });
    //cy.wait(2000);
    cy.get(':nth-child(1) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click({ force: true });
    //cy.wait(2000);
    cy.get('.w-full > .flex > :nth-child(3) > .transition-colors').click();
    //cy.wait(2000);
    //cy.get(':nth-child(2) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
    cy.wait(2000);
    //cy.get('.h-14').click();
    cy.wait(2000);

//Passar pela categoria Docinhos

   cy.get('[href="/produtos/docinhos"]').click({ force: true });
   cy.wait(2000);
   cy.get(':nth-child(1) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
   cy.wait(2000);
   cy.get('.w-full > .flex > :nth-child(3) > .transition-colors').click();
   cy.wait(2000);
   cy.get(':nth-child(2) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
   cy.wait(2000);
   cy.get('.h-14').click();
   cy.wait(2000);

//Passar pela categoria Bebidas

  cy.get('[href="/produtos/bebidas"]').click();
  //cy.wait(2000);
  cy.get(':nth-child(1) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
  //cy.wait(2000);
  cy.get('.w-full > .flex > :nth-child(3) > .transition-colors').click();
  //cy.wait(2000);
  cy.get(':nth-child(2) > .p-0 > .overflow-hidden > [data-radix-aspect-ratio-wrapper=""] > .border-b-2 > .relative > a > .rounded-t-md').click();
  //cy.wait(2000);
  cy.get('.h-14').click();
  //cy.wait(2000);

//Categoria conveniência

cy.get('[href="/produtos/conveniencia"]').click({ force: true });
cy.wait(2000);
cy.get('.rounded-t-md').click;
cy.wait(2000);
cy.get('.h-14').click();
cy.wait(2000);

})
})