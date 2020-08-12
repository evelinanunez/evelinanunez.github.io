var boton;
function mostrardetalle() {
    boton=document.getElementById("boton").value;
    if(boton=='Mostrar detalle'){
        document.getElementById("detalle").style.display="inline-block";
        document.getElementById("boton").value="Ocultar detalle";
    }else{
        document.getElementById("detalle").style.display="none";
        document.getElementById("boton").value="Mostrar detalle";
    }
}


function mostrardetalle2(){
    boton=document.getElementById("boton2").value;
    if(boton== "Mostrar detalle"){
        document.getElementById("detalle2").style.display="inline-block";
        document.getElementById("boton2").value="Ocultar detalle";
    }else{
        document.getElementById("detalle2").style.display="none";
        document.getElementById("boton2").value="Mostrar detalle";
    }
    
}