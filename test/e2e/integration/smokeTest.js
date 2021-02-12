describe("Our first suite", () => {
    let categoryPage = ''
    console.log("1st", categoryPage);
    before("open application", () => {
      cy.visit("/");
    })
    it("successfully loads Homepage", () => {
        cy.url().should("eq", "https://ww2.tilemountain.co.uk/");
    })
    it("Category page", () =>{
        const picked = Math.floor(Math.random()*5)+1
        cy.get(`div.row.center-xs a:nth-child(${picked})`).click()
        // cy.wait('@alias').its('response.statusCode').should('eq', 200)
        cy.wait(6000)
        categoryPage = cy.url()
    })
    it("Sub Category page", () => {
        console.log("1st",categoryPage);
        cy.get('div.category-listing.row.m0.start-md.PAGE div').first().should('have.class', 'col-sm-6 flex col-lg-3 col-md-3 col-xs-6 sb-item').as('subCategory')
        cy.get('@subCategory').click()
        cy.wait(6000)
    })
    it("Range page, Select 1st Product, Add Cut Sample, GoBack, Select 2nd Product", () => {
        cy.wait(1000)
        cy.get('div.product-listing.row.m0.center-xs.start-md div.col-sm-12.col-md-4.flex.col-xs-12.pading').as('Products')
        cy.get('@Products').eq(0).click()
        cy.wait(6000)

        cy.get('button').should('have.class', 'new_button order-sample-cut').contains('TOTALLY FREE CUT SAMPLE').click()
        cy.wait(6000)
        cy.get('#ModalQuickCheckout span').contains('×').click()

        cy.go('back')
        cy.wait(6000)
        cy.get('@Products').eq(1).click()
        cy.wait(6000)
    })
    it("Add to Basket 1 m2", () => {
        cy.get('div.tile-quantity input').should('have.class', 'm0 no-outline base-input-number__input brdr-cl-primary bg-cl-transparent h4').as('m2')
        cy.get('@m2').type('1')
        cy.get('button').contains('Add to basket').as('AddtoBasket')
        cy.get('@AddtoBasket').click()
    })
    it("View Basket from AddtoBasket Pop-up", () => {
        cy.get('div.modal.adhesiveModal a').contains('View Basket').click()
    })
})