class Car {
    constructor (name){
        this.brand = name;
    }
    present() { 
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name,mode) {
        super(name);
       this.model = mode;
    }
    show() {
        return this.present() + ', it is a ' + this.brand.model
    }
}

mycar = new Model("Ford", "Mustang");

document.write(mycar.show());

 // class & object

class Human {
    constructor(
      n,
      gender,
      hands = "two",
      hairs = "infinite",
      brain = "one",
      legs = "three"
    ) {
      this.name = n;
      this.gender = gender;
      this.hands = hands;
      this.hairs = hairs;
      this.brain = brain;
      this.legs = legs;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am a ${this.gender} human.`;
    }
  }
  
  let ashok = new Human({
    name: "Ashok",
    gender: "male",
    legs: "one",
  });
  console.log(Human);
  