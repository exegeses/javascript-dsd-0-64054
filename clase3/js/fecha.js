//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    mostrar la fecha actual
    formato: Sábado 22/07/2023
*/
//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número de día de la semana
let diaSemana = fecha.getDay();
/*
    Domingo -> 0
    Lunes   -> 1
    Martes  -> 2
*/
switch( diaSemana ){
    case 0: 
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}


//obtenemos el número del día del mes
let diaMes = fecha.getDate();
if( diaMes <= 9 ){
    diaMes = '0'+ diaMes;
}

//obtenemos el número del mes actual
/*
    enero -> 0
    febrero -> 1
    marzo -> 2
*/
let mes = fecha.getMonth() + 1;
if( mes <= 9 ){
    mes = '0'+ mes;
}

//obtenemos el número de año actual
let anio = fecha.getFullYear();

//imprimimos en el span
txt.innerText =  diaSemana +' '+ diaMes +'/'+ mes +'/'+ anio ;