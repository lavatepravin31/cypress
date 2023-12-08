

describe("test flipkart",function(){

    it("test new testcases",function(){

        cy.visit("https://www.flipkart.com/");

        cy.get('[class="JFPqaw"]>span').click()

        cy.get('[alt="Travel"]').click();

    })



})