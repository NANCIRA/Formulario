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
}

const LeerDB = () => {

    listaPolizaUI.innerHTML = '';

    arrayPoliza = JSON.parse(localStorage.getItem('productos'));

    if(arrayPoliza === null){
        arrayPoliza = [];
    }else{


        arrayPoliza.forEach(element => {
            listaPolizaUI.innerHTML += ` <div class="alert alert-danger" role="alert">
                <span class="material-icons-outlined">
                        edit_attributes
                        </span> 
                </div>`
            
        });
    }

}



// EvenListener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let polizaUI = document.querySelectorall('#poliza').value;

    
    CrearItem(polizaUI);
    GuardarDB();



    formularioUI.reset();


});

document.addEventListener('DOMContentLoaded', LeerDB);