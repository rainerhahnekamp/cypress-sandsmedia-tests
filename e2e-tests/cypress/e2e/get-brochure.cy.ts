it("should request a brochure", () => {
  cy.intercept(/nominatim/, (req) => {
    req.reply({
      statusCode: 200,
      body: req.query["q"] === "Domgasse 5" ? [true] : [],
    });
  });
  cy.visit("");
  cy.open("Holidays");
  cy.testid("btn-brochure").first().click();

  cy.testid("address").type("Domgasse 5");
  cy.testid("btn-search").click();
  cy.get(".mat-snack-bar-container").should("contain.text", "Brochure sent");

  cy.testid("address").clear().type("Domgasse 15");
  cy.testid("btn-search").click();
  cy.get(".mat-snack-bar-container").should(
    "contain.text",
    "Address not found"
  );
});
