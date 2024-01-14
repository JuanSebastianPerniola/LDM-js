//cruz par a borrar
document.querySelectorAll('li').forEach(function (element) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  element.appendChild(span);

  span.onclick = function () {
    removeTask(this);
  };
});

function removeTask(element) {
  var listItem = element.parentElement;
  listItem.style.display = "none";
}
//elimnamos elementos creados 
document.querySelectorAll('.close').forEach(function (closeButton) {
  closeButton.onclick = function () {
    var listItem = closeButton.parentElement;
    listItem.style.display = "none";
  };
});

// Añadimos la clase checked o sea que se vea marcada
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}
);

//Añadir opcion para poder intrudicir por input a traves del boton enter
document.getElementById("myInput").addEventListener("keyup", function (event) {
  if (event.key === "Enter") { //detecta si se pula "Enter" la tecla 
    newElement();
  }
});
// Crear nueva tarea por hacer 
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value; //inputValue pilla el valor de texto introducido
  var t = document.createTextNode(inputValue);

  if (inputValue === '') { // si al pulsar add, no hay nada, salta un alert
    alert("Oops, parece que no has escrito nada, vuelve a intentarlo!");
    return; // Sale de la función si no hay valor
  }

  li.appendChild(t); //.appendChild es como el append de python para appendear  
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //Unicode
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Asigna el evento onclick después de crear el nuevo elemento
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };

}

var showAllTasks = false;

function filterTasks(filterType) {
  var list = document.getElementById("myUL");
  var items = list.getElementsByTagName("li");

  if (filterType === 'clear') {
    // Clear all li elements
    list.innerHTML = '';
    return;
  }

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (filterType === 'all' || showAllTasks || item.classList.contains("checked")) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  }

  // Toggle between showing all tasks and only completed tasks
  if (filterType === 'all' || filterType === 'completed') {
    showAllTasks = !showAllTasks;
  }
}
