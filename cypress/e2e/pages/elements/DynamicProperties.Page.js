class DynamicPropertiesPage {
  navigate() {
    cy.visit("dynamic-properties");
  }

  dynamicID() {
    cy.contains("p", "This text has random Id").should("be.visible");
  }

  waitButtonActive() {
    cy.get("#enableAfter").should("be.enabled", { timeout: 6000 });
  }

  changeColor() {
    cy.get("#colorChange").should("have.class", "text-danger", { timeout: 6000 });
  }

  waitButton() {
    cy.get("#visibleAfter", { timeout: 6000 }) // Aumentamos o tempo de busca
      .should("be.visible");
  }
}

export default new DynamicPropertiesPage();
