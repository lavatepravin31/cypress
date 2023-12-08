class PIM_PagePOM{

   
    Validate_PIM_Page_navigation1(){
        let ExpectedNAME= 'PIM'
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then(  (valueX)=>{
    
           let actualNAME=valueX.text();
    
            expect(actualNAME).to.equal(ExpectedNAME)
    
        })
       
    }

    Click_On_add_buttton(){
   
    cy.get('[class="orangehrm-header-container"] [class="oxd-button oxd-button--medium oxd-button--secondary"]').click({force: true});


    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("naredra");
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("damodardas")
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("modi")
   // cy.get('.oxd-button--secondary').click({force: true});

    cy.get('.oxd-switch-input').click({force: true});

    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("modi")

    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("modi@12345")
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("modi@12345")

    cy.get('.oxd-button--secondary').click({force: true});
    }

    CheckEROORmessage(){
   
        cy.get('[class="orangehrm-header-container"] [class="oxd-button oxd-button--medium oxd-button--secondary"]').click({force: true});
    
    
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("naredra");
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("damodardas")
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("modi")
       // cy.get('.oxd-button--secondary').click({force: true});
    
        cy.get('.oxd-switch-input').click({force: true});
    
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("modi")
        cy.get('.oxd-input-group > .oxd-text').should('contain',"Should be at least 5 characters")
    
        }
    


    
}

export default PIM_PagePOM;