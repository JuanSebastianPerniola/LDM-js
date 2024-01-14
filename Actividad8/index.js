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
//elimnamos elementos
document.querySelectorAll('.close').forEach(function (closeButton) {
  closeButton.onclick = function () {
    var listItem = closeButton.parentElement;
    listItem.style.display = "none";
  };
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}
);
 
//doc.elemtn = que hace que cuando pulsemos "Enter" se añdaa una tarea 
 document.getElementById("myInput").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    newElement();
  }
});
// Crear nueva tarea por hacer 
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value; //.value pilla el valor de texto introducido
  var t = document.createTextNode(inputValue);

  if (inputValue === '') { // si al pulsar add, no hay nada, salta un aler
    alert("Oops, parece que no has escrito nada, vuelve a intentarlo!");
    return; // Sale de la función si no hay valor
  }

  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Asigna el evento onclick después de crear el nuevo elemento
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };

  // Reasigna los eventos de clic para los elementos close existentes
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}


var showAllTasks = false; // Variable para controlar si se deben mostrar todas las tareas o solo las completadas

// Funcion filtrar listas hechas y cuales no 
function filterTasks() {
  var list = document.getElementById("myUL");
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (showAllTasks || item.classList.contains("checked")) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  }

  // Alternar entre mostrar todas las tareas y solo las completadas
  showAllTasks = !showAllTasks;
}


function filterTasks(filterType) {
  var list = document.getElementById("myUL");
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
      var item = items[i];

      switch (filterType) {
          case 'all':
              item.style.display = "list-item";
              break;
          case 'completed':
              if (item.classList.contains("checked")) {
                  item.style.display = "list-item";
              } else {
                  item.style.display = "none";
              }
              break;
          case 'checked':
              if (item.classList.contains("checked")) {
                  item.style.display = "none";
              } else {
                  item.style.display = "list-item";
              }
              break;
      }
  }
}