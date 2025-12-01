class DownloadAndUploadPage {
  navigate() {
    cy.visit("upload-download");
  }

  download() {
    cy.get("#downloadButton").click();
    const caminhoDoArquivo = "cypress/downloads/sampleFile.jpeg";
    cy.readFile(caminhoDoArquivo).should("exist");
  }

  upload() {
    const caminhoDoArquivo = "cypress/fixtures/images.jpg";
    cy.get("#uploadFile").selectFile(caminhoDoArquivo);
    cy.get("#uploadedFilePath").should("contain", "images.jpg");
  }
}

export default new DownloadAndUploadPage();
