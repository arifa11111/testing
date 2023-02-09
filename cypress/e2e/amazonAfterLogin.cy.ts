context('Amazon Application testing with Cypress',()=>{
   

describe('Amazon Application testing After login',()=>{
    it('Enable prime option for items', ()=> {
       cy.visit(`${Cypress.config().baseUrl}`)
    })
})
})