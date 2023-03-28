describe('login', ()=> {

    context('Quando submeto o formulário', () => {

        it('deve logar com sucesso', ()=> {

        const user = {
            email: 'amadeu.gomes@onlineapp.com.br',
            password: 'amadeu10'
        }
        cy.visit('http://localhost:3000/')

        cy.get('input[placeholder$="email"]')
        .type(user.email)

        cy.get('input[placeholder*=senha]')
        .type(user.password)

        cy.contains('button', 'Entrar')
        .click()
        })  
    })
})