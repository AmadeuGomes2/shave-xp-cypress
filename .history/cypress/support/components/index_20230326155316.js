

class Header {

    userShouldBeLoggedId(name) {
        cy.get('.logged-user div a')
            .should('be.visible')
            .should('have.text', 'Olá, ' + name)

    }
}