//ubicamos elemento dentro del documento
const contenedor = document.getElementById('contenedor');

// hacer pregunta al usuario
// almacenar la respuesta en memoria
let respuesta = prompt('¿qué seleccionado ganó la copa mundial Qatar 2023?');

if( respuesta.toLowerCase() == 'argentina' ){
    //bloque a ejecutar si la condición es true
    //contenedor.innerText = 'Correcto';
    contenedor.innerHTML = 'Correcto <br> <img src="imgs/ok.png">';
}
else{
    //bloque a ejecutar si la condición es false
    //contenedor.innerText = 'Incorrecto';
    contenedor.innerHTML = 'Inorrecto <br> <img src="imgs/error.png">';
}