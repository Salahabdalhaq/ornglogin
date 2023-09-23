import LoginPage from "../../../pageObjects/LoginPage";
import DataUtils from "../../../support/DataUtils";
const loginObj: LoginPage = new LoginPage();
const loginPage: LoginPage = new LoginPage();
const dataUtils: DataUtils = new DataUtils();


describe('Login Page', () => {

  beforeEach(() => {
    
    cy.intercept('/web/index.php/dashboard/index').as('Login');
    cy.visit('/');

  });

  it('check valid username and valid password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.valid , loginPage.password.valid)
     
  });
});

  it('check valid username and invalid password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.valid , loginPage.password.invalid)
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible');
      
  });
});
  
  it('check invalid username and valid password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.invalid , loginPage.password.valid)
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible');
  });
});
  
  it('check invalid username and invalid password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.invalid , loginPage.password.invalid)
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible');
  });
});
  
  it('check empty username and empty password', () => {

    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.empty, loginPage.password.empty)
    
      cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .should('be.visible')
      
  });
    
  });
  
  it('check empty username and valid password', () => {

    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.empty, loginPage.password.valid)
      cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .should('be.visible')
    
  });
    
  });
  it('check valid username and empty password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.valid, loginPage.password.empty)
      cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .should('be.visible')
    
  });
    
  });
  it('check empty username and invalid password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.empty, loginPage.password.invalid)
      cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .should('be.visible')
    
  });
    
  });
  it('check invalid username and empty password', () => {
    cy.fixture('login.json').then ((loginPage) => {
      loginObj.login(loginPage.username.invalid, loginPage.password.empty)
      cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .should('be.visible')
    
  });
    
  });

  it('check hidden password', () => {
    cy.fixture('login.json').then((loginPage) => {
      cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password');
    });
  });
  

});
