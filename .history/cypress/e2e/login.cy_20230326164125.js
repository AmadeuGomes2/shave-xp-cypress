import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'


describe('login', ()=> {

    context('Quando submeto o formulário', () => {

        it('deve logar com sucesso', () => {

            const user = {
                name: 'amadeu',
                email: 'amadeu.gomes@onlineapp.com.br',
                password: 'amadeu10'
            }
            loginPage.submit(user.email, user.password)
            shaversPage.header.userShouldBeLoggedId(user.name)

        })
        it('não deve logar com senha inválida', () => {

            const user = {
                name: 'amadeu',
                email: 'amadeu.gomes@onlineapp.com.br',
                password: 'amadeu1'
            }
            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)

        })
        it('não deve logar com email cadastrado', () => {

            const user = {
                name: 'amadeu',
                email: 'amadeu.gomes123@onlineapp.com.br',
                password: 'amadeu1'
            }
            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            loginPage.noticeShouldBe(message)
        })
        it.only('campos obrigatórios', () => {
            loginPage.submit()

            cy.get('.alert-error')
                .should('have.length', 2)
                .and(($small)=> {
                    expect($small.get(0).textContent).to.equal('E-mail é obrigatório')
                    expect($small.get(1).textContent).to.equal('Senha é obrigatória')
                })
        })
    })
    context('campos obrigatórios', () => {

        beforeEach(()=> {
            loginPage.submit()
        })

        it('Deve validar email', ()=> {

            cy.get('.alert-error')
                .should('have.length', 2)
                .and(($small) => {
                    expect($small.get(0).textContent).to.equal('E-mail é obrigatório')
                })
        })
        it('Deve validar senha', ()=> {
            cy.get('.alert-error')
                .should('have.length', 2)
                .and(($small) => {
                    expect($small.get(1).textContent).to.equal('Senha é obrigatória')
                })
        })
    })
})