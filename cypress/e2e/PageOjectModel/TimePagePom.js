class TimePagePom {

    Validate_Time_Page_navigation1(){
        let ExpectedNAME= 'Timesheets'
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-level"]').then(  (valueX)=>{
    
           let actualNAME=valueX.text();
    
            expect(actualNAME).to.equal(ExpectedNAME)
    
        })
       
    }
}
export default TimePagePom;