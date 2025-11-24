class radioButtonPage {
  navigate() {
    cy.visit("radio-button");
  }

  yesButton() {
    cy.get('#app label[for="yesRadio"]').click();
    cy.get(".text-success").should("contain", "Yes");
  }

  impressiveButton() {
    cy.get('#app label[for="impressiveRadio"]').click();
    cy.get(".text-success").should("contain", "Impressive");
  }
}

export default new radioButtonPage();
