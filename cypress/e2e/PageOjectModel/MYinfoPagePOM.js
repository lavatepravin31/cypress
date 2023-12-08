class MYinfoPagePOM{

    Validate_Myinfo1_Page_navigation1(){
        let ExpectedNAME= 'Personal Details'
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-main-title"]').eq(0).then(  (valueX)=>{
    
           let actualNAME=valueX.text();
    
            expect(actualNAME).to.equal(ExpectedNAME)
    
        })
       
    }
}
export default MYinfoPagePOM;