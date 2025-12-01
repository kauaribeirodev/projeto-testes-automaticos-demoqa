import BrokenLinkImagePage from "../../pages/elements/BrokenLinkImage.Page";

describe("Funcionalidade de testar imagens e links", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    BrokenLinkImagePage.navigate();
  });

  it("Deve validar se imagem está quebrada", () => {
    BrokenLinkImagePage.brokenImage();
  });

  it("Deve validar se link está carregando", () => {
    BrokenLinkImagePage.validLink();
  });

  it.only("Deve validar se link está quebrado", () => {
    BrokenLinkImagePage.brokenLink();
  });
});
