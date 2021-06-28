
const visitHomepage = (() => {
    cy.visit('/')
    cy.wait(1000)
})

const search = ((searchItem) => {
    cy.get('input[placeholder="Search..."]').focus().should('be.empty').type(searchItem)
    .then((searchBar)=>{
        cy.intercept('GET','**/v1/core/*').as('searchPage')
        cy.wrap(searchBar).invoke('val').should('not.be.empty')
        cy.wait(2000)
        cy.wrap(searchBar).type('{backspace}')
        cy.get('[class="back-layout"]').should('have.attr', 'style', 'display: block;')
        cy.wrap(searchBar).type('{enter}')
        cy.wait('@searchPage')
    })

})

const selectCategory = ((category)=> {
    cy.contains('[class="level-top sb-forward"]', category).click()
})

const selectRange = ((range)=> {
    cy.contains('[class="category-product-name"]', range).click()
})

const checkSqmQuantity = (() => {
    cy.get('.sqm')
    .should('not.contain', 'Out of Stock')
    .and('not.contain', 'More Stock Due')
    .and('not.contain', 'More Stock Due */*/*')
    .and('contain', 'in Stock')
})

const addSample = ((sample, type) => {
    cy.intercept('GET','**/sample-options/*/*').as('sampleBooklet')
    cy.contains('button[type="button"] span', type).click()
    if(type == 'TOTALLY FREE CUT SAMPLE'){
        sample++
        cy.wait('@sampleBooklet')
    }
})

const closeSampleBooklet = (() => {
    cy.get('div.modal[style="display: none;"]').should('not.exist')
    cy.get('#ModalQuickCheckout span.close').should('contain', '×').click()
})

const gotoBasket = (() => {
    cy.intercept('GET','**/checkout').as('checkout')
    cy.get('#minicarticon').click()
    cy.wait('@checkout')
})

const fillAddress = (() => {

    cy.fixture("sampleAddress").then((jsonData)=> {
        console.log('jsonData',jsonData)
        cy.get('form [placeholder="First Name *"]').type(jsonData.Firstname)
        cy.get('form [placeholder="Last Name *"]').type(jsonData.Lastname)
        cy.get('form [placeholder="Postcode *"]').type(jsonData.Postcode)
        cy.get('[value="Find Address"]').click().then(() => {
            cy.wait(2000)
            cy.get('select').select('TILE MOUNTAIN SHOWROOM, Brownhills Road, STOKE-ON-TRENT')
        })
        cy.get('form [placeholder="Email *"]').type(jsonData.Email)
        cy.get('form [placeholder="Telephone *"]').type(jsonData.Telephone)
    })
})

const submitSampleForm = (()=> {
    cy.contains('.btn-sample-request', 'Request Samples').click()
})

const sortBy = (() => {
    cy.get('select[name="sortby"]')
    .select('Price: Low to high', { force: true })
})

export class NavigationPage{
    visitHomepage(){
        return visitHomepage()
    }
    search(searchItem){
        return search(searchItem)
    }
    selectCategory(category){
        return selectCategory(category)
    }
    selectRange(range){
        return selectRange(range)
    }
    checkSqmQuantity(){
        return checkSqmQuantity()
    }
    addSample(sample, type){
        return addSample(sample, type)
    }
    closeSampleBooklet(){
        return closeSampleBooklet()
    }
    fillAddress(){
        return fillAddress()
    }
    submitSampleForm(){
        return submitSampleForm()
    }
    sortBy(){
        return sortBy()
    }
    gotoBasket(){
        return gotoBasket()
    }
}

export const onNavigationPage = new NavigationPage()