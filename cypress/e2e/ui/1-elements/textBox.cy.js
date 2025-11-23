describe("Deve testar a caixa de texto", () => {
  it("passes", () => {
    cy.visit("text-box");
    cy.get("#userName").type(faker.person.fullName);
  });
});
