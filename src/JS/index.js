const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado');
        const imagempersonagemgrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagempersonagemgrande.src = `./src/imagens/card-${idPersonagem}.png`;
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })

})