//ubicamos elemento dentro del DOOM
const caja = document.getElementById('caja');

//declaramos funciones de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function mostrarOcultar()
{
    //si la caja no se ve
    if( caja.style.display == 'none' ){
        //caja.style.display = 'block';
        mostrar();
    }
    else{
        //caja.style.display = 'none';
        ocultar();
    }
}