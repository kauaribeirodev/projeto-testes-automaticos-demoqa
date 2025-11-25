class LinksPage {
  navigate() {
    cy.visit("links");
  }

  linkOpen() {
    cy.get("#simpleLink").click().should("have.attr", "target", "_blank");
    cy.get("#dynamicLink").click().should("have.attr", "target", "_blank");
  }

  LinksApiCall() {
    cy.get("#created").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 201 and status text Created");

    cy.get("#no-content").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 204 and status text No Content");

    cy.get("#moved").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 301 and status text Moved Permanently");

    cy.get("#bad-request").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 400 and status text Bad Request");

    cy.get("#unauthorized").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 401 and status text Unauthorized");

    cy.get("#forbidden").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 403 and status text Forbidden");

    cy.get("#invalid-url").click();
    cy.get("#linkResponse").should("contain", "Link has responded with staus 404 and status text Not Found");
  }
}

export default new LinksPage();
