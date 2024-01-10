_toggle.onclick = () => {
    _items.classList.toggle("open");
    _items.classList.toggle("close");
    const links = document.querySelectorAll("#_items a");

    // Agregar un manejador de eventos a cada enlace
    links.forEach(link => {
        link.addEventListener("click", () => {
            // Cerrar el menú al hacer clic en un enlace
            _items.classList.remove("open");
            _items.classList.add("close");
        });
    });
};
