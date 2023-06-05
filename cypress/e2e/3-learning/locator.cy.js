describe("learn about locators", () => {
  beforeEach(() => {
    cy.visit("https://google.com")
  })

  it("can locat a button on the page", () => {
    cy.get('[name="btnI"]')
      .should("have.value", "I'm Feeling Lucky")
      .and("have.attr", "type", "submit")
  })
})
