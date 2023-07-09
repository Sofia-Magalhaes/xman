// Pega os personagens
const personagens = document.querySelectorAll('.personagem')

// Adicionar a classe selecionado no personagem que o usuario passou o mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        // verificar se já existe um personagem selecionado, se sim, devemos remover a selecao dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');                        
    })
})

