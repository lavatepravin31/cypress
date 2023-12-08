
describe("test assertion",function(){

it('Test by using pom classes',()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.ENterUSername();

    cy.ENterPassword();

    cy.clickonSubmitButton();

    cy.validate_dashboard();

    
})

})