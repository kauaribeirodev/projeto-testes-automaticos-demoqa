class TextBox {
  text(fullName, email, currentAddress, permanentAddress) {
    // Preenche
    cy.get("#userName").type(fullName);
    cy.get("#userEmail").type(email);
    cy.get("#currentAddress").type(currentAddress);
    cy.get("#permanentAddress").type(permanentAddress);

    // Clica
    cy.get("#submit").click();

    // Valida se o label "Name:" apareceu na resposta
    cy.get("#name").should("contain", "Name:");
  }
}

export default new TextBox();
