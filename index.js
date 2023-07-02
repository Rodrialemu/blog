function loadSubPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var subPageContainer = document.getElementById("subPageContainer");
                subPageContainer.innerHTML = this.responseText;
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

}

loadSubPage("views/Blog.html");


function enviarFormulario() {
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagen = document.getElementById("imagen").files[0];
    var nuevaEntrada = document.createElement("div");
    nuevaEntrada.classList.add("entrada");
    var tituloElement = document.createElement("h2");
    tituloElement.textContent = titulo;
    var descripcionElement = document.createElement("p");
    descripcionElement.textContent = descripcion;
    var imagenElement = document.createElement("img");
    imagenElement.src = URL.createObjectURL(imagen);
    imagenElement.style.maxWidth = "50%";
    imagenElement.style.maxHeight = "30%";
    var editarButton = document.createElement("button");
    editarButton.textContent = "Editar";
    editarButton.style.backgroundColor = "#ffff";
    editarButton.style.margin = "20px"
    editarButton.style.display = "block";
    editarButton.addEventListener("click", function () {
        editarEntrada(nuevaEntrada);
    });
    var eliminarButton = document.createElement("button");
    eliminarButton.textContent = "Eliminar";
    eliminarButton.style.backgroundColor = "#ffff";
    eliminarButton.style.display = "block";
    eliminarButton.style.margin = "20px"
    eliminarButton.addEventListener("click", function () {
        eliminarEntrada(nuevaEntrada);
    });
    nuevaEntrada.appendChild(tituloElement);
    nuevaEntrada.appendChild(descripcionElement);
    nuevaEntrada.appendChild(imagenElement);
    nuevaEntrada.appendChild(editarButton);
    nuevaEntrada.appendChild(eliminarButton);
    document.getElementById("entradas").appendChild(nuevaEntrada);
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("imagen").value = "";
}
function editarEntrada(entrada) {
    var tituloElement = entrada.querySelector("h2");
    var descripcionElement = entrada.querySelector("p");
    var nuevoTitulo = prompt("Nuevo título:", tituloElement.textContent);
    if (nuevoTitulo !== null) {
        tituloElement.textContent = nuevoTitulo;
    }
    var nuevaDescripcion = prompt("Nueva descripción:", descripcionElement.textContent);
    if (nuevaDescripcion !== null) {
        descripcionElement.textContent = nuevaDescripcion;
    }
}
function eliminarEntrada(entrada) {
    entrada.remove();
}


$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
