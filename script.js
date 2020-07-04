function mostrarRespuesta() {

  var respuestas = document.getElementById('respuestas');

  respuestas.classList.toggle('noOculto');

  if (event.target.innerHTML == "Mostrar explicaciones") {//event.target es quien disparo la function.....osea el boton
    event.target.innerHTML = "Ocultar explicaciones";
  }else{
    event.target.innerHTML = "Mostrar explicaciones";
  }
}
// Try edit message
var lupa = false;

// function mostrarPreguntas(){
//
//   var pregunta = document.getElementsById('parrafoPregunta');
//
//   pregunta.classList.toggle('noOcultado');
//   if(event.target.innerHTML == "Mostrar preguntas"){
//     event.target.innerHTML = "Ocultar preguntas";
//   }else{
//     event.target.innerHTML = "Mostrar preguntas";
//   }
// }


function mostrarPreguntas(){
var preguntas = document.getElementsByClassName("parrafoPregunta");
// preguntas.classList.toggle('noOcultado');
for(i = 0; i < preguntas.length; i++){
if(  preguntas[i].parentElement.style.display == "block" ){
  preguntas[i].parentElement.style.display = "none"


}else{
  preguntas[i].parentElement.style.display = "block"

}
}if(  event.target.innerHTML == "Mostrar preguntas" ){
  event.target.innerHTML = "Ocultar preguntas"
  // document.getElementsByClassName('emoji').style.display = "none"; 


}else{
  event.target.innerHTML = "Mostrar preguntas"

}

var posiblesRespuestas = document.getElementsByClassName("posiblesRespuestas");
console.log(preguntas)
for (i=0; i<posiblesRespuestas.length; i++){
  posiblesRespuestas[i].style.display = "none";
  // parrafo[i].style.fontSize = fontSize;


}

}

function agrandarTamaño(){
  var posiblesRespuestas = document.getElementsByClassName("posiblesRespuestas");
  var preguntas = document.getElementsByClassName('parrafoPregunta');
var boton = document.getElementById("cambiarTamaño");
var parrafo = document.getElementById("parrafoPregunta");
  if(lupa){
    fontSize = "20px"
    fontSizePr = "25px"
    boton.innerHTML = "Achicar el tamaño de la letra"
  }else{
    boton.innerHTML = "Agrandar el tamaño de la letra"
    fontSize = "15px"
    fontSizePr = "20px"
  }
  for (i=0; i<posiblesRespuestas.length; i++){
    posiblesRespuestas[i].style.fontSize = fontSize;
    // parrafo[i].style.fontSize = fontSize;

  }
  for (i=0; i<preguntas.length; i++){
    preguntas[i].style.fontSize = fontSizePr;

  }
  lupa = !lupa
}

var puntaje = 0;
// var puntajeDos = document.getElementById("puntajeDos");
// puntajeDos = 0;
var preguntasRespondidas = 0;

function responder(ok = false, preg = false){
  if(ok){
    puntaje++;
    // puntajeDos++;
    animateSection('success')

  }else{
    // puntaje--;
    animateSection('wrong')
    // puntajeDos++;
  }
  preguntasRespondidas++;
  if(preguntasRespondidas == 7){
    emoji = "emojiTriste"
    if (puntaje <=3 && preguntasRespondidas == 7) {
      emoji = "emojiTriste"
      document.getElementById("botonMostrar").style.display = "block"
      document.getElementById("botonPreguntas").style.display = "block"
      document.getElementById("reload").style.display = "block"
    }
    if (puntaje >=4 && puntaje <=6) {
      emoji = "emojiNormal"
      document.getElementById("siguienteNivel").style.display = "inline-block"
      document.getElementById("botonMostrar").style.display = "block"
      document.getElementById("botonPreguntas").style.display = "block"
    }
    if (puntaje >=6) {
      emoji = "emojiFeliz"
      document.getElementById("siguienteNivel").style.display = "inline-block"
      document.getElementById("botonMostrar").style.display = "block"
      document.getElementById("botonPreguntas").style.display = "block"


    }
    document.getElementById(emoji).style.display = "block"

// if(confirm("Deseas volver a la pagina principal?")){window.location.href = "index.html";}
}
  document.getElementById(preg).style.display= "none";
  document.getElementById("puntaje").innerHTML = puntaje
}

//


function animateSection(state){
  if (state == 'success') {
    document.getElementById("animations").classList.add('o-circle', 'c-container__circle', 'o-circle__sign--success');
    setTimeout(function() {
    document.getElementById("animations").classList.remove('o-circle', 'c-container__circle', 'o-circle__sign--success');
  }, 1500);
  }
  if (state == 'wrong') {
    document.getElementById("animations").classList.add('o-circle', 'c-container__circle', 'o-circle__sign--failure');
    setTimeout(function() {
    document.getElementById("animations").classList.remove('o-circle', 'c-container__circle', 'o-circle__sign--failure');
  }, 1500);
  }
}
var fondo = "fondo.jpg"

function cambiarFondo(){
// document.body.style.backgroundImage = "url('fondoDos.jpg')";
if(fondo == "fondo.jpg"){
fondo = "fondoDos.jpg"
}else{
  fondo = "fondo.jpg"
}
document.body.style.backgroundImage = "url("+fondo+")";
}

// function cambiarFondo(){
// // document.body.style.backgroundImage = "url('fondoDos.jpg')";
// if(fondo == "fondo.jpg"){
// fondo = "fondoDos.jpg"
// }if(fondo == "fondoDos.jpg"){
//   fondo = "fondoTres.jpg"
// }else{
//   fondo = "fondo.jpg"
// }
// }
// document.body.style.backgroundImage = "url("+fondo+")";
// }




// TODO: 1 - Aumentar tamaño de parrafo con boton
// TODO: 2 - Cambiar Imagen de fondo con boton
// TODO: 3 - Hacer un link que se pueda usar para acceder al JUEGO
