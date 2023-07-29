//ubicamos elementos dentro del DOM
//const txtDias = document.getElementById('txtDias');
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';

//declaramos función de control
function cuentaRegresiva()
{
    //creamos objetos de fecha
    const ahora = new Date();
    //const final = new Date(2023, 7, 21);
    const final = new Date(2023, 6, 29, 12, 25);

    console.log(ahora.getTime());
    console.log(final.getTime());
    //diferencia entre objetos de fecha
    let diferencia = final - ahora;
    console.log(diferencia);
    /*
        el resultado de la diferencia
        es un número expresado en 
        formato UNIX TIMESTAMP
        - el tiempo expresado en milisegundos
        - desde el 01/01/1970
     */

    //obtenemos el tiempo expresado en segundos
        //y quitamos los decimales
    let segundos = diferencia/1000;
        segundos = Math.trunc(segundos);
    console.log('segundos totales: ' + segundos);

    //obtenemos el tiempo en minutos
    let minutos = Math.trunc( segundos/60 );
    console.log('minutos totales: ' + minutos);

    //obtenemos el tiempo en horas
    let horas = Math.trunc( minutos/60 );
    console.log('horas totales: ' + horas);

    //obtenemos el tiempo en horas
    let dias = Math.trunc( horas/24 );
    console.log( 'dias totales: ' + dias );

    //calculamos el resto en horas, minutos y segundos
    horas = horas%24;
        console.log(horas);
    minutos = minutos%60;
        console.log(minutos);
    segundos = segundos%60;
        console.log(segundos); 
/*
    if( segundos < 10 ){
        segundos = '0' + segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }
*/

if( 
    dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0
  ){
    clearInterval( intervalo );
    dias = 0;
    horas = 0;
    minutos = 0;
    segundos = 0;
    h1.innerText = 'Oferta finalizada';
}

    //imprimimos en los span
    txtDias.innerText = dias.toString().padStart( 2, '0' );
    txtHoras.innerText = horas.toString().padStart( 2, '0' );
    txtMinutos.innerText = minutos.toString().padStart( 2, '0' );
    txtSegundos.innerText = segundos.toString().padStart( 2, '0' );

}

//invocamos función
cuentaRegresiva();
//actualizamos el llamado a la función
intervalo = setInterval( cuentaRegresiva );




