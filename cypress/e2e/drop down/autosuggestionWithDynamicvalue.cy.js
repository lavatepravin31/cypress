
/// <reference types ="cypress" />

describe("test dynamic value",()=>{

    it('test dyanmic element',()=>{

        cy.visit("https://www.google.com/")

        cy.get('.SDkEP').type("somnath")

        cy.wait(3000)

        cy.get('[class="wM6W7d"]>span').each(( $ele,index ,$list)=>{

            if($ele.text()=='somnath temple'){

                cy.wrap($ele).click();
            }
        })


        cy.get('#APjFqb').should('have.value','somnath temple')

    })
})