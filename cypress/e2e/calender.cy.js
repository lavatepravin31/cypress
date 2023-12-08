
describe("test calender",function(){

    it("test calander functinaluty ",function(){

        cy.visit("https://www.webdriveruniversity.com/")

        cy.get("#datepicker").invoke("removeAttr","target").click();

        cy.get('.glyphicon').click();

        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .next').click();

        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .next').click();

        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .next').click();

        cy.get(':nth-child(4) > :nth-child(7)').click();








    })
})