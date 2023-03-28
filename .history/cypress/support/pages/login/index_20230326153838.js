

class LoginPage {

    submit(email, password) {

        cy.visit('http://localhost:3000/')

        cy.get('input[placeholder$="email"]')
            .type(email)

        cy.get('input[placeholder*=senha]')
            .type(password)

        cy.contains('button', 'Entrar')
            .click()
    }

}
export default new LoginPage()