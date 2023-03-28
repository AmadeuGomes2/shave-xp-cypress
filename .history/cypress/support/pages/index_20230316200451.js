

class LoginPage {

    submit(email, password) {

        cy.visit('http://localhost:3000/')

        cy.get('input[placeholder$="email"]')
        .type(user.email)

        cy.get('input[placeholder*=senha]')
        .type(user.password)

        cy.contains('button', 'Entrar')
        .click()
    }

}
export default new LoginPage()