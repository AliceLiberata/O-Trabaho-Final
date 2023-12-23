
const nome = prompt("Primeiro me diga, qual seu nome?")

  alert("Certo " + nome + " vamos para as perguntas, leia com atenção...")

var resultado = 0
var erros = 0

//PERGUNTAS EMBARALHADAS PORT/MAT
//matemática
const resposta1 = Number(prompt("Qual o valor da base de um quadrado, cujo a área = 32cm², e a altura é 4?"))
if(resposta1===8){
    resultado++;
}
else if(resposta1!==8){
    erros++;
}

//português
const resp1 = prompt("A sílaba tônica da palavra CAPITAL é:")
if(resp1==='tal'){
    resultado++;
}
else if(resp1!=='tal'){
    erros++;
}

const resp2 = prompt("Em qual sílaba fica o acento da paravra REPTIL?")
if(resp2==='ré'){
    resultado++;
}
else if(resp2==='re'){
    resultado++;
}
else if(resp2==='primeira'){
    resultado++;
}
else{ 
    erros++
}

//matemática
const resposta2 = Number(prompt("Qual é a altura de um triângulo com 12 de base e 10 de hipotenusa?"))
if(resposta2===8){
    resultado++;
}
else if(resposta2!==8){
    erros++;
}

//português
const resp3 = prompt("A palavra ESPIRRO é classificada como:")
if(resp3==='paroxitona'){
    resultado++;
}
else if(resp3==='paroxítona'){
    resultado++;
}
else{
    erros++
}

//matemática
const resposta3 = Number(prompt("Considere pi=3,20, qual a area de um circulo com o raio medindo 5?"))
if(resposta3===80){
    resultado++;
}
else if(resposta3!==80){
    erros++;
}

  document.write("Olá fico feliz que venho " + nome + " e que tenha feito o quiz. <br>")
  document.write(" Fique com seu resultado: <br>" ) 
             
  document.write("Você teve " + resultado + " acertos, você errou " + erros + " vezes? <br>")

if(resultado>3){
  document.write("Parabéns você realmente é bom.")
}
else if(resultado<=3){
  document.write("Precisa praticar mais no assunto")
}




