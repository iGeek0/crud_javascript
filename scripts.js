
console.log("el contenido fue cargado");
let tareas;
if (localStorage.getItem('tareas') === null) {
    tareas = [];
} else {
    tareas = JSON.parse(localStorage.getItem('tareas'));
    mostrarTareas();
}


function agregarTarea() {
    const tareaInput = document.getElementById("tareaInput");
    const textoTarea = tareaInput.value.trim();
    if (textoTarea !== "") {
        tareas.push(textoTarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        mostrarTareas();
        tareaInput.value = "";
    }
}


function mostrarTareas() {
    const tareaList = document.getElementById("tareas");
    tareaList.innerHTML = "";
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    if (tareas) {
        tareas.forEach(function(tarea, index) {
            const li = document.createElement("li");
            li.textContent = tarea;

            // Botón para eliminar tarea
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", function() {
                eliminarTarea(index);
            });
            li.appendChild(deleteButton);

            // Botón para editar tarea
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.addEventListener("click", function() {
                editarTarea(index);
            });
            li.appendChild(editButton);

            tareaList.appendChild(li);
        });
    }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
}

// Función para editar una tarea
function editarTarea(index) {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    const nuevaTarea = prompt("Editar tarea", tareas[index]);
    if (nuevaTarea !== null) {
        tareas[index] = nuevaTarea;
        localStorage.setItem("tareas", JSON.stringify(tareas));
        mostrarTareas();
    }
}

document.getElementById("agregarTareaBtn").addEventListener("click", agregarTarea);
