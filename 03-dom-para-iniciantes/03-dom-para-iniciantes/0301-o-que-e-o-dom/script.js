// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log(urlPagina)


// Seleciona o primeiro elemento da página que
// possua a classe ativo
const textoSegundo = document.querySelector('h2');
console.log(textoSegundo)


// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem)



// Retorne a largura da janela 
const larguraTela = window.innerWidth;
const alturaTela = window.innerHeight;

console.log(`Essa é a altura (${alturaTela}) ea largura (${larguraTela}) da tela :)`);