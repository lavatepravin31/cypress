
/// <reference types ="cypress" />

describe("test all data", () => {

    it('test all data', () => {


        cy.fixture('multitestDATA').then((alldata) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


            alldata.forEach((userdatajson) => {


                cy.get('[name="username"]').type(userdatajson.username)

                cy.get('[name="password"]').type(userdatajson.password)

                cy.get('[type="submit"]').click({ force: true })


                if (userdatajson.username == 'Admin' && userdatajson.password == 'admin123') {

                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', "Dashboard")

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click({ force: true })

                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click({ force: true })

                }

                else {

                    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials')
                }

            })

        })




    })




})

