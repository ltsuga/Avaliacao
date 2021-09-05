var palavra = 'abcba';  //mudar variavel aqui
var tamanho = palavra.length;
var metade = Math.floor(tamanho/2);
var isPalindromo = true;



    for (var i=0 ; i<= metade; i++)
    {
        
        if (palavra[i] !== palavra[tamanho-i-1])
        {
        
            isPalindromo = false;
        }
    }




if (isPalindromo == true) 
{
    console.log('É palindromo');
}
else 
{
    console.log('Não é palindromo');
}
    