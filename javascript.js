var boton;
var i=0;

function comenzar(){

    boton = document.getElementById("boton");

    h1 = document.getElementById("titulo");

    boton.addEventListener("click",pulsar, false);
}

function pulsar(){

    i=i+1

    if(i==0){
        h1.style.color="black";
    }

    if(i==1){
        h1.style.color="blue";
    }

    if(i==2){
        h1.style.color="green";
    }

    if(i==3){
        h1.style.color="red";
        i=-1;
    }
}


window.addEventListener("load",comenzar,false);