//Estableciendo variables

const formularioUI =  document.querySelector('#formulario');
const tipoPolizaUI = document.getElementById('tipoPoliza');
let arrayPoliza = [];

// Creando las funciones
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

    tipoPolizaUI.innerHTML = '';

    arrayPoliza = JSON.parse(localStorage.getItem('productos'));

    if(arrayPoliza === null){
        arrayPoliza = [];
    }else{
     arrayPoliza.forEach(element => {

       if(element.estado === true){
        tipoPolizaUI.innerHTML += `<div class="alert alert-primary" role="alert">
        <span class="material-icons" float-left mr-3>article</span><b>${element.poliza}</b> - ${element.estado} <span class="float-right">
        <i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`   
      }else{
        tipoPolizaUI.innerHTML += `<div class="alert alert-danger" role="alert">
        <span class="material-icons" float-left mr-3>article</span><b>${element.poliza}</b> - ${element.estado} <span class="float-right">
        <i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }
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
    
 let indexArray = arrayPoliza.findIndex((elemento)=>{
     return elemento.poliza ===  poliza});

  arrayPoliza[indexArray].estado = true;
  GuardarDB();
}

// EvenListener

formularioUI.addEventListener('submit', (e) => {
 e.preventDefault();
 let polizaUI = document.querySelector('#poliza').value;

    
 CrearItem(polizaUI);
 GuardarDB();

 formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', LeerDB);

tipoPolizaUI.addEventListener('click', (e) => {
 e.preventDefault();

  if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
   
  if(e.target.innerHTML === 'delete')
       //Eliminar
            EliminarDB(e.path[2].childNodes[2].innerHTML);
        }
       if(e.target.innerHTML === 'done'){
           //Editar
           EditarDB(e.path[2].childNodes[2].innerHTML);
       }

});
