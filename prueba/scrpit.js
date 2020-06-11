function mostrarRespuesta() {

  var respuestas = document.getElementById('respuestas');

  respuestas.classList.toggle('noOculto');

  if (event.target.innerHTML == "Mostrar explicaciones") {//event.target es quien disparo la funciton.....osea el boton
    event.target.innerHTML = "Ocultar explicaciones";
  }else{
    event.target.innerHTML = "Mostrar explicaciones";
  }

}

var puntaje = 0;


function responder(ok){

  if(event.target.classList.contains('answered'))return;


  if(ok){
    event.target.classList.add('answered');
    puntaje++;
    document.getElementById("puntaje").innerHTML = puntaje;
    event.target.style.backgroundColor = "green";
  }
// else(no){
// event.target.classList.add('wrong');
// puntaje--;
// document.getElementById("puntaje").innerHTML = puntaje;
// event.target.style.backgroundColor = "red";
// }
}
