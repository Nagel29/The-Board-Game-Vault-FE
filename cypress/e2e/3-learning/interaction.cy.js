/// <reference types="cypress" />

describe("interacting with input field", () => {
  beforeEach(() => {
    cy.visit("https://google.com")
  })

  it("click on input field", () => {
    cy.get('[name="q"]').click()
    cy.get(".OBMEnb > .ynRric").contains("Trending searches")
    cy.get('.lnXdpd').click()
    cy.get(".OBMEnb > .ynRric").should('not.be.visible')
  })

  it('type bitfumes on the search input field and asset suggestion', () => {
    cy.get("[name='q']").type('bitfumes')
    cy.get('.erkvQe > .OBMEnb > ul').find('li').eq(1).contains('bitfumes youtube')
  })

})
