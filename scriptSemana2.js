function addValor() {
    var valor = document.getElementById("valor").value;
    if (valor.trim() !== "") {
        valores.push(valor);
        valores.sort();
        exibir();
    }
    document.getElementById("valor").value = "";
}

function exibir() {
    var lista = "<ol>";
    for (var i = 0; i < valores.length; i++) {
        lista += "<li>" + valores[i] + "</li>";
    }
    lista += "</ol>";
    document.getElementById("valores-lista").innerHTML = lista;
}
var valores = [];
