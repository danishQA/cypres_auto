const { SignInPage } = require("../support/page_objects/navigationPage");

describe("SignIn Test Cases", () => {
  before("Check all Signin Fields", () => {
    cy.visit('/')
  });
  beforeEach("Reload account Page", () => {
    if(console.log('test',(cy.url().then((url) =>{
      return url==='https://ww2.tilemountain.co.uk/customer/account/login'
    })))){
    cy.reload()
  } else{
    SignInPage.loginPage()
  }
    SignInPage.findInputfields();
  })

  it("Empty Fields messages and login", () => {
    // 1st CASE
    cy.get('@email').click()
    cy.get('@password').click()
      .then(() => {
        SignInPage.emptyEmailError()
      })
    cy.get('@checkBox').check()
      .then(() => {
        SignInPage.emptyPasswordError()
      })
    SignInPage.login()
      .then(() => {
        cy.wait(500)
        SignInPage.NotificationErrorLogin()
      })
  });

  // 2nd CASE
  it("123 in Email & Password empty", () => {
    cy.get('@email').type('123')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 3rd CASE
  it("abc#.com in Email & Password empty", () => {
    cy.get('@email').type('abc#.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 4th CASE
  it("@.com in Email & Password empty", () => {
    cy.get('@email').type('@.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 5th CASE
  it("abc in Email & Password abc", () => {
    cy.get('@email').type('abc')
    cy.get('@password').type('abc')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 6th CASE
  it("123 in Email & Password 123", () => {
    cy.get('@email').type('123')
    cy.get('@password').type('123')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 7th CASE
  it("abc#.com in Email & Password abc#.com", () => {
    cy.get('@email').type('abc#.com')
    cy.get('@password').type('123')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 8th CASE
  it("@.com in Email & Password @.com", () => {
    cy.get('@email').type('@.com')
    cy.get('@password').type('@.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.invalidEmailError()
    })
  });
  // 9th CASE
  it("dahmed308@gmail.com in Email & Password empty", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      SignInPage.emptyPasswordError()
    })
  });
  // 10th CASE
  it("dahmed308@gmail.com in Email & Password 12345", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('12345')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
    
  });
  // 11th CASE
  it("dahmed308@gmail.com in Email & Password 1234567", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('1234567')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 12th CASE
  it("dahmed308@gmail.com in Email & Password abcdefg", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('abcdefg')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 13th CASE
  it("dahmed308@gmail.com in Email & Password abcd123", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('abcd123')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 14th CASE
  it("dahmed308@gmail.com in Email & Password abcd@123", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('abcd@123')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 15th CASE
  it("dahmed308@gmail.com in Email & Password Testtest", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('Testtest')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 16th CASE
  it("dahmed308@gmail.com in Email & Password T123456", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('T123456')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 17th CASE
  it("dahmed308@gmail.com in Email & Password test@123", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('test@123')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 18th CASE
  it("dahmed308@gmail.com in Email & Password #@,.$%^*", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('#@,.$%^*')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 19th CASE
  it("dahmed308@gmail.com in Email & Password abcd@123", () => {
    cy.get('@email').type('dahmed308@gmail.com')
    cy.get('@password').type('Test$123')
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 20th CASE
  it("danish.ahmed@ki5.com.uk in Email & Password Test@123", () => {
    cy.get('@email').type('danish.ahmed@ki5.com.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').check()
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 21th CASE
  it("danish.ahmed@ki5.com.uk in Email & Password Test@123", () => {
    cy.get('@email').type('danish.ahmed@ki5.com.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').uncheck()
    SignInPage.login().then(() => {
      SignInPage.forgotpasswordPage()
      cy.wait(1000)
      cy.get('div.notifications.fixed div#notificationAction1').contains('OK').click()
    })
  });
  // 22th CASE
  it.only("danish.ahmed@ki5.co.uk in Email & Password Test@123 and unchecked (Login)", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').uncheck()
    SignInPage.login().then(() => {      
      SignInPage.successLoginPage()
        SignInPage.logout()
    })
  });
  // 23th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password Test@123 and checked (Login)", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').check()
    SignInPage.login().then(() => {
      SignInPage.successLoginPage()
    })
  });
})