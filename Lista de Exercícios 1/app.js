function exercicio1(){

   let num1 = parseInt(prompt("Informe o primeiro número:"));
   let  num2 = parseInt(prompt("Informe o segundo número:"));
   let resultado = num1 + num2;

   alert(`A soma de ${num1} e  ${num2} é igual a ${resultado}`);

 }


   function exercicio2(){
    let nome = prompt("Informe o nome: ");
    let sobrenome = prompt("Informe o sobrenome: ");

    alert (`Olá, ${nome} ${sobrenome}`);
   }

  
   function exercicio3(){
      
      let valorEmReal = parseFloat(prompt("Informe o valor a ser convertido:"));
      const cotacaoDolar = 4.95;
      let valorConvertido = valorEmReal/cotacaoDolar;
      valorConvertido = valorConvertido.toFixed(2);

      alert(`O valor de R$${valorEmReal} é equivalente  a $${valorConvertido}`)
   }

   function exercicio4(){
      let num = parseInt(prompt("Informe um número:"));
      let antecessor = num - 1;
      let sucessor = num + 1;

      alert(`O antecessor de ${num} é ${antecessor} e o sucessor é ${sucessor}`);


   }

   function exercicio5(){
      
   }

   exercicio4();