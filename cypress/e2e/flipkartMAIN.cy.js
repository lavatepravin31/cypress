describe ("check flipkart test",function(){

    it("test flipkart ",function(){

        cy.visit("https://www.flipkart.com/")

        

        cy.handel_domELE();

        cy.travel_button_css();

        cy.wait(3000)

        cy.VALIDAtion_travel_page();

        cy.enter_from_city();

        cy.enter_TO_city();

        cy.Select_date();

      //  cy.select_to_date();

       // cy.serach_button();



        
    })
})