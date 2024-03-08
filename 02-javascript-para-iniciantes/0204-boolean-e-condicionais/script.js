// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 27;
var idadePrimo = 33;

if (minhaIdade > idadePrimo){
    console.log('É maior');
} else if (minhaIdade === idadePrimo){
    console.log('É igual')
}else {
    console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // verdadeiro


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta) // as dois exclamações na frente das variavés, serve para ver se a variavel é falso ou verdadeiro




// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
    console.log('Brasil maior que China')
}else {
console.log('Brasil tem menos habitantes.')
}





// O que irá aparecer no console? // Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}






// O que irá aparecer no console? // Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // No && ele sempre vai da a ultima verdadeira.
} else {
  console.log('Falso');
}