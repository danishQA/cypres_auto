function loginPage(loginPage) {
  return cy.get(loginPage)
    .click()
    .then(url => {
      cy.url().should("include", "/customer/account/login");
    });
}

function findInputfields(formName) {
  return cy.get(formName).then( () => {
    cy.get("div.relative.base-input.mb10.filldata input")
      .should("have.attr", "type", "email")
      .as("email")
    cy.get("div.relative.base-input.mb10.filldata div:nth-child(2)").not('.relative').as("emailMessage");
    cy.get("div.relative.base-input.mb10.passwordbox label").as("passwordLabel")
    cy.get("div.relative.base-input.mb10.passwordbox input")
      .should("have.attr", "type", "password")
      .as("password")
    cy.get("div.relative.base-input.mb10.passwordbox").as("passwordMessage");
    cy.get("input#remember")
      .should("have.attr", "type", "checkbox")
      .as("checkBox")
    cy.get("button")
      .should("have.attr", "type", "button")
      .contains("Login")
      .as("login")

    cy.get("div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a")
      .should("have.attr", "href", "/forgetpassword")
      .as("forgetpassword")
    
  });
}

function login() {
  console.log('test')
  return cy.get("button").should("have.attr", "type", "button").contains("Login").click()
  .then(($test) => {
    return $test
  })
}

function NotificationErrorLogin() {
  return cy.get('div.notifications.fixed').then((popup)=> {
    cy.get(popup).find('div.message.p20').contains('Please fix the validation errors')
    cy.get(popup).find('div#notificationAction1').contains('OK').click()
  })
}

function successLoginPage(){
  return cy.get('')
}
export class SigninPage {
  loginPage(){
    return loginPage('a[href="/customer/account/login"]');
  }
  findInputfields() {
    return findInputfields("form[novalidate]");
  }
  NotificationErrorLogin() {
    NotificationErrorLogin()
  }
  
  login() {
    return login()
  }
}

export const SignInPage = new SigninPage();
