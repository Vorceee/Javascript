document.getElementById("first").innerHTML = "hello world";

let name = "";

name = prompt("whats your name?");

if (name != "") {
    console.log(name);
    myfuntion();
}

function myfuntion() {
    
    document.getElementById("demo").innerHTML = name;
}