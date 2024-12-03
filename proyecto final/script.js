document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.slider .list .item');
    const thumbnails = document.querySelectorAll('.thumbnail .item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    let itemActive = 0; // Índice del slide actual
    const countItem = items.length; // Número total de slides

    // Función para actualizar el slider
    function showSlider() {
        // Eliminar clase "active" del slide y thumbnail actuales
        document.querySelector('.slider .list .item.active').classList.remove('active');
        document.querySelector('.thumbnail .item.active').classList.remove('active');

        // Agregar clase "active" al nuevo slide y thumbnail
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    }

    // Evento para botón "siguiente"
    next.onclick = () => {
        itemActive = (itemActive + 1) % countItem; // Incrementar índice (ciclo al inicio si excede)
        showSlider();
    };

    // Evento para botón "anterior"
    prev.onclick = () => {
        itemActive = (itemActive - 1 + countItem) % countItem; // Decrementar índice (ciclo al final si es menor a 0)
        showSlider();
    };

    // Agregar funcionalidad de clic a las miniaturas
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.onclick = () => {
            itemActive = index; // Actualizar índice activo según miniatura clickeada
            showSlider();
        };
    });

    // Inicializar el slider
    showSlider();
});

