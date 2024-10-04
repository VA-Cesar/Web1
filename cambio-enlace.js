
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.enlaces-encabezado-contenedor3 a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace redirija

            // Remover la clase 'seleccionado' de todos los enlaces
            document.querySelectorAll('.enlaces-encabezado-contenedor3 a').forEach(item => item.classList.remove('seleccionado'));

            // Agregar la clase 'seleccionado' al enlace clicado
            this.classList.add('seleccionado');
        });
    });
});