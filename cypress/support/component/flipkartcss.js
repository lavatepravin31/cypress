//const cypress = require("cypress");


Cypress.Commands.add("handel_domELE",function(){

    cy.get('[class="JFPqaw"]>span').click();

})

Cypress.Commands.add("travel_button_css",function(){

    cy.get('[alt="Travel"]').click();

})

Cypress.Commands.add("enter_from_city",function(){

    cy.get(':nth-child(1) > .GTbXbG > ._3qBKP_ > ._1w3ZZo').type("pune");
})

Cypress.Commands.add("enter_TO_city",function(){

    cy.get(':nth-child(3) > .GTbXbG > ._3qBKP_ > ._1w3ZZo').type("New Delhi, DEL - Indira Gandhi Airport, India");
})

Cypress.Commands.add("Select_date",function(){


    cy.get(':nth-child(2) > .zzPDhz > ._1w3ZZo').click();


    cy.get('[class="aSgzfL"]').eq(0).click()
    .find('[class="jkj0H4"]')
       .each((el)=>{

        const date=el.text();
        cy.log(date)
        if(date ==="29")
        {
            cy.get(el).click();
        }



        
    })


   // cy.get('[class="jkj0H4"]').find
    



})

Cypress.Commands.add("serach_button",function(){

    cy.get('._2KpZ6l > span').click({force: true});
})







