//ubicar elemento dentro del DOPM
const caja = document.querySelector('#caja');

//declaramos función de control
function pintar( codigoColor, nombreColor, imagen )
{
    //caja.innerText = nombreColor;
    //caja.innerHTML = nombreColor + '<br>' + '<img src="imgs/'+ imagen +'">';
    caja.innerText = nombreColor;
    caja.style.backgroundImage = 'url(imgs/'+ imagen +')';
    caja.style.backgroundRepeat = 'no-repeat';
    caja.style.backgroundSize = '96px';
    caja.style.backgroundPosition = 'center center';
    caja.style.backgroundColor = codigoColor;
}