

class LoginPage{

    EnterUserName(){

        cy.get('[name="username"]').type("Admin");

    }

    EnterPassword(){

        cy.get('[name="password"]').type("admin123");

    }

    ClicOnSumbitButton(){
        cy.get('[type="submit"]').click();
    }

}
export default LoginPage;