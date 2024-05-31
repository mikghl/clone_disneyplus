document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
///////////////header. hero para pegar a altura e saber quando a página passou dela.
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
///header. Função para acompanhar a rolagem do scroll do windows.
    window.addEventListener('scroll', function() { 
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementos();
        } else {
            exibeElementos();
        }
    }) 

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            ////////////////1 Identifica a aba alvo clicada
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            ////////////////2 Identifica o botão alvo clicado
            const botaoAlvo = botao.target.dataset.tabButton
            const botaoAtivo = document.querySelector(`[data-tab-button=${botaoAlvo}]`)
            ////////////////1 
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            ////////////////2
            removeBotaoAtivo();
            botaoAtivo.classList.add('shows__tabs__button--is-active');
        })
    }

    ////////////////////faq, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOufechaResposta);
    }

})

    ////////////////header. ocultação dos elementos
    function ocultaElementos () {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    function exibeElementos () {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

////////////////faq
function abreOufechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

////////////////2
function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}
////////////////1
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}