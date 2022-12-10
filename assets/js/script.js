function  calculate() {

var isEmpty = true  

var num1 = window.document.getElementById("n1")
var num2 = window.document.getElementById("n2")
if(num1.value.length == 0 || num2.value.length == 0){
  window.alert('Certifique-se que campos foram digitados')
} else{

var n1 = Number(num1.value)
var n2 = Number(num2.value)
var x = 0
var r = ""
var result = window.document.getElementById("resultado")
result.innerHTML = `A tabuada do ${n1} é: <br>`
      do{
      r = n1 * x
      result.innerHTML += `${n1} x ${x} = ${r} <br>`
      x++
  
    } while(x <= n2);

  }
}