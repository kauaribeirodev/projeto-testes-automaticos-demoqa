import checkboxPage from "../../pages/elements/checkbox.Page";

describe("Funcionalidade de testar a checkbox com POM", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    checkboxPage.navigate();
    checkboxPage.expandAll();
  });

  it("Deve selecionar e validar Home", () => {
    checkboxPage.selectOption("Home");
    checkboxPage.validateSelection();
  });

  it("Deve selecionar e validar Notes", () => {
    checkboxPage.selectOption("Notes");
    checkboxPage.validateSelection();
  });

  it("Deve selecionar os filhos do Workspace", () => {
    checkboxPage.selectOption("React");
    checkboxPage.selectOption("Angular");
    checkboxPage.selectOption("Veu");
    checkboxPage.validateSelection();
  });

  it("Deve selecionar um filho do Download e Validar", () => {
    checkboxPage.selectOption("Word File.doc");
    checkboxPage.validateSelection();
  });
});
