function converter(numero) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=giveth&vs_currencies=USD");
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      var response = JSON.parse(request.responseText);
        }
    }

  request.onload = () => {
    if (request.status == 200) {
      var response = JSON.parse(request.responseText);
      var result_tofix = response['giveth'].usd * numero
        document.querySelector('#result').textContent = result_tofix.toFixed(4) + " USD" ;

    }
  }
}

document.addEventListener("DOMContentLoaded",function(){

document.querySelector('#btn').addEventListener('click',function(){

  let numero = document.querySelector('#numero').value;

  converter(numero);}
)
})