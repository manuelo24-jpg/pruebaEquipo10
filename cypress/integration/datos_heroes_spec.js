describe('DatosHeroes.vue', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('debería mostrar la lista de héroes correctamente', () => {
      cy.get('.listaHeroes').should('contain', 'Batman');
      cy.get('.listaHeroes').should('contain', 'Superman');
      cy.get('.listaHeroes').should('contain', 'Mujer Maravilla');
      cy.get('.listaHeroes').should('contain', 'Flash');
      cy.get('.listaHeroes').should('contain', 'Linterna');
      cy.get('.listaHeroes').should('contain', 'Americaman');
    });
  });