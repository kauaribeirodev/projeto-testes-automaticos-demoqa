class CheckboxPage {
  navigate() {
    cy.visit("checkbox");
  }

  expandAll() {
    cy.get("#tree-node button.rct-option-expand-all").click();
  }

  selectOption(nameOption) {
    cy.contains("label", nameOption).find("span.rct-checkbox").click();
  }
  validateSelection() {
    cy.get("#result").should("contain", "You have selected :");
  }
}

export default new CheckboxPage();
