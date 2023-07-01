export {};

const root = process.env.CYPRESS_BASE_URL || 'localhost:3000';
const originalUrl = 'https://en.wikipedia.org/wiki/Computer';
describe('EncoderForm', () => {
  let shortUrl = '';
  beforeEach(() => {
    cy.visit(root); // Assuming the component is rendered at the root path '/'
  });

  it('should handle URL encoding', () => {
    cy.get('input[area-label="URL"]').type(originalUrl); // Use the input[type="text"] selector

    cy.contains('Encode').click();

    cy.get('input[area-label="Result"]').invoke('val').then((value) => {
      shortUrl = (value as string);
    });
    cy.get('input[area-label="Result"]').invoke('val').should('contain', 'http://short.dev');
  });

  it('should handle URL decoding', () => {
    cy.get('input[type="text"]').type(shortUrl); // Use the input[type="text"] selector

    cy.contains('Decode').click();

    cy.get('input[area-label="Result"]').invoke('val').should('contain', originalUrl);
  });

  it('should copy the transformed URL', () => {
    cy.get('input[area-label="URL"]').type(originalUrl); // Use the input[type="text"] selector

    cy.contains('Encode').click();

    cy.contains('Copy').click();

    cy.get('input[area-label="URL"]').focus();

    cy.window({ timeout: 10000 }).then((win) => {
      cy.wrap(win.navigator.clipboard.readText(), { timeout: 5000 }).should('contain', 'http://short.dev');
    });
  });
});
