describe("Our first suite", () => {
    const randomGenerator = (number) => {
        return Math.round(Math.random() * (number-1) +1)
      }
    let categoryPage = ''
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })
    it("open application", () => {
      cy.visit("/")
      cy.clearCookies()
      cy.reload()
    })
    it("successfully loads Homepage", () => {
        cy.url().should("eq", "http://178.62.80.156/");
    })
    it("Category page", () =>{
        // const picked = Math.floor(Math.random()*7)+1
        // cy.get(`div.container ul.flex.menu li:nth-child(${picked}).sb-menu.nav-item.level0.nav-1.level-top.first.nav-item--parent.mega.nav-item--only-blocks.parent`).click()
        const picked = Math.floor(Math.random()*5)+1
        cy.get(`div.familiar-brands div.row.center-xs a:nth-child(${picked}).brand-detail.col-lg-4.col-md-4.col-sm-6.col-xs-12`).click()
        cy.wait(6000)
        categoryPage = cy.url
    })
    it("Sub Category page", () => {
        cy.get('div#subcategory-list div div.col-sm-6.flex.col-lg-3.col-md-3.col-xs-6.sb-item').its('length').then(($lenght) => {
            const listElementNumber = randomGenerator($lenght)
            cy.get(`div.category-listing.row.m0.start-md.PAGE div:nth-child(${listElementNumber})`).click()
            cy.wait(6000)
        })
    })
    it("Range page, Select 1st Product, Add to Basket 1 m2, GoBack, Select 2nd Product, Add Cut Sample", () => {
        cy.get('div#products-list-new div div.col-sm-12.col-md-4.flex.col-xs-12.pading').its('length').then(($lenght) => {
            var firstRandomProduct = randomGenerator($lenght)
            cy.get(`div.product-listing.row.m0.center-xs.start-md div:nth-child(${firstRandomProduct}).col-sm-12.col-md-4.flex.col-xs-12.pading`).as('firstProduct')
            cy.get('@firstProduct').click()
            cy.wait(6000)
            cy.get('div.col-xs-6.col-md-6.col-lg-6.col-xl-5 span.sqm')
            .should('not.contain', 'Out of Stock')
            .and('not.contain', 'More Stock Due')
            .and('not.contain', 'More Stock Due */*/*')
            .then(($span) =>{
                    cy.get('div.tile-quantity input').should('have.class', 'm0 no-outline base-input-number__input brdr-cl-primary bg-cl-transparent h4').as('m2')
                    cy.get('@m2').type('1')
                    cy.get('button').contains('Add to basket').as('AddtoBasket')
                    cy.get('@AddtoBasket').click()
                    cy.get('div.bottom-button div.col-xs-6.col-md-6.col-lg-6.pr0').contains('Continue Shopping').click()
            })
            if($lenght>1){
                cy.go('back')
                cy.wait(6000)
                var secondRandomProduct = randomGenerator($lenght)
                if(firstRandomProduct===secondRandomProduct && $lenght>secondRandomProduct){
                    secondRandomProduct++
                } else if($lenght==secondRandomProduct){
                    secondRandomProduct--
                }
                cy.get(`div.product-listing.row.m0.center-xs.start-md div:nth-child(${secondRandomProduct}).col-sm-12.col-md-4.flex.col-xs-12.pading`).as('secondProduct')
                cy.get('@secondProduct').click()
                cy.wait(6000)
                cy.get('button').should('have.class', 'new_button order-sample-cut').contains('TOTALLY FREE CUT SAMPLE').click()
                cy.wait(2000)
                // cy.get('#ModalQuickCheckout span').contains('×').click()
            }
        })
    })
    it("View Basket from AddtoBasket Pop-up", () => {
        cy.get('div.flex.inner-icons button#minicarticon').click().then(() => {
        cy.get('div.mw-100 div.col-xs-12.col-md-9.check-btn').contains('View Basket').click()
        })
        cy.wait(2000)
        cy.url().should('eq','http://178.62.80.156/cart')
    })
    it('To Checkout page', () => {
        cy.get('a')
        .contains('Proceed To Checkout')
        .should('have.attr', 'href', '/checkout')
        .click()
    })
    it('Checkout page',() =>{
        // Personal Delivery Details
        cy.get('div.personal-details.line.relative input[name="first-name"]').as('firstName')
        cy.get('@firstName').type('danish')

        cy.get('div.personal-details.line.relative input[name="last-name"]').as('lastName')
        cy.get('@lastName').type('ahmed')

        cy.get('div.personal-details.line.relative input[name="email-address"]').as('emailAddress')
        cy.get('@emailAddress').type('danish.ahmed@ki5.co.uk')

        // Billing Details
        cy.get('div.pt20.billing-details input#search-bar').as('Postcode')
        cy.get('@Postcode').type('ST6 4JU')

        cy.get('div.pt20.billing-details button#find-address').contains('Find Address').click().then(() => {
            cy.wait(1000)
            cy.get('div#crafty_postcode_result_display_1 select#crafty_postcode_lookup_result_option1').as('AddressLookup')
            cy.get('@AddressLookup').select('TILE MOUNTAIN SHOWROOM, Brownhills Road, STOKE-ON-TRENT')
        })

        cy.get('div.pt20.billing-details div.shipping-phone-number.req-label input[name="phone-number"]').as('Telephone')
        cy.get('@Telephone').type('12345678')

        cy.get('div.pt20.billing-details div.mobile-number input[name="phone-number"]').as('Mobile')
        cy.get('@Mobile').type('123456789')

        // Delivery Date Box
        cy.get('div.calendar-box div.vc-grid-container.vc-weeks div.vc-grid-cell').not('.vc-grid-cell-col--1').not('.vc-grid-cell-col--7').then(mainDiv =>{
            cy.get(mainDiv).find('div.vc-h-full').not('.vc-opacity-0').not('.vc-pointer-events-none').then(innerDiv => {
                var randomDeliveryDate
                cy.get(innerDiv).find('span.vc-day-content').not('.vc-text-gray-400').then(span =>{
                    
                    cy.get(span).its('length').should('be.gt', 0).then($lenght =>{
                        randomDeliveryDate = randomGenerator($lenght) - 1
                        console.log($lenght);
                        cy.get(span[randomDeliveryDate]).click()
                    })
                })     
            })
        }).then(() => {

            // Confirm Delivery
            cy.get('button#shippingSubmitBtnId').contains('Confirm Delivery:').click().then(() => {
                cy.wait(1000)
            })

            // Debit or Credit Card Payment Method
            cy.get('label').contains('Debit or Credit Card').find('span.checkmark.black-border-checkmark.allunchecked').click().then(() =>{
                cy.wait(1000)
                cy.get('form#payment-form iframe#singleIframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).then(wrapped => {
                    cy.get(wrapped).find('input#checkout-frames-card-number').type('4242424242424242').then(() => {
                        cy.get(wrapped).find('input#checkout-frames-expiry-date').type('0128')
                        cy.get(wrapped).find('input#checkout-frames-cvv').type('100')
                    })
                })
            }).then(() => {
                cy.get('div.cart-bottom-detail-inner').click().then(()=>{
                    // cy.server()
                    // cy.route('https://3ds2-sandbox.ckotech.co/interceptor/*/device-information').as('checkoutCom')
                    // cy.wait('@checkoutCom')
                    cy.wait(16000)
                    cy.get('iframe[name="cko-3ds2-iframe"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).then(wrapped => {
                        cy.get(wrapped).find('input#password').type('Checkout1!')
                        cy.get(wrapped).find('input#txtButton').contains('Continue').click()
                    // cy.wait(12000)
                    // cy.route('https://3ds2-sandbox.ckotech.co/interceptor/*/device-information').then(() => {
                        // cy.get('input#password').type('Checkout1!')
                        // cy.get('input#txtButton').contains('Continue').click()
                    // })
                    }).then(() => {

                        // Success page
                        cy.wait(6000)
                        cy.location('href').should('contains', '/success?cko-session-id')
                    })
                })
            })  
        })
    })
    // it('Success Page',() =>{
    //     cy.wait(3000)
    //     cy.location().should('contains', 'success?cko-session-id')
    // })
})