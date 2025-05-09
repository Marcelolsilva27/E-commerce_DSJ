//Script de teste fazendo a aplicação usar o campo de pesquisa de itens

describe('Teste acessar o Site', () => {
    it('Acessar o site', () => {
    cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/');  


//Pesquisando produto

cy.get('form.flex-1 > .flex-1 > .relative > .flex').click({ force: true });
cy.wait(2000);
cy.get('input:visible').first().clear().type('Torta Alema{enter}'); // Limpa o campo e digita novamente
cy.wait(4000);
cy.get('input:visible').first().clear().type('Empadao Frango{enter}'); // Limpa o campo e digita novamente
cy.wait(4000);
cy.get('input:visible').first().clear().type('Nega Maluca{enter}'); // Limpa o campo e digita novamente
cy.wait(4000);
cy.get('input:visible').first().clear().type('Leite{enter}'); // Limpa o campo e digita novamente
cy.wait(4000);
cy.get('input:visible').first().clear().type('Ades{enter}'); // Limpa o campo e digita novamente
cy.wait(4000);
cy.get('input:visible').first().clear().type('Brigadeiro{enter}'); // Limpa o campo e digita novamente
cy.wait(4000);
cy.get('input:visible').first().clear(); // Limpa novamente o campo de entrada
cy.get('.h-14').click();


  })
})