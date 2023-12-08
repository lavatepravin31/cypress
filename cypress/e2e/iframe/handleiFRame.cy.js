import 'cypress-iframe';
///<reference types ="cypress" />

describe("test iframe",()=>{

    it("test iframe q",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        
        cy.frameLoaded('#courses-iframe')
        
        cy.iframe('#courses-iframe').find('[class="login-btn"]').should('be.visible').click({multiple: true})
    
    })
})