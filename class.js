// new operator
// The new operator lets developers create an instance of a user-defined object
// type or of one of the built-in object types that has a constructor function.
function newOperator() {
    function Dog() {
        this.eatFood = 'NomNomNom';
        this.eat = () => console.log(this.eatFood);
    }

    let maddie = new Dog();
    console.log(maddie instanceof Dog); // True
    maddie.eat(); //NomNomNom
}

// Creating an instance of an object using 'new', ES5 style
function oldStyle() {
    function Fruit(title, price) {
        this.title = title;
        this.price = price;
        this.show = () =>
            console.log(`title = ${this.title}, price = ${this.price}`);
    }

    // 'new' makes a new instance of the Fruit() and return the instance to variables.
    fruit1 = new Fruit('Kiwi', 1000);
    fruit2 = new Fruit('Orange', 2000);
    console.log(fruit1); // Fruit { title: 'Kiwi', price: 1000, show: [Function ()] }
    console.log(fruit2); // Fruit { title: 'Orange', price: 2000, show: [Function ()] }

    // Fruit() without 'new' means that is just calling Fruit().
    fruit3 = Fruit('Cherry', 3000); // return nothing to fruit3
    console.log(fruit3); // undefined
}
