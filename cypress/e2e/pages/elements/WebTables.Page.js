import { faker } from "@faker-js/faker";

class WebTablesPage {
  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  email = faker.internet.email();
  age = faker.number.int({ min: 18, max: 99 });
  salary = faker.finance.amount({ min: 1000, max: 5000, dec: 0 });
  department = faker.person.jobTitle();

  navigate() {
    cy.visit("webtables");
  }

  addItens() {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").type(this.firstName);
    cy.get("#lastName").type(this.lastName);
    cy.get("#userEmail").type(this.email);
    cy.get("#age").type(this.age);
    cy.get("#salary").type(this.salary);
    cy.get("#department").type(this.department);
    cy.get("#submit").click();
  }

  searchItens() {
    cy.get("#searchBox").type(this.firstName);
    cy.get("#basic-addon2").click();
  }

  validation() {
    cy.get(".rt-td").should("contain", this.firstName);
  }
}

export default new WebTablesPage();
