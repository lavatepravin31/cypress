
/// <reference types ="cypress" />


describe("test with select class",()=>{

    it('test select class',()=>{

        cy.visit("https://www.zoho.com/people/free-demo.html")

        cy.get('#zcf_address_country')
        .select('Greece')
        .should('have.value','Greece')




    })
})