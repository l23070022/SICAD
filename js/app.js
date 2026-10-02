// ==========================================
// SICAD
// Sistema de Control de Asistencia
// Navegación entre secciones
// ==========================================

function mostrarSeccion(idSeccion) {

    // Obtener todas las secciones
    const secciones = document.querySelectorAll(".seccion");

    // Ocultar todas
    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(idSeccion);

    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add("activa");
    }
}