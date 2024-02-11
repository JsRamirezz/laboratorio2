//    EVENTOS CLICK
// PRIMER EJERCICIO USANDO CLICK
const btnCambiarColor = document.getElementById('btnCambiarColor');
const fondo = document.getElementById('colorDeFondo');

btnCambiarColor.addEventListener('click', function() {
    fondo.style.backgroundColor = "red";
});

// SEGUNDO EJERCICIO USANDO CLICK
const divWarning = document.getElementById("warning");

divWarning.addEventListener("click", function(){
    alert("Haz hecho clic en el div");

});

// TERCER EJERCICIO USANDO CLICK
const contadorTexto = document.getElementById('contadorTexto');
const btnIncrementar = document.getElementById('btnIncrementar');

let contador = 0;
btnIncrementar.addEventListener('click', function() {
    contador++;
    contadorTexto.textContent = contador;
});



// EJERCICIOS DE FOCUS
//PRIMER EJERCICIO DE FOCUS
const input = document.getElementById('input');
const mensaje = document.getElementById('mensaje');

input.addEventListener('focus', function() {
    mensaje.style.display = 'block';
});

input.addEventListener('blur', function() {
    mensaje.style.display = 'none';
});


//SEGUNDO EJERCICIO DE FOCUS
const input2 = document.getElementById('input2');

input2.addEventListener('focus', function() {
    input2.classList.add('resaltarPlaceholder');
});

input2.addEventListener('blur', function() {     
    input2.classList.remove('resaltarPlaceholder');
});


// TERCER EJERCICIO DE FOCUS
const parrafo = document.getElementById('parrafo');

parrafo.addEventListener('focus', function() {
    parrafo.style.fontSize = '24px';
});

parrafo.addEventListener('blur', function() {
    parrafo.style.fontSize = '16px';
});




// EJERCICIOS DE MOUSEOVER  

// PRIMER EJERCICIO USANDO MOUSEOVER
const divOculto = document.getElementById('divOculto');
const textoOculto = document.getElementById('textoOculto');

divOculto.addEventListener('mouseover', function() {
    textoOculto.style.visibility = 'visible';
});

divOculto.addEventListener('mouseout', function() {
    textoOculto.style.visibility = 'hidden';
});


// SEGUNDO EJERCICIO DE MOUSEOVER
const textoColor = document.getElementById('textoColor');

textoColor.addEventListener('mouseover', function() {
    textoColor.style.color = 'blue';
});

textoColor.addEventListener('mouseout', function() {   
    textoColor.style.color = ''; 
});


// TERCER EJERCICIO CON MOUSEOVER
const btnPosicion = document.getElementById('btnPosicion');
const divPosicion = document.getElementById('divPosicion');

btnPosicion.addEventListener('mouseover', function() {
    const nuevaPosicionX = Math.floor(Math.random() * (divPosicion.offsetWidth - btnPosicion.offsetWidth));
    const nuevaPosicionY = Math.floor(Math.random() * (divPosicion.offsetHeight - btnPosicion.offsetHeight));
        
    btnPosicion.style.top = nuevaPosicionY + 'px';
    btnPosicion.style.left = nuevaPosicionX + 'px';
});

    





