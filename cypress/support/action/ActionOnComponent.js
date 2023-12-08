
///<reference types ="cypress"/>

Cypress.Commands.add('ENterUSername',()=>{

    cy.UserNaMEOrangeHRm().type('admin');
})

Cypress.Commands.add('ENterPassword',()=>{

    cy.PassWordOrangeHRm().type('admin123');
})

Cypress.Commands.add('clickonSubmitButton',()=>{

    cy.SubmitButton().click();
})
