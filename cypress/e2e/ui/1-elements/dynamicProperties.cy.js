import DynamicPropertiesPage from "../../pages/elements/DynamicProperties.Page";

describe("", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    DynamicPropertiesPage.navigate();
  });

  it("Deve validar texto com ID dinâmico", () => {
    DynamicPropertiesPage.dynamicID();
  });

  it("Deve aguardar o botão ser habilitado", () => {
    DynamicPropertiesPage.waitButtonActive();
  });

  it("Deve validar a mudança de cor do botão", () => {
    DynamicPropertiesPage.changeColor();
  });

  it("Deve validar o botão que aparece depois de 5 segundos", () => {
    DynamicPropertiesPage.waitButton();
  });
});
