const readlineSync = require("readline-sync");


 /* 
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get full() {
        return this.name + " " + this.age;
      }
      set full(val) {
        this.name = val.split(" ")[0];
        this.age = val.split(" ")[1];
      }
      talk() {
        console.log(this.name + " " + this.age+" years.");
      }
    }


let Skitty = new Cat("Skitty", "9");
let Pixel = new Cat("Pixel", "6");

console.log(Skitty.name);
console.log(Pixel);
Skitty.talk();
Pixel.talk();
*/

/*
class Person {
    constructor(firstname, surname) {
      this.firstname = firstname;
      this.surname = surname;
    }
    get fullName() {
      return this.firstname + " " + this.surname;
    }
    set fullName(val) {
      this.firstname = val.split(" ")[0];
      this.surname = val.split(" ")[1];
    }
    sayHello() {
      return `Hello ${this.firstname}, ${this.surname}`;
    }
  }

  let x = new Person("Cédric"," Wietkin");
  console.log(x.fullName);
  console.log(x.sayHello());

  class Animal {
    constructor(greeting){
        this.greeting = "hello";
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;

    }
}
  
  class Cat extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
  }
  
  // Test de la classe Cat
  const cat = new Cat("Misty");
  console.log(cat.sayHello());
  
  // Test de la classe Dog
  const dog = new Dog("Buddy");
  console.log(dog.sayHello());
  */

  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    
    get name() {
      return `${this.firstname} ${this.lastname}`;
    }
    
    set name(fullname) {
      const [firstname, lastname] = fullname.split(" ");
      this.firstname = firstname;
      this.lastname = lastname;
    }
  }
  
  // Test the class
  const person = new Person("John", "Doe");
  console.log(person.name);
  
  person.name = "Jane Smith";
  console.log(person);