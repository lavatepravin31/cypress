class RecrutmentPAGePOM{

    Validate_Recruitment_Page_navigation1(){
        let ExpectedNAME= 'Recruitment'
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then(  (valueX)=>{
    
           let actualNAME=valueX.text();
    
            expect(actualNAME).to.equal(ExpectedNAME)
    
        })
       
    }
}
export default RecrutmentPAGePOM;