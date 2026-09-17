const inputTarea = document.querySelector('#nueva-tarea');
const btnAgregar = document.querySelector('#btn-agregar');
const listaTareas = document.querySelector('#lista-tareas');

const manejarTareas = () => {
    
    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem('tareas');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };

    let tareas = obtenerTareas();

    const agregarTarea = (textoTarea) => {
        const nuevaTarea = {
            tarea: textoTarea,
            completada: false
        };
        tareas.push(nuevaTarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    const eliminarTarea = (indice) => {
        tareas.splice(indice, 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    return {
        agregar: agregarTarea,
        eliminar: eliminarTarea,
        obtenerTodas: () => tareas
    };
};

const gestor = manejarTareas();

const renderizarTareas = () => {
    listaTareas.innerHTML = ''; 
    const tareasActuales = gestor.obtenerTodas();

    tareasActuales.forEach((item, indice) => {
        const li = document.createElement('li');
        li.className = 'item-tarea';

        const span = document.createElement('span');
        span.textContent = item.tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: `Se borrará: "${item.tarea}"`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    gestor.eliminar(indice); 
                    renderizarTareas();      
                    Swal.fire('¡Eliminada!', 'La tarea fue borrada correctamente.', 'success');
                }
            });
        });

        li.appendChild(span);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
};

btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    
    if (texto === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor, escribe una tarea para poder agregarla.'
        });
        return;
    }

    gestor.agregar(texto);
    inputTarea.value = '';
    inputTarea.focus();
    renderizarTareas();
});

renderizarTareas();