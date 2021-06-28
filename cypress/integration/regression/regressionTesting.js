
import { onNavigationPage } from "../../support/page_objects/navigationPage"
import { onrandomSelection } from "../../support/page_objects/randomSelection"
let sample = 0

describe("Regression Testing", () => {
    before(function () {
    //     cy.fixture('sampleAddress').then((address) => {
    //       this.address = address;
    //       console.log(this.address)
    //     })

      })

    beforeEach(() => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false
        })
        onNavigationPage.visitHomepage()
    })
    it("Free samples", () =>{
        cy.intercept('GET','**/v1/core/*', ()=>{}).as('homepageResponse')

        onNavigationPage.selectCategory('Floor')
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onNavigationPage.selectRange('Carrara')
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        // cy.intercept('GET','**/vue_storefront_magento_1/product/*', ()=>{}).as('PLPResponse')
        // cy.wait('@PLPResponse').its('response.statusCode').should('eq', 200)
        onrandomSelection.randomProduct()
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onNavigationPage.checkSqmQuantity()

        onNavigationPage.addSample(sample, 'TOTALLY FREE CUT SAMPLE')
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onNavigationPage.closeSampleBooklet()

        console.log(sample)
        onNavigationPage.selectCategory('Floor')
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onNavigationPage.selectRange('Doblo')
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onrandomSelection.randomProduct()
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onNavigationPage.checkSqmQuantity()

        onNavigationPage.addSample(sample, 'TOTALLY FREE CUT SAMPLE')
        cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)

        if(sample && sample>1 && sample<4){
            console.log('sample qty',sample)
            onNavigationPage.closeSampleBooklet()
        }
        
        onNavigationPage.fillAddress()
        onNavigationPage.submitSampleForm()
        // cy.get('form [placeholder="First Name *"]').type(this.address.Firstname)
    })
    it("Bundles", () => {
        onNavigationPage.selectCategory('Accessories')

    })
    it.only('Full Sample Converter', () => {
        cy.intercept('GET','**/v1/core/*', ()=>{}).as('homepageResponse')
        onNavigationPage.search('metro tiles ')
        onNavigationPage.sortBy()
        // onrandomSelection.randomProduct()
        // cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        // onNavigationPage.addSample(sample, 'Full Size Sample')
        // cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        // cy.scrollTo('center')
        // onrandomSelection.randomCustomeAlsoliked()
        // cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        onrandomSelection.randomProductforSample()
        // onNavigationPage.gotoBasket()
    })
})