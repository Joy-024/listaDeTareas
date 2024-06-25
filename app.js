
const divfecha = document.querySelector('.usuario__fecha')
const input = document.querySelector('.crear__input')
const lista = document.querySelector('.pendiente__tareas')
const botonAgregar = document.querySelector('#agregar')

// funcion de la fecha

const fecha = new Date();
divfecha.innerHTML = fecha.toLocaleDateString('es-VE',{weekday:"long", month:"short", day: "numeric"});

//add funcion agregarTarea a la tecla "Enter" y al icono +

botonAgregar.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});

// funcion para agregar tarea


function agregarTarea() {

  if (input.value) {

    let divTarea = document.createElement('div');
    divTarea.classList.add('pendiente__tarea--div');
    
    lista.appendChild(divTarea);

    let parrafoTarea = document.createElement("p");
    parrafoTarea.classList.add('parrafo');
    parrafoTarea.innerText = input.value;
    divTarea.appendChild(parrafoTarea);

    let divIconos = document.createElement('div')
    divIconos.classList.add('pendiente__div--iconos');
    divTarea.appendChild(divIconos);

    let completar = document.createElement('i');
    completar.classList.add('fa-regular', 'fa-circle-check');
    completar.addEventListener('click', realizarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('fa-regular', 'fa-trash-can');
    eliminar.addEventListener('click', borrarTarea);

    divIconos.append(completar, eliminar);
  
  } else {

    alert('Por favor ingresa una tarea.');

  }

  input.value='';
}

// Marcar una tarea como completada.
function realizarTarea(e) {

  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('realizada__tarea');
  console.log(tarea)

}

// Eliminar una tarea del DOM.
function borrarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}