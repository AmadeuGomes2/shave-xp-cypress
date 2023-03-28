

class LoginPage {

    submit(email = null, password = null) {

        cy.visit('/')

        if (email) {
            cy.get('input[placeholder$="email"]')
            .type(email)
        }
        if (password){
        cy.get('input[placeholder*=senha]')
            .type(password)
        }
        cy.contains('button', 'Entrar')
            .click()
    }
    noticeShouldBe(message) {
        cy.get('.notice-container')
            .should('be.visible')
            .find('.error p')
            .should('have.text', message)

    }

}
export default new LoginPage()