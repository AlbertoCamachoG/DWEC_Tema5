console.log("Hay "+document.links.length+" enlaces");
console.log("El penultimo enlace es: "+document.links[document.links.length-2].href);
var enl=0;
for(var i=0; i<=document.links.length-1; i++){
    if(document.links[i].href=="https://www.google.com/"){enl++;}
}
console.log("Hay "+enl+" enlaces de google");
enl=0;
for(var i=0; i<=document.links.length-1; i++){
    if(document.links[i].parentElement.id=="3"){enl++;}
}
console.log("Hay "+enl+" enlaces en el 3 parrafo");