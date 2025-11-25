import ButtonsPage from "../../pages/elements/Buttons.Page";

describe("Funcionalidade de testar cliques", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    ButtonsPage.navigate();
  });

  it("Deve dar 2 cliques e validar", () => {
    ButtonsPage.dbclick();
  });

  it("Deve clicar com o botão direito e validar", () => {
    ButtonsPage.rclick();
  });

  it("Deve clicar e validar", () => {
    ButtonsPage.click();
  });
});
