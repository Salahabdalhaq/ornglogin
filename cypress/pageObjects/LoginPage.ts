import { isEmpty } from "cypress/types/lodash";

class LoginPage {


  elements = {

    userName: () => cy.getByAttribute('placeholder', 'Username'),
    password: () => cy.getByAttribute('placeholder', 'Password'),
    loginBtn: () => cy.get('button'),
    forgotPassword: () => cy.getByClass('orangehrm-login-forgot-header'),
    resetPassword: () => cy.getByAttribute('type', 'submit'),
    titleResetPassword: () => cy.getByClass('orangehrm-forgot-password-title'),
    errorMassege : () => cy.getByClass('oxd-text oxd-text--p oxd-alert-content-text'),
    requerd : () => cy.getByClass('oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message')

  }



  login(userName: string, password: string) {
    if (userName !== '') {
      this.elements.userName().type(userName);
    }
    if (password !== '') {
      this.elements.password().type(password);
    }
    this.elements.loginBtn().click();
  }
  
  passenter( password: string) {

      this.elements.password().type(password);
    }
   
  

  forgotYourPassword(userName: string) {
    this.elements.forgotPassword().click();
    this.elements.userName().type(userName);
    this.elements.resetPassword().click();
    this.elements.titleResetPassword().contains('Reset Password link sent successfully').as('Reset Password done'); 
  }

}

export default LoginPage;