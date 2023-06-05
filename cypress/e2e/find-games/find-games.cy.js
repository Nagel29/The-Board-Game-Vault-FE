describe("Find Games page", () => {
  beforeEach(() => {
    cy.intercept("https://api.boardgameatlas.com/api/*", {
      method: "GET",
      fixture: "../fixtures/find-games.json",
    })

    cy.visit("http://127.0.0.1:5173/FindGames")
  })

  it("should load catan", () => {
    cy.get(
      ":nth-child(1) > .MuiBox-root > .MuiPaper-root > .MuiCardMedia-root"
    ).should("be.visible")
  })
})
