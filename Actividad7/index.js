_toggle.onclick = () => {
    //manejador de cuando aparece las clases .open y .close
    _items.classList.toggle("open");
    _items.classList.toggle("close");

    //creo variable que guarda los links
    const links = document.querySelectorAll("a");

    //  agrego un manejador de eventos para que cada vez que le demos a un link se cierre
    //Preguntar al profesor cuan de correcto es esto 
    links.forEach(link => {
        link.addEventListener("click", () => {
            // Cerrar el menú al hacer clic en un enlace
            _items.classList.remove("open");
            _items.classList.add("close");
        });
    });
};
