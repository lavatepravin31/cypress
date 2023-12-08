//const { describe } = require("mocha");
 import LoginPage from "../PageOjectModel/LoginPage"
import DashBoard from "../PageOjectModel/DashBoard"
import AdminPagePOM from "../PageOjectModel/AdminPagePOM";
import PIM_PagePOM from "../PageOjectModel/PIM_PagePOM";
import LeavePagePom from "../PageOjectModel/LeavePagePom";
import TimePagePom from "../PageOjectModel/TimePagePom";
import RecrutmentPAGePOM from "../PageOjectModel/RecrutmentPAGePom";
import MYinfoPagePOM from "../PageOjectModel/MYinfoPagePOM";
import PerformancePagePOM from "../PageOjectModel/PerformancePagePOM";

 const login=new LoginPage;
 const dash=new DashBoard;
 const ad=new AdminPagePOM;
 const Pim2=new PIM_PagePOM;
 const leave=new LeavePagePom ;
 const time=new TimePagePom;
 const recruter=new RecrutmentPAGePOM;
 const myinfoo=new MYinfoPagePOM;
const perfo= new PerformancePagePOM;




describe("test OrangeHRM page ",()=>{

    it("test user name on dahsboard",function(){

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       login.EnterUserName();
       login.EnterPassword();
       login.ClicOnSumbitButton();
       dash.ValidationOfUserName();
       

    })

    it("test click on admin buttton ",function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       login.EnterUserName();
       login.EnterPassword();
       login.ClicOnSumbitButton();
       //dash.ValidationOfUserName();

        cy.wait(4000)
        dash.ClickOnAdminMenu
        Pim2.ValidateADminPage_navigation1
        cy.wait(4000)
       
        
    })
   
    it("test click on leave button ",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_Leave_Menu()
       leave.Validate_leave_Page_navigation1()
        cy.wait(4000)
     

        
    })
    it("test click on PIM buttton",function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_PIM_Menu();
        Pim2.Validate_PIM_Page_navigation1();
        cy.wait(4000)
        Pim2.Click_On_add_buttton();
  
    })
    it("test check eroor message for invalid user",function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_PIM_Menu();
        Pim2.Validate_PIM_Page_navigation1();
        cy.wait(4000)
        Pim2.CheckEROORmessage()
  
    })
    it("test time  button",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_time_Menu()
        time.Validate_Time_Page_navigation1()
        cy.wait(4000)
        
    })
    it("test recruter  button ",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_recruter_Menu()
        recruter.Validate_Recruitment_Page_navigation1();
        cy.wait(4000)
        
    })
    it("test my info on leav button",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_myinfo_Menu()
        myinfoo.Validate_Myinfo1_Page_navigation1();

        
    })
    it("test performane button",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        login.EnterUserName();
        login.EnterPassword();
        login.ClicOnSumbitButton();
        cy.wait(4000)
        dash.ClickOn_performance12_Menu()
        perfo.Validate_PERFORMANCE1_Page_navigation1();
        cy.wait(4000)

        
    })
})