function exercicio1() {
   let num = parseInt(prompt("Informe um número:"));
   if(num%2 == 0){
      alert ("O número é par.")
   } else if (num == 0) {
      alert("O número é zero. ")
   } else {
      alert("O número é ímpar: ")
   }

}


function exercicio2() {
   let num1 = parseInt(prompt("Informe o primeiro número:"));
   let num2 = parseInt(prompt("Informe o segundo número: "));

   if( num1 > num2){
      alert(`O número ${num1} é maior.`)
   } else {
      alert(`O número ${num2} é maior.`)

   }
   
}


function exercicio3() {

   let maiorDe65 = prompt("Possui mais de 65 anos? (S ou N):");
   let gestante = prompt("Está gestante? (S ou N): ");
   let diversidaFuncional = prompt ("É pessoa com diversidade funcional? (S ou N):");

   if( maiorDe65 == "S" || gestante == "S" || diversidaFuncional == "S" ){
      alert("Siga para a fila preferencial.")
   } else {
      alert ("Siga para a fila comum.")
   }

  
}

function exercicio3Versao2(){

   let maiorDe65;
   let gestante;
   let diversidaFuncional;

   maiorDe65 = prompt("Possui mais de 65 anos? (S ou N):");
   if( maiorDe65 == "S"){
      alert("Siga para a fila preferencial.")
   } else {
      gestante = prompt("Está gestante? (S ou N): ");

      if (gestante == "S"){
         alert("Siga para a fila preferencial.");
      } else {
         diversidaFuncional = prompt ("É pessoa com diversidade funcional? (S ou N):");
         if(diversidaFuncional == "S"){
            alert("Siga para a fila preferencial.");
         } else {
            alert ("Siga para a fila comum.");
         }

      }

   }

}

function exercicio4() {

   let idade = parseInt(prompt("Informe sua idade: "));
   
   if ( idade < 16){
      alert("Entrada NÃO permitida")
   } else if ( idade >= 16 && idade < 18){
      alert ("Entrada permitida somente com acompanhamento de responsável.")
   } else {
      alert ("Entrada Liberada")
   }
   

}

function exercicio5() {

   let login = "dani";
   let senha = "1234";
   let loginDigitado = prompt("Informe o login:");
   let senhaDigitada = prompt("Informe a senha:");

   if(senhaDigitada != senha && loginDigitado != login){
      alert ("Tanto o login quanto a senha estão incorretos. Tente novamente.");
      exercicio5();
   } else if (senhaDigitada != senha) {
      alert("Senha Incorreta. Tente novamente.");
      exercicio5();

   } else if (loginDigitado != login){
      alert("Login Incorreto. Tente novamente");
      exercicio5();
   } else {
      alert("Login e senha corretos.");
      alert("Seja Bem Vindo!")
   }


}

function exercicio6() {
   let pergunta1 = prompt("Quando se comemora a Independência do Brasil? \nA) 1º de abril \nB) 7 de setembro \nC) 25 de outubro \nD) 2 de novembro")
   let pergunta2 = prompt("Qual é a melhor casa de Hogwarts? \nA) Grifinória \n")
   
}


exercicio6();