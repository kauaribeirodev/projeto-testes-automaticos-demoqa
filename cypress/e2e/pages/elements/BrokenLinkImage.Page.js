class BrokenLinkImagePage {
  navigate() {
    cy.visit("broken");
  }

  brokenImage() {
    cy.get('img[src="/images/Toolsqa_1.jpg"]')
      .should("be.visible")
      .and(($img) => {
        // Valida se imagem está quebrada
        expect($img[0].naturalWidth).to.equal(0);
      });
  }

  validLink() {
    cy.contains("a", "Click Here for Valid Link").then(($link) => {
      const href = $link.prop("href");

      cy.request(href).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body).to.not.be.null;
      });
    });
  }

  brokenLink() {
    cy.contains("a", "Click Here for Broken Link").then(($link) => {
      const href = $link.prop("href");
      cy.request({
        url: href,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(500);
        expect(response.body).to.not.be.null;
      });
    });
  }
}

export default new BrokenLinkImagePage();
