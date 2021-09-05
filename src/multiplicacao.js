var numOne = 2  // mudar esta variavel
var numTwo = -4 // mudar esta variavel
var resultado = 0;

if (numOne > 0)
{
    for (var i=1 ; i <= numOne; i++)
    {
            resultado = resultado + numTwo
    }

}else if (numOne<0){
    for (var i=-1 ; i >= numOne; i--)
    {
            resultado = resultado - numTwo
    }

}


console.group("Resultado: "+resultado)
