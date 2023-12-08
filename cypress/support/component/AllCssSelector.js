///<reference types ="cypress"/>

Cypress.Commands.add('UserNaMEOrangeHRm',()=>{

    cy.get('[name="username"]')
})

Cypress.Commands.add('PassWordOrangeHRm',()=>{

    cy.get('[name="password"]')
})

Cypress.Commands.add('SubmitButton',()=>{

    cy.get('[type="submit"]')
})