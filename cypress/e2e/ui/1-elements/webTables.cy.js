import WebTablesPage from "../../pages/elements/WebTables.Page";

describe("Funcionalidade testar tabela adicionando produtos e pesquisando informação", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    WebTablesPage.navigate();
  });

  it("Deve adicionar um produto na tabela", () => {
    WebTablesPage.addItens();
    WebTablesPage.searchItens();
    WebTablesPage.validation();
  });
});
