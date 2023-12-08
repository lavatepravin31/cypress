
class LeavePagePom{

    Validate_leave_Page_navigation1(){
        let ExpectedNAME= 'Leave'
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then( (valueX)=>{
    
           let actualNAME=valueX.text();
    
            expect(actualNAME).to.equal(ExpectedNAME)
    
        })
       
    }


}
export default LeavePagePom;