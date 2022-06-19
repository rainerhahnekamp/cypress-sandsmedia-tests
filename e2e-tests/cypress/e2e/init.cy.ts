it("should rename Latitia to Laetitia", () => {
  cy.visit("");
  cy.open("Customers");
  cy.testid("row-customer")
    .filter(":contains('Bellitissa, Latitia')")
    .find("[data-testid=btn-edit]")
    .click();
  cy.testid("inp-firstname").clear().type("Laetitia");
  cy.testid("btn-submit").click();

  cy.testid("row-customer").should("contain.text", "Bellitissa, Latitia");
});
