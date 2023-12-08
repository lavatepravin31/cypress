
/// <reference types="cypress" />


describe("test screenshot",()=>{

    it('take screen shot of test cases ',()=>{

        cy.visit("https://www.flipkart.com/")


        cy.screenshot('india');
    })
})