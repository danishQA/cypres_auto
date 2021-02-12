const { navigateTo } = require("../support/page_objects/navigationPage");

describe("SignIn Test Cases", () => {
  beforeEach("Check all Signin Fields", () => {
    cy.visit('/')
    navigateTo.AccountPage();
  });

  it("Check all Signin Fields", () => {
    // 1st CASE
        cy.get('@email').click()
        cy.get('@password').click()
        cy.get('@checkBox').check()
        cy.get('@login').click()
  });

  it("Check all Signin Fields", () => {
    // 2nd CASE
        cy.get('@email').click()
        cy.get('@password').click()
  });

});

//         //   4th case
//         it("checking all fields response", () => {
//           cy.get("form[novalidate]").within(() => {
//             let email = cy
//               .get("div.relative.base-input.mb10.filldata input")
//               .should("have.attr", "type", "email");
//             let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//             let password = cy
//               .get("div.relative.base-input.mb10.passwordbox input")
//               .should("have.attr", "type", "password");
//             let passwordMessage = cy.get(
//               "div.relative.base-input.mb10.passwordbox"
//             );
//             let checkBox = cy
//               .get("input#remember")
//               .should("have.attr", "type", "checkbox");
//             let Login = cy
//               .get("button")
//               .should("have.attr", "type", "button")
//               .contains("Login");

//             email.should("have.value", "");
//             password.should("have.value", "");

//             // email.click().then(() => {
//             //   emailMessage.child().get("span");
//             // });
//             email.type("abc");

//             Login.click().then(() => {
//               cy.on("window:alert", txt => {
//                 expect(txt).to.contains("Your full name cannot be blank.");
//               });
//             });
//           });
//           let forgotPassword = cy
//             .get(
//               "div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a"
//             )
//             .should("have.attr", "href", "/forgetpassword");
//           cy.get("div.notifications.fixed");
//         });

//         //   5th case
//         it("checking all fields response", () => {
//           cy.get("form[novalidate]").within(() => {
//             let email = cy
//               .get("div.relative.base-input.mb10.filldata input")
//               .should("have.attr", "type", "email");
//             let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//             let password = cy
//               .get("div.relative.base-input.mb10.passwordbox input")
//               .should("have.attr", "type", "password");
//             let passwordMessage = cy.get(
//               "div.relative.base-input.mb10.passwordbox"
//             );
//             let checkBox = cy
//               .get("input#remember")
//               .should("have.attr", "type", "checkbox");
//             let Login = cy
//               .get("button")
//               .should("have.attr", "type", "button")
//               .contains("Login");

//             email.should("have.value", "");
//             password.should("have.value", "");

//             // email.click().then(() => {
//             //   emailMessage.child().get("span");
//             // });
//             email.type("123");

//             Login.click().then(() => {
//               cy.on("window:alert", txt => {
//                 expect(txt).to.contains("Your full name cannot be blank.");
//               });
//             });
//           });
//           let forgotPassword = cy
//             .get(
//               "div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a"
//             )
//             .should("have.attr", "href", "/forgetpassword");
//           cy.get("div.notifications.fixed");
//         });

//         //   6th case
//         it("checking all fields response", () => {
//           cy.get("form[novalidate]").within(() => {
//             let email = cy
//               .get("div.relative.base-input.mb10.filldata input")
//               .should("have.attr", "type", "email");
//             let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//             let password = cy
//               .get("div.relative.base-input.mb10.passwordbox input")
//               .should("have.attr", "type", "password");
//             let passwordMessage = cy.get(
//               "div.relative.base-input.mb10.passwordbox"
//             );
//             let checkBox = cy
//               .get("input#remember")
//               .should("have.attr", "type", "checkbox");
//             let Login = cy
//               .get("button")
//               .should("have.attr", "type", "button")
//               .contains("Login");

//             email.should("have.value", "");
//             password.should("have.value", "");

//             // email.click().then(() => {
//             //   emailMessage.child().get("span");
//             // });
//             email.type("abc#.com");

//             Login.click().then(() => {
//               cy.on("window:alert", txt => {
//                 expect(txt).to.contains("Your full name cannot be blank.");
//               });
//             });
//           });
//           let forgotPassword = cy
//             .get(
//               "div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a"
//             )
//             .should("have.attr", "href", "/forgetpassword");
//           cy.get("div.notifications.fixed");
//         });

//         //   7th case
//         it("checking all fields response", () => {
//           cy.get("form[novalidate]").within(() => {
//             let email = cy
//               .get("div.relative.base-input.mb10.filldata input")
//               .should("have.attr", "type", "email");
//             let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//             let password = cy
//               .get("div.relative.base-input.mb10.passwordbox input")
//               .should("have.attr", "type", "password");
//             let passwordMessage = cy.get(
//               "div.relative.base-input.mb10.passwordbox"
//             );
//             let checkBox = cy
//               .get("input#remember")
//               .should("have.attr", "type", "checkbox");
//             let Login = cy
//               .get("button")
//               .should("have.attr", "type", "button")
//               .contains("Login");

//             email.should("have.value", "");
//             password.should("have.value", "");

//             // email.click().then(() => {
//             //   emailMessage.child().get("span");
//             // });
//             email.type("@.com");

//             Login.click().then(() => {
//               cy.on("window:alert", txt => {
//                 expect(txt).to.contains("Your full name cannot be blank.");
//               });
//             });
//           });
//           let forgotPassword = cy
//             .get(
//               "div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a"
//             )
//             .should("have.attr", "href", "/forgetpassword");
//           cy.get("div.notifications.fixed");
//         });

//         //   8th case
//         it("checking all fields response", () => {
//           cy.get("form[novalidate]").within(() => {
//             let email = cy
//               .get("div.relative.base-input.mb10.filldata input")
//               .should("have.attr", "type", "email");
//             let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//             let password = cy
//               .get("div.relative.base-input.mb10.passwordbox input")
//               .should("have.attr", "type", "password");
//             let passwordMessage = cy.get(
//               "div.relative.base-input.mb10.passwordbox"
//             );
//             let checkBox = cy
//               .get("input#remember")
//               .should("have.attr", "type", "checkbox");
//             let Login = cy
//               .get("button")
//               .should("have.attr", "type", "button")
//               .contains("Login");

//             email.should("have.value", "");
//             password.should("have.value", "");

//             // email.click().then(() => {
//             //   emailMessage.child().get("span");
//             // });
//             email.type("abc");

//             Login.click().then(() => {
//               cy.on("window:alert", txt => {
//                 expect(txt).to.contains("Your full name cannot be blank.");
//               });
//             });
//           });
//           let forgotPassword = cy
//             .get(
//               "div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a"
//             )
//             .should("have.attr", "href", "/forgetpassword");
//           cy.get("div.notifications.fixed");
//         });

//         // Last Case
//         it("Login", () => {
//           cy.get("form[novalidate]").within(() => {
//             let email = cy
//               .get("div.relative.base-input.mb10.filldata input")
//               .should("have.attr", "type", "email");
//             let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//             let password = cy
//               .get("div.relative.base-input.mb10.passwordbox input")
//               .should("have.attr", "type", "password");
//             let passwordMessage = cy.get(
//               "div.relative.base-input.mb10.passwordbox"
//             );
//             let checkBox = cy
//               .get("input#remember")
//               .should("have.attr", "type", "checkbox");
//             let Login = cy
//               .get("button")
//               .should("have.attr", "type", "button")
//               .contains("Login");

//             email.should("have.value", "");
//             password.should("have.value", "");

//             email.type("abc");
//           });
//           let forgotPassword = cy
//             .get(
//               "div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a"
//             )
//             .contains("Forgot Your Password?");
//         });
//       });
//     // });
//   // 1st Case
//   it("check all fields and labels", () => {
//     cy.get("form[novalidate]").within(() => {
//       let email = cy
//         .get("div.relative.base-input.mb10.filldata input")
//         .should("have.attr", "type", "email");
//       let emailMessage = cy.get("div.relative.base-input.mb10.filldata");
//       let passwordLabel = cy.get(
//         "div.relative.base-input.mb10.passwordbox label"
//       );
//       let password = cy
//         .get("div.relative.base-input.mb10.passwordbox input")
//         .should("have.attr", "type", "password");
//       let passwordMessage = cy.get("div.relative.base-input.mb10.passwordbox");
//       let checkBox = cy
//         .get("input#remember")
//         .should("have.attr", "type", "checkbox");
//       let Login = cy
//         .get("button")
//         .should("have.attr", "type", "button")
//         .contains("Login");

//       email.should("have.value", "");
//       password.should("have.value", "");
//     });
//     let forgotPassword = cy
//       .get("div.col-xs-12.col-sm-12.flex.end-xs.middle-xs.forgetpassword a")
//       .should("have.attr", "href", "/forgetpassword");
// //   });
// });
