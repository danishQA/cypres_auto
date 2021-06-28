
const randomGenerator = (number) => {
    return Math.round(Math.random() * (number-1) +1)
}

const randomProduct = (() => {
    cy.get('.col-sm-6.col-md-4.flex.col-xs-6.pading.listingtile').its('length').then(($lenght) => {
        let firstRandomProduct = randomGenerator($lenght)
        // cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        cy.get(`div:nth-child(${firstRandomProduct}).col-sm-6.col-md-4.flex.col-xs-6.pading.listingtile`).click()
    })
})

const randomProductforSample = (() => {
    return cy.get('.col-sm-6.col-md-4.flex.col-xs-6.pading.listingtile').its('length').then(($lenght) => {
        let firstRandomProduct = randomGenerator($lenght)
let arr = []
let selected = false
        cy.get('.col-sm-6.col-md-4.flex.col-xs-6.pading.listingtile').each( (e) => {
            if(e !== firstRandomProduct) {
                cy.get(`div:nth-child(${firstRandomProduct}).col-sm-6.col-md-4.flex.col-xs-6.pading.listingtile`).click()
                // cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
                cy.get('body').then(body => {
                    console.log(body.find('TOTALLY FREE CUT SAMPLE'))
                    if(body.find('TOTALLY FREE CUT SAMPLE').length){
                        cy.contains('button[type="button"] span', 'TOTALLY FREE CUT SAMPLE').click()
                        selected = true
                        return
                    }
                    else{
                        // cy.go(-1)
                        arr.push(firstRandomProduct)
                        randomProductforSample()
                    }
            })
        }
            })
        // cy.get(`div:nth-child(${firstRandomProduct}).col-sm-6.col-md-4.flex.col-xs-6.pading.listingtile`).click()
    })
})

const randomCustomeAlsoliked = (() => {
    cy.get('.VueCarousel-slide.slider-new-main').its('length').then(($lenght) => {
        let firstRandomProduct = randomGenerator($lenght)
        // cy.wait('@homepageResponse').its('response.statusCode').should('eq', 200)
        cy.get(`div:nth-child(${firstRandomProduct}).VueCarousel-slide.slider-new-main`)
        .click()
    })
})

export class randomSelection{
    randomProduct(){
        return randomProduct()
    }
    randomCustomeAlsoliked(){
        return randomCustomeAlsoliked()
    }
    randomProductforSample(){
        return randomProductforSample()
    }

}

export const onrandomSelection = new randomSelection()