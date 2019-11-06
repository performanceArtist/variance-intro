{
  type Animal = {
    prop: string
  }

  type Cat = Animal & {
    meow: () => void
  }

  type F = (a: Animal) => Animal;
  const f: F = (a: Cat) => {
    a.meow();
    return a;
  }

  const animal: Animal = { prop: '' };
  f(animal);
}