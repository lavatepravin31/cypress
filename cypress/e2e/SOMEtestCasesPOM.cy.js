//const { it } = require("mocha")


describe ("pom test cases",function(){

    it.skip("test cases",function(){

        cy.visit("https://automationteststore.com/")

        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click();

        cy.get(".fixed_wrapper .fixed .prdocutname").each((ele,index,list)=>{

           cy.log("Index" + index + " " + ele.text()); //index sobt sagla data ani product name yt ahe..... index 2 lipstick

           // cy.log(ele.text())  //..........konta index la konta haahe te fkt seach karacyaha he

        })
  
    })
    it.skip("test cases",function(){

        cy.visit("https://automationteststore.com/")

        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click();

        cy.get(".fixed_wrapper .fixed .prdocutname").each((ele)=>{ //first ele made store krnr data 

            if(ele.text().includes("Absolue Eye Precious Cells")){  //includes ne assertion use kela ahe

             cy.wrap(ele).click();   //wrap ne tya element maadhla element find kela

             cy.get('.cart').click();

             cy.url().should('includes','checkout') //assertion use kela ahe  include ne  

            }


        })

        

})

it("test cases",function(){

    cy.visit("https://automationteststore.com/")

    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click();

    cy.get('[class="col-md-3 col-sm-6 col-xs-12"]').should('have.length', 5)
    cy.get('[class="col-md-3 col-sm-6 col-xs-12"]')
    .find('.pricetag.jumbotron')
    .children('.nostock')
    .its('length')
    .should('be.gte', 1)

    

    

})

})