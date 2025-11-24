import TextBox from "../../pages/elements/TextBox.Page";
import { faker } from "@faker-js/faker";

describe("Funcionalidade de textar a caixa de texto", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    cy.visit("text-box");
  });
  it("Deve testar a caixa de texto", () => {
    TextBox.text(
      faker.person.fullName(),
      faker.internet.email(),
      faker.location.streetAddress(),
      faker.location.streetAddress()
    );
  });
});
