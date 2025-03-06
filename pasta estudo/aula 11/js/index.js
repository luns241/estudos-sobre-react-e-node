/* 
Metodos window

alert('Olá, sou o Luan!');
window.confirm('Deseja deletar essa mensagem?');
prompt('Coloque um numero: ');

*/

// const confirma = confirm('Está de acordo com o apresentado?');

// console.log(confirma);

let numeroCalculo1 = prompt('Digite um numero para o calculo');
console.log('%c⧭', 'color: #ff0000', typeof numeroCalculo1);

let numeroCalculo2 = prompt('Digite um segundo numero para calcular');
console.log('%c⧭', 'color: #00e600', typeof numeroCalculo2);

let resultado = +numeroCalculo1 + +numeroCalculo2;
console.log('%c⧭', 'color: #00a3cc', resultado);

alert(`O resultado dos valores são ${resultado}`);