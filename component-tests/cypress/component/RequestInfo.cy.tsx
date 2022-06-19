import { mount } from "cypress/react";
import { RequestInfo } from "../../src/RequestInfo";

describe("RequestInfo.cy.js", () => {
  it("playground", () => {
    cy.intercept(/nominatim/, (req) => {
      req.reply({
        statusCode: 200,
        body: req.query["q"] === "Domgasse 5" ? [true] : [],
      });
    });

    mount(<RequestInfo></RequestInfo>);
    cy.get("[data-testid=address]").type("Domgasse 5");
    cy.get("[data-testid=btn-search]").click();
    cy.get("[data-testid=message]").should("have.text", "Brochure sent");

    cy.get("[data-testid=address]").clear().type("Domgasse 15");
    cy.get("[data-testid=btn-search]").click();
    cy.get("[data-testid=message]").should("have.text", "Address not found");
  });
});
