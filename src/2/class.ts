class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Animal is moving');
  }
}

class Dog extends Animal {
  constructor(public name: string) {
    super(name);
  }

  bark() {
    console.log('woof');
  }
}

class Labrador extends Dog {

}

const animal: Animal = new Dog('Borsh');
const dog: Dog = new Animal('Dog');
const labrador: Labrador = new Dog('Test');