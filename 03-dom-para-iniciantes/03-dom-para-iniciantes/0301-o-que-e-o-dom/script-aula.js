
// window.alert('Isso mesmo');

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/03-dom-para-iniciantes/03-dom-para-iniciantes/0301-o-que-e-o-dom/') {
  console.log('é igualzinhooo');
} else {
  console.log('diferentissiimooooo')
}



const h1selecionado = document.querySelector('h1');

h1selecionado.addEventListener( 'click', function(){
  console.log('clicouuuuuuuu')
}) // isso é uma callback uma função que não tem nome
