/// <reference types="cypress" />

describe("Tesst datepicket", () => {
    it("select date from datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click()
        cy.get('.datepicker-switch').first().click() // .eq(0)

        function selectYear(){
            cy.get('.datepicker-switch').first().then(yearText =>{
                let yearName = yearText.text()
                // cy.log("Year is :" +yearName)
                if(!yearName.includes('2030')){
                    cy.get('[class="next"]').eq(0).click({force : true})  
                    selectYear()
                }
            })
        }

        function selectMonth(){
            cy.get('[class="month"]').then(() =>{
                // cy.log('selecting month')
                cy.contains('Jan').click({force:true})
            })
        }

        function bithday(){
            cy.get('[class="day"]').contains('26').click({force: true})
        }

        selectYear()
        selectMonth()
        bithday()

        // cy.get('.form-control').then(dateText =>{
        //     let expectedDay = dateText.text()
        //     expect(expectedDay).to.include('04-28-2035')
        // })
        
    })
})