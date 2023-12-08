
/// <reference types ="cypress" />

describe('without select class',()=>{

    it('test without select calss dropdown',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click();


        cy.get('.select2-search__field').type("Australia").type('{enter}')


        cy.get('#select2-billing_country-container').should('have.text','Australia')

    })
})