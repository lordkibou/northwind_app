// ---------------------------------------------------
//
// llama a una función remota enviando POST <nombreFuncion>
//
// ---------------------------------------------------
function llamarGET(nombreFuncion, parametrosLlamada, cb) {
  // preparar la llamada remota
  console.log(nombreFuncion);
  console.log(parametrosLlamada);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    // callback para cuando llegue la respuesta
    // de la petición que haremos más abajo

    if (this.readyState == 4 && this.status == 200) {
      // este es el texto que recibo.
      console.log("recibo: " + this.responseText);

      var resultado = this.responseText;

      //
      // Puede ser JSON o no.
      // Intento pasarlo a JSON, si puedo: es eso lo que devuelve
      // Si no: se queda como estaba
      //
      try {
        resultado = JSON.parse(resultado);

        console.log("    no he podido hacer parse de " + resultado);
      } catch (error) {}

      // en todo caso, aqui el primer parámetro (error = null, porque
      // estoy dentro de status == 200)
      // Los errores en el uso de la función de la lógica
      // que los maneje a su antojo la función
      cb(null, resultado);
    } // if( this.readyState == 4 && this.status == 200 ){
    else if (this.readyState == 4 && this.status != 200) {
      // el status no es 200
      cb(this.status, null);
    }
  }; //  xmlhttp.onreadystatechange = function() {

  //
  // llamamos *remotamente*
  // (la verdadera función de la lógica)
  //
  var url =
    nombreFuncion + "?" + new URLSearchParams(parametrosLlamada).toString();
  console.log(url);
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
} // ()
