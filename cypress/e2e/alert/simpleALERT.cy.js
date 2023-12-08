///<reference types ="cypress"/>

describe("test simple alert",()=>{

    it('test simple alert functionality',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(1) > button').click();

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am a JS Alert') 


            cy.get('#result').should('have.text','You successfully clicked an alert')
        })

      
    })
})