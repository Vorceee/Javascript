const messages = ['Hello Friend','Hello','Whats going on','Sup matey!'];


function arrayLoop(array, selector) {
    if (selector == 1) {
        array.push("enn wfor loop användes")
        for (let i = 0; i < array.length; i++) {
            alert(array[i]);
            document.getElementById('loop').innerHTML = array[i]
        }
    } else {
        let i = 0;
        array.push("enn while loop användes")
        while (i < array.length) {
            alert(array[i])
            document.getElementById('loop').innerHTML = array[i]
            i++
        }
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

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}
function makeCar() {
    const name = document.querySelector('#name').value;
    const year = document.querySelector('#year').value;

    console.log(name, year);

    const myNewCar = new Car(name, year);
    document.getElementById("carText").innerHTML = "your new car is a " + myNewCar.name + " and was made " + myNewCar.year;
}

class Cat {
    constructor(name, color, year) {
        this.name = name;
        this.color = color;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
function makeCat(){
    const name = document.querySelector('#catName').value;
    const color = document.querySelector('#catColor').value;
    const year = document.querySelector('#catYear').value;

    console.log(name, color, year)

    const cat = new Cat(name, color, year);
    document.getElementById("catText").innerHTML = "your new cat is called " + cat.name + ". It is " + cat.age() + " years old. It is colored " + cat.color;
}


