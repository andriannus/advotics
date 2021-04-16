describe("Home Page", () => {
  it("should show heading", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});
