import LinksPage from "../../pages/elements/Links.Page";

describe("Funcionalidade de testar os links", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    LinksPage.navigate();
  });

  it("Deve validar se link abre em uma nova guia", () => {
    LinksPage.linkOpen();
  });

  it("Deve validar se link está enviando chamada de API", () => {
    LinksPage.LinksApiCall();
  });
});
