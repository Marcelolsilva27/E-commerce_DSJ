///<reference types ="cypress" />
import LoginElements from "../elements/login";

const LoginElements = new loginElements

class LoginPage {

acessarHomepage(){
    cy.visit('https://homolog-shop-ecommerce.szsolucoes.com.br/')
    
}
 preencherDadosNaTela () {

    cy.get(LoginElements.imputEmail()).type('marcelo.silva@szsolucoes.com.br')

    cy.get(LoginElements.ImputPass()).type('Marcelo@123')

 }

 clickEmLogin()
{
      cy.get('.bg-orange-500').click();


 }

}