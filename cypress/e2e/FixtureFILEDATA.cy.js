
/// <reference types ="cypress" />

describe(' test fixture file ',()=>{

    it ("fixture file ",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        cy.fixture('orangeHRM1').then((data)=>{

            cy.get('[name="username"]').type(data.username)

            cy.get('[name="password"]').type(data.password)

            cy.get('[type="submit"]').click({force :true})
            cy.wait(3000)

            cy.screenshot('orangeHRMScreenshot')

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")


        })

        
        
    })
})