
///<reference types ="cypress"/>

describe("test confirm alert",()=>{

    it("test confim ",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(2) > button').click();

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm',()=> false);

        cy.get('#result').should('have.text','You clicked: Cancel')
       



    })
    
})