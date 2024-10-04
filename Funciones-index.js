// Funciones para cargar el contenido dinámico
var linkHome = document.getElementById('link-Home');
var linkServices = document.getElementById('link-services');
var linkAbout = document.getElementById('link-about');
var linkFaq = document.getElementById('link-faq');
var linkNews = document.getElementById('link-news');
var linkContact = document.getElementById('link-contact');

function cargarContenidoEncabezado1(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            try {
                if (xhr.status == 200) {
                    var contenido = document.getElementById('contenido');
                    if (contenido) {
                        contenido.innerHTML = xhr.responseText;
                    } else {
                        console.error('Elemento con ID "contenido" no encontrado.');
                    }
                } else {
                    console.error('Error en la solicitud. Estado:', xhr.status);
                }
            } catch (e) {
                console.error('Error al asignar el contenido:', e);
            }
        }
    };
    xhr.send();
}

linkHome.addEventListener('click', function(event) {
    event.preventDefault();
    cargarContenidoEncabezado1('Encabezado1/encabezado1-home.php');
});
linkServices.addEventListener('click', function(event) {
    event.preventDefault();
    cargarContenidoEncabezado1('Encabezado1/encabezado1-services.php');
});
linkAbout.addEventListener('click', function(event) {
    event.preventDefault();
    cargarContenidoEncabezado1('Encabezado1/encabezado1-about.php');
});
linkFaq.addEventListener('click', function(event) {
    event.preventDefault();
    cargarContenidoEncabezado1('Encabezado1/encabezado1-faq.php');
});
linkNews.addEventListener('click', function(event) {
    event.preventDefault();
    cargarContenidoEncabezado1('Encabezado1/encabezado1-news.php');
});
linkContact.addEventListener('click', function(event) {
    event.preventDefault();
    cargarContenidoEncabezado1('Encabezado1/encabezado1-contact.php');
});

// Mostrar "home" por defecto
cargarContenidoEncabezado1('Encabezado1/encabezado1-home.php');




// Funciones para el segundo conjunto de enlaces
var linkOpcion1 = document.getElementById('link-opcion1');
var linkOpcion2 = document.getElementById('link-opcion2');
var linkOpcion3 = document.getElementById('link-opcion3');
var linkOpcion4 = document.getElementById('link-opcion4');
var linkOpcion5 = document.getElementById('link-opcion5');

function cargarContenidoEncabezado2(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var contenido = document.getElementById('contenido2');
            contenido.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function cargarYMantenerPosicion(event, url) {
    event.preventDefault();
    cargarContenidoEncabezado2(url);
}

linkOpcion1.addEventListener('click', function(event) {
    cargarYMantenerPosicion(event, 'Encabezado2/encabezado2-opcion1.php');
});

linkOpcion2.addEventListener('click', function(event) {
    cargarYMantenerPosicion(event, 'Encabezado2/encabezado2-opcion2.php');
});

linkOpcion3.addEventListener('click', function(event) {
    cargarYMantenerPosicion(event, 'Encabezado2/encabezado2-opcion3.php');
});

linkOpcion4.addEventListener('click', function(event) {
    cargarYMantenerPosicion(event, 'Encabezado2/encabezado2-opcion4.php');
});

linkOpcion5.addEventListener('click', function(event) {
    cargarYMantenerPosicion(event, 'Encabezado2/encabezado2-opcion5.php');
});

// Mostrar "opcion 4" por defecto
cargarContenidoEncabezado2('Encabezado2/encabezado2-opcion4.php');



