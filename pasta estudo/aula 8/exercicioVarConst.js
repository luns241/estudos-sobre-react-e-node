const nome = 'Luan Silva';
const sobrenome = 'Carvalho';
const idade = 23;
const peso = 82;
const altura = 1.76;
let imc;
let anoDeNascimento;
imc = peso / (altura * altura);
anoDeNascimento = 2024 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos de idade e pesa ${peso}kg.`);
console.log(`O ${nome} tem ${altura} de altura e seu IMC é de ${imc}.`);
console.log(`E ${nome} nasceu em ${anoDeNascimento}.`);