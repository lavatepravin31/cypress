import 'cypress-iframe';
///<reference types ="cypress" />

describe("test iframe",()=>{

    it("test iframe q",()=>{

        cy.visit("https://ui.vision/demo/webtest/frames/")

        
        cy.frameLoaded('[src="frame_1.html"]')
        
        cy.iframe('[src="frame_1.html"]').find('[name="mytext1"]').should('be.visible').type("pravin")
    
    })
})