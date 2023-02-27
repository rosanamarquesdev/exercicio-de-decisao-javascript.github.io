// lista exercicios - exercicio 7

// leia uma variavel e some 5 caso seja par ou some 8 caso seja impar
//imprimir o resultado dessa operacao

let numero = 10; // atribui o numero 10 a variavel numero

if ( numero % 2 == 0 ){ // verifica se o numero da variavel é um numero par
    numero = numero + 5; // em caso de verdadeiro - soma 5 ao valor da variavel numero
    document.write(numero); // exibe na tela o resultado 
} else { // caso a variavel nao seja par será impar
    numero = numero + 8; // soma 8 ao valor da variavel numero
    document.write(numero); // exibe na tela o resultado
}       

