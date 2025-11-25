class ButtonsPage {
  navigate() {
    cy.visit("buttons");
  }

  dbclick() {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should("contain", "You have done a double click");
  }

  rclick() {
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should("contain", "You have done a right click");
  }

  click() {
    cy.get(".btn-primary").click({ multiple: true });
    cy.get("#dynamicClickMessage").should("contain", "You have done a dynamic click");
  }
}

export default new ButtonsPage();
