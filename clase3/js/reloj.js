//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/**
 * mostrar reloj digital
 * formato   11:12:44
 */

//declaramos la función
function reloj()
{
    //creamos objeto de fecha
    const fecha = new Date();

    //obtenemos el número de las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos
    }

    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    /* 
        prototipo ->  UTILIZA STRINGS
        padStart( largoCadena, caracterQueCompletaCadena ) 
    */
    segundos = segundos.toString().padStart( 2, '0' );

    //imprimimos dentro del span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//ejecutamos la función reloj
reloj();

//actualizamos el llamdo a la función reloj
setInterval( reloj );