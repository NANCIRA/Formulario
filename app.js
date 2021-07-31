// Variables globales

const formularioUI =  document.querySelector('#formulario');
const listaPolizaUI = document.getElementById('listaPoliza');
let arrayPoliza = [];

// Funciones


const CrearItem = (poliza) => {

    let item = {
        poliza: poliza,
        estado: false
    }

arrayPoliza.push(item);

return item;
}
 
const GuardarDB = () => {

    localStorage.setItem('productos', JSON.stringify(arrayPoliza));

    LeerDB();
}

const LeerDB = () => {

    listaPolizaUI.innerHTML = '';

    arrayPoliza = JSON.parse(localStorage.getItem('productos'));

    if(arrayPoliza === null){
        arrayPoliza = [];
    }else{


        arrayPoliza.forEach(element => {
            listaPolizaUI.innerHTML += `<div class="alert alert-danger" role="alert">
             <span class="material-icons" float-left mr-3>article</span><b>${element.poliza}</b> - ${element.estado} <span class="float-right">
             <i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            });
    }

}
const EliminarDB = (poliza) => {
    let indexArray;
    arrayPoliza.forEach((elemento, index) => {

        if(elemento.poliza === poliza){
            indexArray = index;
        }
    });

    arrayPoliza.splice(indexArray,1);
    GuardarDB();

}

const EditarDB = (poliza) => {
    
    let indexArray = arrayPoliza.findIndex((elemento)=>elemento.poliza ===
        poliza);

       arrayPoliza[indexArray].estado = true;

       GuardarDB();
}



// EvenListener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let polizaUI = document.querySelector('#poliza').value;
º   
    
    CrearItem(polizaUI);
    GuardarDB();



    formularioUI.reset();


});

document.addEventListener('DOMContentLoaded', LeerDB);

listaPolizaUI.addEventListener('click', (e) => {

    e.preventDefault();

      if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[2].innerHTML;
        if(e.target.innerHTML === 'delete'){
            //Acción de eliminar
            EliminarDB(texto);
        }
       if(e.target.innerHTML === 'done'){
           //Acción de editar

       }

    }


});