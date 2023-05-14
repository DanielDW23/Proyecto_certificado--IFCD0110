
function validacion() {
    valor = document.getElementById("nombre").value;
    valor2 = document.getElementById("email").value;
    valor3 = document.getElementById("comentarios").value;
    elemento = document.getElementById("acepto");
    
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) 
    {
        document.getElementById("error_nombre").innerHTML = "El campo nombre no puede estar vacío"; 
        return false;
    }

    
    if( !(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valor2)) ) {

        document.getElementById("error_email").innerHTML = "El e-mail no es correcto";
        return false;
    }
    
    
    if( valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3) ) 
    {
        
        document.getElementById("comentarios").setAttribute("placeholder","El campo comentarios no puede estar vacío");
        
        return false;
    }

    
    if( !elemento.checked ) {

        document.getElementById("error_aceptar").innerHTML = "Tiene que aceptar la política de privacidad";
        return false;
    }

    return true;
  }