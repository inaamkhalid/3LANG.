
const data = ['VHDL', 'ASSEMBLY', 'C#'];
var list = "";
for ( i = 0; i < data.length; i++) {
    list += "<li>" + data[i] + "</li>";
}

document.querySelector("ul").innerHTML = list;
