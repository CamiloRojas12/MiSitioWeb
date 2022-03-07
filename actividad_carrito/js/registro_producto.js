"Use Strict"

function crearTabla() {
    if(validarFormulario) {
    let contenedor = document.getElementById("table_js");
    let nodeTable = document.createElement("table");


    let nodeTr = document.createElement("tr");


    let nodeTh = document.createElement("th");
    let nodeTh2 = document.createElement("th");
    let nodeTh3 = document.createElement("th");
    let nodeTh4 = document.createElement("th");
    
    let nodeTexto = document.createTextNode("codigo");
    let nodeTexto2 = document.createTextNode("descripcion");
    let nodeTexto3 = document.createTextNode("valorUnitario");
    let nodeTexto4 = document.createTextNode("unidadesStock");


    contenedor.appendChild(nodeTable);
    nodeTable.appendChild(nodeTr);
    nodeTr.appendChild(nodeTh);
    nodeTr.appendChild(nodeTh2);
    nodeTr.appendChild(nodeTh3);
    nodeTr.appendChild(nodeTh4);
    nodeTh.appendChild(nodeTexto);
    nodeTh2.appendChild(nodeTexto2);
    nodeTh3.appendChild(nodeTexto3);
    nodeTh4.appendChild(nodeTexto4);


    nodeTable.setAttribute("class","table-style");
}
};
function validarFormulario() {
    let codigo = document.getElementById("codigo").value;
    let descripcion = document.getElementById("descripcion").value;
    let Valor = document.getElementById("valorUnitario").value;
    let Stock = document.getElementById("unidadesStock").value;

    if(codigo =="") {
        alert("Por favor, ingrese el codigo");
        document.getElementById("codigo").focus();
        return false;
    }
    if(descripcion == "") {
        alert("Por favor, ingrese el codigo");
        document.getElementById("descripcion").focus();
        return false;
    }
    if(Valor == "") {
        alert("Por favor, ingrese el codigo");
        document.getElementById("valorUnitario").focus();
        return false;
    }
    if(Stock == "") {
        alert("Por favor, ingrese el codigo");
        document.getElementById("UnidadesStock").focus();
        return false;
    }
    return  true;


};

