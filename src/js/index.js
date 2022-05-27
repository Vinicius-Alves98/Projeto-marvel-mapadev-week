/* 
    OBJETIVO 1 - Quando passar o mouse em cima do personagem selecionado temos que:

    - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

    - Retirar a classe selecionado do personagem que não estiver selecionado

    OBJETIVO 2 - Quando passar o mouse em cima do personagem da listagem, trocar a imagem e o nome do personagem grande

    - Alterar imagem do jogador 1
    - Alterar o nome do jogador 1

*/

const personagens = document.querySelectorAll ('.personagem')

personagens.forEach ((personagem) => {
    personagem.addEventListener ('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return; 

        const personagemSelecionado = document.querySelector ('.selecionado');
        personagemSelecionado.classList.remove ('selecionado');

        personagem.classList.add ('selecionado'); 

        const imagemJogador1 = document.getElementById ('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomejogador1 = document.getElementById ('nome-jogador-1'); 
        const nomeSelecionado = personagem.getAttribute ('data-name');
        
        nomejogador1.innerHTML = nomeSelecionado;  
    })
})