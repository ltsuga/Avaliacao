var N = 6 // mudar esta variavel
var fibo = 0
var anterior1 = 0;
var anterior2 = 1;

if (N == 0){
    fibo = 0
}else if (N == 1){
    fibo = 1
}else{
    for (var i = 1; i<N ; i++)
    {
        fibo = anterior1 + anterior2
        anterior1 = anterior2
        anterior2 = fibo
    }
}

console.log('Fibonnaci '+fibo)