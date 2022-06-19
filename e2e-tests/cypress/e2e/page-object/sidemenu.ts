export class Sidemenu {
  open(item: "Customers" | "Holidays") {
    cy.get("[data-testid=btn-" + item.toLowerCase() + "]").click();
  }
}

export const sidemenu = new Sidemenu();
