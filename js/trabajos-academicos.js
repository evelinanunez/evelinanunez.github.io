var boton;
function mostrarOcultar(){
    boton = document.getElementById("boton").value;
    if(boton =='mostrar'){
        document.getElementById("texto").style.display="inline-block";
        document.getElementById("boton").value="ocultar";
    }else{
        document.getElementById("texto").style.display="none";
        document.getElementById("boton").value="mostrar";
    }

    console.log(boton);
}

function validar(){
    var error= false;
    var mensajesError='';
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var direccion=document.getElementById("direccion").value;
    var telefono=document.getElementById("tel").value;
    var email=document.getElementById("email").value;
    var regexTelefono =  /^[0-9]{4}[\-]{1}[0-9]{4}$/
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

    if(nombre==''){
        error=true;
        mensajesError+= "<p>El campo nombre es obligatorio</p>"
    }
    if(apellido==''){
        error=true;
        mensajesError+= "<p>El campo apellido es obligatorio</p>"
    }
    if(direccion==''){
        error=true;
        mensajesError+= "<p>El campo direccion es obligatorio</p>"
    }
    if(telefono==''){
        error=true;
        mensajesError+= "<p>El campo telefono es obligatorio</p>"
    }else{
        if(!regexTelefono.test(document.getElementById("tel").value)){
            error=true;
            mensajesError+="<p>Ingrese un numero de telefono valido</p>";
        }
    }
    if(email==''){
        error=true;
        mensajesError+= "<p>El campo email es obligatorio</p>"
    }else{
        if(!regexEmail.test(document.getElementById("email").value)){
            error=true;
            mensajesError+="<p>Ingrese un email valido</p>";
        }
    }

    var opciones=document.getElementsByName("sexo");
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar una respuesta a la pregunta sexo</p>";
    }
    var opciones=document.getElementsByName("pregunta");
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar una respuesta al ejemplo pregunta</p>";
    }
    if(error){
        document.getElementById("mensajes").innerHTML=mensajesError;
        return false;
    }else{
        document.getElementById("mensajes").innerHTML="<p>¡Formulario enviado! :)</p>";
        return false;
    }
   
}

function mostrarYocultarInput(){
    var opciones= document.getElementsByName("pregunta");
   for(i in opciones){
       if(opciones[i].value=="si"  && opciones[i].checked){
           document.getElementById("ejemplo").style.display="block";
       }
       if(opciones[i].value=="no" && opciones[i].checked){
           document.getElementById("ejemplo").style.display="none";
       }
   }
}