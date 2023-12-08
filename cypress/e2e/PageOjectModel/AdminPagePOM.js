class AdminPagePOM{


    
    
    ValidateADminPage_navigation1(){
        let ExpectedNAME= 'User Management'
        cy.get(' [class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-level"]').then(  (valueX)=>{
    
           let actualNAME=valueX.text();
    
            expect(actualNAME).to.equal(ExpectedNAME)
    
        })
       
    }
    
    click_on_slecteBOX(){
        cy.get('[class="oxd-select-text--after"]').click();
    }
}
export default AdminPagePOM;