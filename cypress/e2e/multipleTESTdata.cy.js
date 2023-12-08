
describe('test with multiple data', () => {

    it('test data ', () => {

        cy.fixture("multitestDATA", (alldata)=> {


            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


            alldata.forEach((userdata) => {

                cy.get('[name="username"]').type(userdata.username)

                cy.get('[name="password"]').type(userdata.password)

                cy.get('[type="submit"]').click({ force: true })

            })


        })



    })
})