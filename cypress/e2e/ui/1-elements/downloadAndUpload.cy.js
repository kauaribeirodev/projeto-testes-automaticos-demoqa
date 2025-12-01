import DownloadAndUploadPage from "../../pages/elements/DownloadAndUpload.Page";

describe("Funcionalidade Testar Download and Upload", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    DownloadAndUploadPage.navigate();
  });

  it("Deve validar download", () => {
    DownloadAndUploadPage.download();
  });

  it("Deve validar o Upload", () => {
    DownloadAndUploadPage.upload();
  });
});
