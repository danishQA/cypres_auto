function findInputfields(formName) {
  return cy.get(formName).then( () => {
    cy.get("div.relative.base-input.mb10.filldata input")
      .should("have.attr", "type", "email")
      .as("email")
    cy.get("div.relative.base-input.mb10.filldata").as("emailMessage");
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
function loginPage(loginPage) {
  cy.get(loginPage)
    .click()
    .then(url => {
      cy.url().should("include", "/customer/account/login");
    });
}

export class NavigationPage {
  AccountPage() {
    loginPage('a[href="/customer/account/login"]');
    return findInputfields("form[novalidate]");
  }
}

export const navigateTo = new NavigationPage();
