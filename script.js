//this is a constructor function, it allows us to create new student objects.
function student(name, age, attitude) {
    this.name = name;
    this.age = age;
    this.attitude = attitude;
}
// here we will be creating our first student object.

let Mike = new student('Mike', 14, 'talented');

console.log(Mike.name); // Mike

console.log(Mike.gender);// undefined

//But we can add a property to the constructor so that all the new students have the same property, aka a prototype.
student.prototype.gender = 'Male'; // All the children in our class are males, so it's handy to create a prototype of gender because all the children in the class are males.

let Todd = new student('Todd', 14, 'troublemaker');
let Alex = new student('Alex', 15, 'sweet');
//Even Mike that was defined before defining the prototype of gender. We can still access his gender property through the prototype.
function introduce(student) {
    console.log('This is ' + student.name + ' and he is ' + student.age + ' and he is ' + student.attitude + '. No need to mention that all the students are ' + student.__proto__.gender +'s.');
}

introduce(Mike) // Works.

// this is how to access the prototype of a constructor function using one of its instances. Let's use Todd in this example.
let proto = Object.getPrototypeOf(Todd);
console.log(proto); // returns the prototype object.

// you can also access the constructor function of a prototype using that prototype.

console.log(proto.constructor) // returns the function student();
// if you use the bracket notation to redefine an already-defined prototype property, it won't affect the previously defined instances.
student.prototype = {gender: 'Female'};

let Sam = new student('Sam', 34, 'positive');

console.log(Todd.__proto__);
console.log(Mike.__proto__);
console.log(Sam.__proto__);