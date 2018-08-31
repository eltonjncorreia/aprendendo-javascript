
// pegou hgtml por id
var elementBotao = document.getElementById('bot');
console.log(elementBotao);

// pegar elemento por atributo name
var elNameTag = document.getElementsByTagName('input');
console.log(elNameTag);

//pegar por classes
var elPorCLasse = document.getElementsByClassName('nome')[0];
console.log(elPorCLasse);

//percorer a DOM com o queryselector 
var percorerDOm = document.querySelector('input[name=nome]');
console.log(percorerDOm);

// pegar botao e cria uma função para exibir um alerta ao ser clicado
var inputElement = document.querySelector('input[name=nome]');
var elementBotaoClicado = document.querySelector('button.botao');

console.log(elementBotaoClicado);

elementBotaoClicado.onclick = function (){
    var text = inputElement.value;
    alert(text)
}