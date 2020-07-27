/*
var nome = 'Rafael';

var num1 = 10;
var num2 = 5;

var resultado = num1 % num2;

var lista = [10,20,30];

var objeto = { 
    nome:'joao', 
    sobrenome:'silva'
};

var z; //undefined
var pessoa = null;

console.log(resultado);


var idade = 70;

if( !(idade < 18) && (idade > 65)){
    console.log("Não é Obrigatório!");
}else{
    console.log("É Obrigatório!");  
}

/*
I  II  && ||
V  V   V  V
V  F   F  V
F  V   F  V
F  F   F  F

18         18 
numero === string
!==



var diaDaSemana = 'Segunda-feira';

diaDaSemana == 'Domingo'
? console.log('hoje é dia de churrasco!') 
: console.log('hoje não é dia de churrasco :(');


var mes = 7;

switch(mes){

    case 1: console.log("Janeiro");            
            break;
    case 2: console.log("Fevereiro");
            break;
    case 3: console.log("Março");
            break;
    case 4: console.log("Abril");
            break;
    default: console.log("Mes não existe!");
}


var numero = 0;

while (numero < 3) {	
    console.log('Olá ' + numero);
    numero = numero+1; //numero++
}

var numero = 0;

do{
    console.log('Olá ' + numero);
    numero = numero+1; //numero++
}while(numero < 3);



for(var numero = 4; numero>0; numero--){
    console.log('Olá ' + numero);
}


var lista = [10,20,30];

for(var e in lista){
    console.log(e);
	console.log(lista[e]);
}

*/
var nome = {
	nome: 'Rafael',
	sobrenome: 'Lopes'
};

for(var n in nome){
	console.log(n + ": "+ nome[n]);	
}