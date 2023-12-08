
describe("test test 3",function(){

    it("test datable ",function(){

        cy.visit("https://www.webdriveruniversity.com/")

        cy.get("#data-table").invoke("removeAttr","target").click();


        cy.get("#thumbnail-1 tr td").each ((ele ,Index) =>{


        const alltext = ele.text();

        if(alltext.includes("Smith")){

            cy.get("#thumbnail-1 tr td")

            .eq(Index)

            .next()

            .then(function(specificage){

               let nextage=specificage.text();

               expect(nextage).to.equal("45")
            })

        }


        })





    })
})
