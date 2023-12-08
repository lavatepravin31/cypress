//const cypress = require("cypress");
///<reference types ="cypress"/>

Cypress.Commands.add('validate_dashboard',()=>{

    let ExpectedNAME= 'Amol Pasam'
        cy.get('.oxd-userdropdown-name').then(  (valueX)=>{

           let actualNAME=valueX.text();

            expect(actualNAME).to.equal(ExpectedNAME)

        })
})