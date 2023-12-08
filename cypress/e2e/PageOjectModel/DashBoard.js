class DashBoard{

ValidationOfUserName(){

    let ExpectedNAME= 'Paul Collings'
    cy.get('.oxd-userdropdown-name').then(  (valueX)=>{

       let actualNAME=valueX.text();

        expect(actualNAME).to.equal(ExpectedNAME)

    })

}
ClickOnAdminMenu() {

    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(0).click({ multiple: true })
}

ClickOn_PIM_Menu(){

    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(1).click({ multiple: true })
}

ClickOn_Leave_Menu(){
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click({ multiple: true })
   // cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(2).click({ multiple: true })
}
ClickOn_time_Menu(){

    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(3).click({ multiple: true })
}

ClickOn_recruter_Menu(){

    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(4).click({ multiple: true })
}
ClickOn_myinfo_Menu(){

    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(5).click({ multiple: true })
}
ClickOn_performance12_Menu(){

    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(6).click({ multiple: true })
}



}

export default DashBoard ;