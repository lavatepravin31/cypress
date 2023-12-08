//const { should } = require("chai")

//const { expect } = require("chai")



describe("test assertion",function(){

    it("test implicite assertion",function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //implicite assertion 

       // **************should and and --include,eq,contain***************

       cy.url().should('include',"opensource-demo.orangehrmlive.com")

       .and('contain',"orangehrmlive")

       .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       cy.url().should('not.contain',"greekWOrld") //negetive using .........not.conatain/include/eq


       cy.get('.orangehrm-login-branding > img').should('be.visible')// logo visble 
       .and('exist') //logo exist



    })
    it("test implicite assertion",function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //explicit assretion..............expect and assert

        cy.get('[name="username"]').type("admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click();

       
        let ExpectedNAME= 'paul collings'
        cy.get('.oxd-userdropdown-name').then(  (valueX)=>{

           let actualNAME=valueX.text();

            expect(actualNAME).to.equal(ExpectedNAME)

        })
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')

})


})