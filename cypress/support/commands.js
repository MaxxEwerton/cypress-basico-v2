Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Ewerton')
    cy.get('#lastName').type('Max')
    cy.get('#email').type('max@teste.com')
    cy.get('#open-text-area').type('Testes')
    cy.contains('button', 'Enviar').click()
})