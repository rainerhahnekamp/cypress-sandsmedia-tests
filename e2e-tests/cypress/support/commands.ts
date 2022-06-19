export {};

declare global {
  namespace Cypress {
    interface Chainable {
      testid(testid: string): Chainable<JQuery<HTMLElement>>;
      open(item: "Customers" | "Holidays"): void;
    }
  }
}

Cypress.Commands.add("testid", (testid: string) =>
  cy.get(`[data-testid=${testid}]`)
);

Cypress.Commands.add("open", (item: "Customers" | "Holidays") =>
  cy.testid("btn-" + item.toLowerCase()).click()
);
