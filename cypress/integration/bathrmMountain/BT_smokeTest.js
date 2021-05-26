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

    })
    it("Selecting Product on Sub Category page", () => {
        cy.wait(6000)
        cy.get('div.product-listing.row.m0.start-md').its('length').then(($lenght) => {
            const listElementNumber = randomGenerator($lenght)
            cy.get(`div.product-listing.row.m0.start-md div:nth-child(${listElementNumber}).col-sm-6.flex.col-xs-6.col-md-3`).click()
            cy.wait(6000)
        })
    })
    it("Add to Basket", () => {
        cy.get('div.product-qty-and-add-to-cart').then(($addToBskt) => {
            cy.get($addToBskt).find('input.m0.no-outline.base-input-number__input').type('2')
            cy.get($addToBskt).find('button').contains('Add to basket').click()
        })
        cy.get('a[href="/checkout"]').contains('PROCEED to checkout').click()
        cy.wait(2000)
    })
    it("Checkout process", () => {
         // Personal Delivery Details
        cy.get('input[name="first-name"].py10.w-100.border-box.brdr-none.brdr-bottom-1.brdr-cl-primary.h4.sans-serif')
        .type('Danish')
        cy.get('input[name="last-name"].py10.w-100.border-box.brdr-none.brdr-bottom-1.brdr-cl-primary.h4.sans-serif')
        .type('Ahmed')
        cy.get('input[name="email-address"].py10.w-100.border-box.brdr-none.brdr-bottom-1.brdr-cl-primary.h4.sans-serif')
        .type('danish.ahmed@ki5.co.uk')
        
        cy.get('button').contains('Continue to Delivery').click().then( () => {
            cy.get('input#search-bar').type('ST6 4JU')

            cy.get('button').contains('Find Address').click().then(() => {
                cy.wait(6000)
                cy.get('div#crafty_postcode_result_display_1 select#crafty_postcode_lookup_result_option1').as('AddressLookup')
                cy.get('@AddressLookup').select('TILE MOUNTAIN SHOWROOM, Brownhills Road, STOKE-ON-TRENT')
            })

            cy.get('input[name="phone-number"].py10.w-100.border-box.brdr-none.brdr-bottom-1.brdr-cl-primary.h4.sans-serif').type('12345678')
        
        //      // Delivery Date Box
        // cy.get('div.calendar-box div.vc-grid-container.vc-weeks div.vc-grid-cell').not('.vc-grid-cell-col--1').not('.vc-grid-cell-col--7').then(mainDiv =>{
        //     cy.get(mainDiv).find('div.vc-h-full').not('.vc-opacity-0').not('.vc-pointer-events-none').then(innerDiv => {
        //         var randomDeliveryDate
        //         cy.get(innerDiv).find('span.vc-day-content').not('.vc-text-gray-400').then(span =>{
                    
        //             cy.get(span).its('length').should('be.gt', 0).then($lenght =>{
        //                 randomDeliveryDate = randomGenerator($lenght) - 1
        //                 console.log($lenght);
        //                 cy.get(span[randomDeliveryDate]).click()
        //             })
        //         })     
        //     })
        // }).then(() => {

        //     // Confirm Delivery
        //     cy.get('button#shippingSubmitBtnId').contains('Confirm Delivery:').click().then(() => {
        //         cy.wait(1000)
        //     })
        })
        cy.wait(2000)
    })
})

