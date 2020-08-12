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