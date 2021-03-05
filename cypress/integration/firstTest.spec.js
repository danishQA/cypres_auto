const { SignInPage } = require("../support/page_objects/navigationPage");

describe("SignIn Test Cases", () => {
  before("Check all Signin Fields", () => {
    cy.visit('/')
    SignInPage.loginPage()

  });
  beforeEach("Reload account Page", () => {
    cy.reload()
    SignInPage.findInputfields();
  })

  it("Empty Fields messages and login", () => {
    // 1st CASE
    cy.get('@email').click()
    cy.get('@password').click()
      .then(() => {
        cy.get('@emailMessage').find('span').invoke('text')
          .should('include', 'Field is required')
      })
    cy.get('@checkBox').check()
      .then(() => {
        cy.get('@passwordMessage').find('span').invoke('text')
          .should('include', 'Field is required')
      })
    SignInPage.login()
      .then(() => {
        SignInPage.NotificationErrorLogin()
      })
  });

  // 2nd CASE
  it("123 in Email & Password empty", () => {
    cy.get('@email').type('123')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 3rd CASE
  it("abc#.com in Email & Password empty", () => {
    cy.get('@email').type('abc#.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 4th CASE
  it("@.com in Email & Password empty", () => {
    cy.get('@email').type('@.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 5th CASE
  it("abc in Email & Password abc", () => {
    cy.get('@email').type('abc')
    cy.get('@password').type('abc')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 6th CASE
  it("123 in Email & Password 123", () => {
    cy.get('@email').type('123')
    cy.get('@password').type('123')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 7th CASE
  it("abc#.com in Email & Password abc#.com", () => {
    cy.get('@email').type('abc#.com')
    cy.get('@password').type('123')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 8th CASE
  it("@.com in Email & Password @.com", () => {
    cy.get('@email').type('@.com')
    cy.get('@password').type('@.com')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 9th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password empty", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@passwordMessage').find('span').invoke('text')
        .should('include', 'Field is required.')
    })
  });
  // 10th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password 12345", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('12345')
    SignInPage.login().then(() => {
     cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 11th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password 1234567", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('1234567')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 12th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password abcdefg", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('abcdefg')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 13th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password abcd123", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('abcd123')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 14th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password abcd@123", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('abcd@123')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 15th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password Testtest", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('Testtest')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 16th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password T123456", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('T123456')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 17th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password test@123", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('test@123')
    SignInPage.login().then(() => {
    cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 18th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password #@,.$%^*", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('#@,.$%^*')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 19th CASE
  it("danish.ahmed@ki5.co.uk in Email & Password abcd@123", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('Test$123')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 20th CASE
  it("danish.ahmed@ki5.com.uk in Email & Password Test@123", () => {
    cy.get('@email').type('danish.ahmed@ki5.com.uk')
    cy.get('@password').type('Test@123')
    SignInPage.login().then(() => {
      cy.url().should('eq','http://178.62.80.156/forgetpassword')
    })
  });
  // 21th CASE
  it.only("danish.ahmed@ki5.co.uk in Email & Password Test@123 and unchecked (Login)", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').uncheck()
    SignInPage.login().then(() => {
      cy.expect(cy.get('div.familiar-brands div.row.center-xs a:nth-child(1)'))
      cy.get('div.notifications fixed div.message p20').as('LoginPopup')
      .invoke('text').should('include', 'You are logged in!')
      cy.url().should('eq','http://178.62.80.156/')
    })
  });
  // 22th CASE
  it("danish.ahmed@ki5.co.uk.uk in Email & Password Test@123 and checked (Login)", () => {
    cy.get('@email').type('danish.ahmed@ki5.co.uk.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').check()
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
  // 23th CASE
  it("abcd@gmail.co.uk in Email & Password Test@123", () => {
    cy.get('@email').type('abcd@gmail.co.uk')
    cy.get('@password').type('Test@123')
    cy.get('@checkBox').check()
    SignInPage.login().then(() => {
      SignInPage.NotificationErrorLogin()
      cy.get('@emailMessage').find('span').invoke('text')
        .should('include', 'Please provide valid e-mail address.')
    })
  });
})