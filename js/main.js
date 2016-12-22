var resta = document.getElementById("resta");
var pSalida = document.getElementById("salida");



function calcular() {
    var valresta = resta.value;


    if (valresta == "" ) {
        resta.placeholder="Rellenar el campo!";
        resta.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
       
    } else {
        resta.style.backgroundColor = "#fff";
       

      if (valresta<21) {
            pSalida.innerHTML = 21-parseInt(valresta);
        } 
        
        else if (valresta>21) {
            pSalida.innerHTML = (parseInt(valresta)-21)*2 ;
        }
        
        else {
            pSalida.innerHTML = "Escribe el valor de -n- en números";
        }
    }
}