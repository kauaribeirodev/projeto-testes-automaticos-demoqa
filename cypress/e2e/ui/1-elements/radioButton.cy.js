import RadioButtonPage from "../../pages/elements/RadioButton.Page";

describe("Funcionalidade testar o Radio Button", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    RadioButtonPage.navigate();
  });

  it("Deve testar o Yes", () => {
    RadioButtonPage.yesButton();
  });

  it.only("Deve testar o Impressive", () => {
    RadioButtonPage.impressiveButton();
  });
});
