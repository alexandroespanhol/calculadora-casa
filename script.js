var calculo = '';
var valor1 = 0;

function Valores(valor){


    resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML += valor


}

function Operadores(operador){
    calculo = operador
    valor = document.getElementById("resultado").innerHTML 
    document.getElementById("resultado").innerHTML =''
}
function calcular(){
    valor2 = document.getElementById('resultado').innerHTML
    if(calculo == '+'){
        total = parseInt(valor1) + parseInt(valor2)
    }
        else if(calculo == '-'){
            total = parseInt(valor1) - parseInt(valor2)
        }
            else if(calculo == '*'){
                total = parseInt(valor1) * parseInt(valor2)
            }
                else if(calculo == '/'){
                    total = parseInt(valor1) / parseInt(valor2)
                }
            

        document.getElementById('resultado').innerHTML = total
        }

        function LimparC(){
            document.getElementById('resultado').innerHTML =''
            valor1 = ''
            calculo = ''
        }

        function LimparC(){
            resultado = document.getElementById('resultado').innerHTML

            resultadoArray = resultado.split('')

            resultadoFinal = ''
            for(let i = 0; i <resultadoArray.length- 1;i ++){
                resultadoFinal + resultadoArray[i];

            }
            document

        }