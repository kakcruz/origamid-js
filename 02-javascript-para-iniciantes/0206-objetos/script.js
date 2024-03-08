// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = { // objeto
  nome: ' Karol', // propriedades
  sobrenome: 'Cruz',
  idade: 27,
  cor: 'Preta'
}
console.log(dadosPessoais.nome)



// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function (){
  return `${this.nome} ${this.sobrenome}` // usei o this para acessar as propiedades do objeto acima
}




// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000 // atribui o novo preço.



// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,

  latir(pessoa){
    if(pessoa === 'homen'){
      return 'AU AU AU AU AU'
    }else{
      return false;
    }
  }
}