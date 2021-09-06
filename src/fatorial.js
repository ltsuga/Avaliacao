const form = document.querySelector('form');
const inputs = form.querySelector('input[name="fatorialField"]');
const output = document.querySelector('.output');

form.addEventListener('submitFatorial', fatorial, false);

function fatorial(e) {

  e.preventDefault();

  let N = 0;
  N = Number(inputs[0].value);

  var fatorial = 1

  for (var i=1 ; i<=N ; i++)
  {
    fatorial = fatorial * i
  }

  output.textContent = `Numero: ${N}, Fatorial: ${fatorial}`;

}
