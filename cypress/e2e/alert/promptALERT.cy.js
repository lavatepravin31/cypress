
///<reference types ="cypress" />

describe("test promt alerrt",()=>{

    it("test promt",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('pravin');
            
        })
        cy.get(':nth-child(3) > button').click();


        cy.get('#result').should('have.text','You entered: pravin')
    })

    it("test promt",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('pravin');
            
        })
        cy.get(':nth-child(3) > button').click();


        cy.get('#result').should('have.text','You entered: pravin')
    })
})