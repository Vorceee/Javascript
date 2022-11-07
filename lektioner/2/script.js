const header = document.getElementById("header");
const text = document.getElementById("text");
const button_1 = document.getElementById("button-1");
const button_2 = document.getElementById("button-2");
const button_3 = document.getElementById("button-3");
const button_4 = document.getElementById("button-4");
const div = document.getElementById("colorDiv");
const input = document.getElementById("input");
const page = document.getElementById("page");
var promptText = "";


document.getElementById("header").innerHTML = "Lektion 2";
document.getElementById("text").innerHTML = "ett test för lektion 2";

function myFunction() {
    document.getElementById("header").innerHTML = "knappala knappa lappala lappa";
    document.getElementById("text").innerHTML = "knappeli knapp";
    header.classList.add("animation");
    text.classList.add("animation");
    div.classList.add("animation");
    button_3.classList.add("animation");
    button_1.classList.add("no-display");
    button_3.classList.remove("no-display");
    
}
function smallFunction(){
    input.classList.remove("no-display");
    button_4.classList.remove("no-display");
    
}
function buttonFunction() {

    console.log("whack")
    var inputText = document.querySelector("#input").value;

    if (inputText == "ja") {
        button_1.classList.remove("no-display");
        button_2.classList.add("no-display");
        button_4.classList.add("no-display");
        
        input.classList.add("no-display");
        
        document.querySelector("#input").value = "";
    } else {
        input.classList.add("no-display");
        document.getElementById(input).value = "";
        button_4.classList.add("no-display");
        
    }

}

function stop() {
    header.classList.remove("animation");
    text.classList.remove("animation");
    div.classList.remove("animation");
    button_1.classList.add("no-display");
    button_3.classList.add("no-display");
    button_2.classList.remove("no-display");
}