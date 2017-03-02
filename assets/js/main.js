//Valores obtenidas del formulario HTML
var boton = document.getElementById('enviar');
var resultados = document.getElementById('resultado');
boton.onclick = function (){
  var nombre = document.getElementById('nombre').value;
  var numero1 = document.getElementById('num1').value;
  var numero2 = document.getElementById('num2').value;
  var operacion = document.getElementById('operacion').value;
  //Llamando a la función "operaciones" e imprimiendo en resultado
  resultados.innerHTML = "Hola " + nombre+ " tu resultado es: " +operaciones(operacion, numero1, numero2);
    //return false;
  }

  //Funcion que evalua la opcion elegida
  function operaciones(opcion, num1, num2) {
    //El resultado de operacion
    var resultado;
    //El usuario elige la operacion a realizarse y llamamos a la función correspondiente
    switch (opcion) {
      case "suma":
        resultado = suma(num1, num2);
        break;
      case "resta":
        resultado = resta(num1, num2);
        break;
      case "multi":
        resultado = multiplicacion(num1, num2);
        break;
      case "divi":
        resultado = division(num1, num2);
        break;
      case "potencia":
        resultado = potencia(num1, num2);
        break;
      default:
        resultado = "No se ha elegido una operación";
    }
    return resultado;
  }

  //Declaracion de funciones para cada operación matemática
  function suma(n1, n2){
      return (parseInt(n1) + parseInt(n2));
    }

  function resta(n1, n2){
    //desarrollar la funcion resta
    alert("hola soy resta");
  }
  function multiplicacion(n1, n2){
    //desarrollar la funcion multiplicacion
    alert("hola soy multiplicacion");
  }
  function division(n1, n2){
    //desarrollar la funcion division
    alert("hola soy division");
  }
  function potencia(n1, n2){
    //desarrollar la funcion potencia
    alert("hola soy potencia");
  }
