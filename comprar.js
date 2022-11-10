function calcular() {
    var aux = document.getElementById("drop");
    var categoria = aux.options[aux.selectedIndex].text;
    console.log(categoria);

    var cantidad = document.getElementById("cantidad").value;
    console.log(cantidad);

    switch (categoria) {
        case "Estudiante": document.getElementById("total").innerHTML = "Total a pagar: $" + (cantidad * 0.2 * 200);
        break;
        case "Trainee": document.getElementById("total").innerHTML = "Total a pagar: $" + (cantidad * 0.5 * 200);
        break;
        case "Junior": document.getElementById("total").innerHTML = "Total a pagar: $" + (cantidad * 0.85 * 200);
        break;
    }
}

function borrar() {
    document.getElementById("total").innerHTML = "Total a pagar: $";
}