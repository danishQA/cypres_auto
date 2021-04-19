describe("Our first suite", () => {
    const randomGenerator = (number) => {
        return Math.round(Math.random() * (number-1) +1)
      }
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })
    // it("open application", () => {
    //   cy.visit("/")
    //   cy.clearCookies()
    //   cy.reload()
    // })
    it("successfully loads Homepage", () => {
        cy.visit("/")
        cy.url().should("eq", "https://bathroommountain.co.uk/");
    })
    it("Category page", () =>{
        const picked = Math.floor(Math.random()*5)+1
        cy.get(`ul.flex.menu li:nth-child(${picked}).sb-menu.nav-item.level0.nav-1.level-top.first.nav-item--parent.mega.nav-item--only-blocks.parent a.level-top.sb-forward`).click()
        cy.wait(6000)
    })
    it("Selecting Product on Sub Category page", () => {
        cy.get('div#subcategory-list div div.col-sm-6.flex.col-lg-3.col-md-3.col-xs-6.sb-item').its('length').then(($lenght) => {
            const listElementNumber = randomGenerator($lenght)
            cy.get(`div.product-listing.row.m0.start-md div:nth-child(${listElementNumber})`).click()
            cy.wait(6000)
        })
    })
})