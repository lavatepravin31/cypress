
/// <reference types ="cypress" />

describe("test nth child ",()=>{

    it("test nth ",()=>{

        cy.visit("https://www.seqrite.com/")

        cy.get('[class="list-unstyled"]:nth-child(2) >li >[href="https://www.seqrite.com/resources/cat/press-release"]').click({force:true});
       // cy.get('[class="list-unstyled"]:nth-child(2) >li >a').eq(13).click({force:true});
    })
})