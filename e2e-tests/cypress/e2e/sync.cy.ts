it("mixes asynchronous and synchronous code", () => {
  cy.visit("");
  cy.get("[data-testid=btn-customers").then(($btn) => {
    expect($btn).to.have.text("Customers");
    expect($btn.text()).equal("Customers"); // Alternative
  });
});
