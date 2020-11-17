function añadirFila(){
    var table=document.getElementsByTagName("table")[0];
    var row=table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = prompt("Fila 1");
    cell2.innerHTML = prompt("Fila 2");
    cell3.innerHTML = prompt("Fila 3");
}
//document.getElementsByTagName("table")[0].insertRow(0).insertCell(0).innerHTML="";