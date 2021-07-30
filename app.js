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

    localStorage.setItem('productos', JSON.stringify(arrayPoliza));
}

const LeerDB = () => {

    tipoPolizaUI.innerHTML = '';

    arrayPoliza = JSON.parse(localStorage.getItem('productos'));

    if(arrayPoliza === null){
        arrayPoliza = [];
    }else{


        arrayPoliza.forEach(element => {
            tipoPolizaUI.innerHTML += ` <div class="alert alert-danger" role="alert">
            <span class="material-icons-outlined">
                date_range
                </span> 
                    <span class="material-icons-outlined">
                        edit_attributes
                        </span> 
                        <span class="material-icons-outlined">
                            delete
                            </span>
        </div>`
            
        });
    }

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