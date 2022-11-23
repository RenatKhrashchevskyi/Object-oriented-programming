//Simple object
let dog = {
    name: 'Bari',
    legs: 4,
    isAwesome: true
};

// add new property
dog.age = 6;
console.log(dog);


//Adding new methods to objects
dog.bark = function() {
    console.log('Haw-haw! My name is ' + this.name + '!')
}
dog.bark();
console.log(dog);



// use the same method with different objects

let speak = function() {
    console.log(this.sound + ' ! My name is ' + this.name + '!');
};

let cat = {
    sound: 'Mow',
    name: 'Trew',
    speak: speak
};

let pig = {
    sound: 'Hru',
    name: 'Charly',
    speak: speak
};

let horse = {
    sound: 'Igo-go',
    name: 'Mary',
    speak: speak
}

cat.speak();
pig.speak();
horse.speak();


// Creating objects using constructors
// how the constructor looks

//let car = new Car(100, 200)


// creating constructor Car
//==============================


// let Car = function(x, y) {
//     this.x = x;
//     this.y = y;
// };

// let drawCar = function(car) {
//     let carHtml = '<img src="https://www.freeiconspng.com/thumbs/car-icon-png/vehicle-icon-png-car-sedan-4.png">';
//     let carElement = $(carHtml);

//     carElement.css({
//         position: 'absolute',
//         left: car.x,
//         top: car.y
//     });
//     $('body').append(carElement);
// };

// let tesla = new Car(20, 20);
// let nissan = new Car(200, 200);
// drawCar(tesla);
// drawCar(nissan);


//Configuring objects through prototypes
//How the prototype looks

//Car.prototype.draw = function(){}

// Adding the draw method to the Car prototype

let Auto = function (x, y) {
    this.x = x;
    this.y = y;
    this.draw();
};

Auto.prototype.draw = function () {
    let carHtml = '<img src="https://www.freeiconspng.com/thumbs/car-icon-png/vehicle-icon-png-car-sedan-4.png">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position: 'absolute',
        left: this.x,
        top: this.y
    });

    $('body').append(this.carElement);
};

let tesla = new Auto(20, 20);
let nissan = new Auto(200, 200);

tesla.draw();
nissan.draw();


// adding moveRight method

Auto.prototype.moveRight = function (speed) {
    let carSpeed = speed || this.speed
    this.x += this.speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};


Auto.prototype.moveLeft = function (speed) {
    let carSpeed = speed || this.speed;
    this.x -= speed;

    this.carElement ({
        left: this.x,
        top: this.y
    });
};

Auto.prototype.moveUp = function (speed) {
    let carSpeed = speed || this.speed;
    this.y -= carSpeed;

    this.carElement ({
        left: this.x,
        top: this.y
    });
};

Auto.prototype.moveDown = function (speed) {
    let carSpeed = speed || this.speed;
    this.y += carSpeed;

    this.carElement.css ({
        left: this.x,
        top: this.y
    });
};



