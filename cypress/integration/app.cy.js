describe('App.vue', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('debería mostrar la lista inicial de héroes', () => {
      cy.contains('Batman');
      cy.contains('Superman');
      cy.contains('Mujer Maravilla');
      cy.contains('Flash');
      cy.contains('Linterna');
      cy.contains('Americaman');
    });
  
    it('debería agregar un nuevo héroe a la lista', () => {
      cy.get('input#nombre').type('Spiderman');
      cy.get('input#liga').type('liga1');
      cy.get('input#peso').type('75');
      cy.get('input#raza').type('humano');
      cy.get('form').submit();
  
      cy.contains('Spiderman');
      cy.contains('liga1');
      cy.contains('75');
      cy.contains('humano');
    });
  
    it('debería borrar los datos del formulario después de enviar', () => {
      cy.get('input#nombre').type('Spiderman');
      cy.get('input#liga').type('liga1');
      cy.get('input#peso').type('75');
      cy.get('input#raza').type('humano');
      cy.get('form').submit();
  
      cy.get('input#nombre').should('have.value', '');
      cy.get('input#liga').should('have.value', '');
      cy.get('input#peso').should('have.value', '0');
      cy.get('input#raza').should('have.value', '');
    });
  });