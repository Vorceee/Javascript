const messages = ['Hello Friend','Hello','Whats going on','Sup matey!'];


function arrayLoop(array) {
    for (let i = 0; i < array.length; i++) {
        alert(array[i]);  
    }
}
function arrayRandom(array) {
    const random = Math.floor(Math.random() * (array.length + 1));

    alert(array[random]);

}

function arrayToString(array) {
    var input = document.querySelector('#input').value;
    array.push(input);

    document.getElementById('text').innerHTML = array.toString();


}