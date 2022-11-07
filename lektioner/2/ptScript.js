function myFunction(){
    var time = document.querySelector("#input").value;

    if (time == 60) {
        document.getElementById("response").innerHTML = "perfekt";
    } else if (time > 60) {
        document.getElementById("response").innerHTML = "bra";
    } else if (time < 60) {
        document.getElementById("response").innerHTML = "dåligt";
    }
}