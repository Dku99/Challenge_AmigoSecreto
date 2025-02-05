// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    const campoAmigo=document.getElementById('amigo');
    const nombreAmigo=campoAmigo.value.trim();


    if(nombreAmigo===" "){
        alert("ingresa un nombre");
        return;

    }
    if(amigos.includes(nombreAmigo)){//checar que no se repita el nombre
        alert(`el nombre ${nombreAmigo}, ya esta registrado`);
        return
    }
    //agregar al arreglo
    amigos.push(nombreAmigo);
    //limpiar el campo
    campoAmigo.value="";

    actualizarList();
}

function actualizarList(){
    const ListaAmigos =document.getElementById('listaAmigos');
    //elimina el contenido del campo
    ListaAmigos.innerHTML="";

    for(let i=0;i<amigos.length;i++){
        const li=document.createElement('li');
        li.textContent=amigos[i];
        ListaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length===0){
        alert("No se encuentran nombres registrados, registra al menos uno");
        return
    }
    //generar aletoriamente la seleccion
    const nombAleat=Math.floor(Math.random()*amigos.length);
    //seleccion
    const AmigoSort=amigos[nombAleat];
    const resultadoNombre=document.getElementById('resultado');
    resultadoNombre.innerHTML = `amigo sorteado: <strong> ${AmigoSort} </strong>`


}