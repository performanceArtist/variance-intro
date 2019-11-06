{
  type Animal = {
    prop: string
  }

  type Dog = Animal & {
    bark: () => void
  }

  type F = (a: Animal) => Animal;
  const f: F = (a: Animal) => {
    a.bark();
    return a;
  }

  const animal: Animal = { prop: '' };
  f(animal);
}