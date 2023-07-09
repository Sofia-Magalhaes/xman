// Pega os personagens
const personagens = document.querySelectorAll('.personagem')

// Adicionar a classe selecionado no personagem que o usuario passou o mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior:'smooth'})
        }

        // verificar se já existe um personagem selecionado, se sim, devemos remover a selecao dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');                        

        // Trocar nome, imagem e descrição do personagem
        // pegar elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        // alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;        
        imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;

        // alterar o nome
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // alterar descricao do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})

