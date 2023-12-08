
/// <reference types ="cypress" />

describe('autosuggestion',()=>{

    it('test automation',()=>{

        cy.visit("https://www.wikipedia.org/");

        cy.get('#searchInput').type('Maharashtra')

        cy.get('[class="suggestion-text"]').contains('Maharashtra Cricket Association Stadium').click();

        cy.get('#firstHeading').should('have.text','Maharashtra Cricket Association Stadium')

        
    })
})