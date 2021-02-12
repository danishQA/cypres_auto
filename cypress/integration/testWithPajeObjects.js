const { navigateTo } = require("../support/page_objects/navigationPage")

describe('Tst with Page Objects', () => {

    before('open application', () => {
        cy.visit('/')
    })

    it('verify Account Login Page', () => {
        navigateTo.AccountPage()
    })
})