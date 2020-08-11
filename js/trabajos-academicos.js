var boton;
function mostrarOcultar(){
    boton = document.getElementById("boton").value;
    if(boton =='ocultar'){
        document.getElementById("texto").style.display="none";
        document.getElementById("boton").value="mostrar"
    }else{
        document.getElementById("texto").style.display="inline-block";
        document.getElementById("boton").value="ocultar"
    }

    console.log(boton);
}