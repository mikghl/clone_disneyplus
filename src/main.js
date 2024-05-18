document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
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
})
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