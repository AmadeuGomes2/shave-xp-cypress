describe('login', ()=> {

    context('Quando submeto o formulário', () => {

        it('deve logar com sucesso', ()=> {

        const user = {
            name: 'amadeu',
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

        cy.get('.logged-user div a')
        .should('be.visible')
        .should('have.text', 'Olá, ' + user.name)
        })
        it('não deve logar com senha inválida', ()=> {
           
            const user = {
                name: 'amadeu',
                email: 'amadeu.gomes@onlineapp.com.br',
                password: 'amadeu1'
            }
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$="email"]')
            .type(user.email)
    
            cy.get('input[placeholder*=senha]')
            .type(user.password)

            cy.contains('button', 'Entrar')
            .click()

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
            .should('be.visible')
            .find('.error p')
            .should('have.text', message)
        })  
        it('não deve logar com email cadastrado', ()=> {
           
            const user = {
                name: 'amadeu',
                email: 'amadeu.gomes123@onlineapp.com.br',
                password: 'amadeu1'
            }
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$="email"]')
            .type(user.email)
    
            cy.get('input[placeholder*=senha]')
            .type(user.password)

            cy.contains('button', 'Entrar')
            .click()

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
            .should('be.visible')
            .find('.error p')
            .should('have.text', message)
        })  
    })
})