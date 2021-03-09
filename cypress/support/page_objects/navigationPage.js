const loginPage = ((loginpage) =>{
  return cy.get(loginpage)
    .click()
    .then(() => {
      cy.url().should("include", "/customer/account/login");
    });
})

const findInputfields = ((formName) => {
  return cy.get(formName).then( () => {
    cy.get("div.relative.base-input.mb10.filldata input")
      .should("have.attr", "type", "email")
      .clear()
      .as("email")
    cy.get("div.relative.base-input.mb10.filldata div:nth-child(2)")
    .not('.relative')
    .as("emailMessage");
    cy.get("div.relative.base-input.mb10.passwordbox label")
    .as("passwordLabel")
    cy.get("div.relative.base-input.mb10.passwordbox input")
      .should("have.attr", "type", "password").clear()
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
})

const login = (() => {
  console.log('test')
  return cy.get('form[novalidate="novalidate"]').submit()
  // return cy.get("button").should("have.attr", "type", "button").contains("Login").click()
  // .then(($test) => {
  //   return $test
  // })
})

const emptyEmailError = (() =>{
  return cy.get('@emailMessage').find('span').invoke('text')
  .should('include', 'Field is required')
})

const emptyPasswordError = (() =>{
  cy.get('@passwordMessage').find('span').invoke('text')
  .should('include', 'Field is required.')
})

const NotificationErrorLogin = (() => {
  return cy.get('div.notifications.fixed').then((popup)=> {
    cy.get(popup).find('div.message.p20').contains('Please fix the validation errors')
    cy.get(popup).find('div#notificationAction1').contains('OK').click()
  })
})

const invalidEmailError = (() =>{
  cy.get('@emailMessage').find('span').invoke('text')
  .should('include', 'Please provide valid e-mail address.')
})

const forgotpasswordPage = (() =>{
  cy.url().should('eq','http://178.62.80.156/forgetpassword')
})

const successLoginPage = (() =>{
  cy.wait(3000)
  cy.get('div.notifications.fixed div.message.p20').as('LoginPopup')
  .invoke('text').should('include', 'You are logged in!')
  cy.url().should('eq','http://178.62.80.156/')
})
export class SigninPage {
  loginPage(){
    return loginPage('div[class="inline-flex relative dropdown"] a[href="/customer/account/login"]');
  }
  findInputfields() {
    return findInputfields("form[novalidate]");
  }
  NotificationErrorLogin() {
    return NotificationErrorLogin()
  }

  emptyEmailError(){
    return emptyEmailError()
  }

  emptyPasswordError(){
    return emptyPasswordError()
  }

  invalidEmailError(){
    return invalidEmailError()
  }

  forgotpasswordPage(){
    return forgotpasswordPage()
  }
  
  login() {
    return login()
  }
  successLoginPage(){
    return successLoginPage()
  }
}

export const SignInPage = new SigninPage();
