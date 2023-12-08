describe("test datepicker" ,function(){

    it("tesr datepicker",function(){

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click()

        cy.get('[class="datepicker-switch"]').first().click();

        function foryear (){
            cy.get('[class="datepicker-switch"]').first().then(yearTEXT=>{
                 let selectYEAR=yearTEXT.text();

                 if(!selectYEAR.includes('2030')){
                    cy.get('[class="next"]').eq(0).click({force: true});
                    foryear()
                 }
            })

        }

        function selectMonth(){
            cy.get('[class="month"]').then(() =>{
            cy.contains('Feb').click({force:true})
            })
        }
        function DAY(){
            cy.get('[class="day"]').contains('19').click({force: true})
        }


        foryear()
        selectMonth()
        DAY()
    })
})