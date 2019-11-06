{
  type Animal = {
    name: string
  }

  type Dog = Animal & {
    bark: () => void
  }

  type F = (a: Animal) => Animal;

  const f: F = (a: Dog) => {
    a.bark();
    return a;
  }

  const animal: Animal = { name: '' };
  f(animal);
}