

describe("new test ",function(){

    it("new test",function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

       

        cy.window().then(function($win){

            cy.stub($win,'prompt').returns("pravin lavate")

            })
            cy.get('[onclick="jsPrompt()"]').click();

            cy.get('#result').should('contain.text',"You entered: pravin lavate")
           
           
        })


    })

    
