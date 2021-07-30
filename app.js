// Variables globales

const formularioUI =  document.querySelector('#formulario');
const tipoPolizaUI = document.getElementById('tipoPoliza');
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

    localStorage.setItem('clientes', JSON.stringify(arrayPoliza))
}



// EvenListener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let polizaUI = document.querySelector('#poliza').value;

    
    CrearItem(polizaUI);

    formularioUI.reset();





});