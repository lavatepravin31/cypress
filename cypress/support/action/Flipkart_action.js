//const cypress = require("cypress");

Cypress.Commands.add("click_on_cancel_button",()=>{

    cy.handel_domELE().click();
})


Cypress.Commands.add("click_on_travel_button",()=>{

    cy.travel_button_css().click();
})