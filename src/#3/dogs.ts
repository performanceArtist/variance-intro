{
  type Animal = {
    name: string
  };

  type Dog = Animal & {
    bark: () => void;
  }

  type Labrador = Dog & {
    loudBark: () => void;
  }

  const animal: Animal = { name: '' };
  const dog: Dog = { name: '', bark: () => console.log('woof') };
  const labrador: Labrador =  { name: '', bark: () => console.log('woof'), loudBark: () => console.log('WOOF') };

  const f1 = (a: Dog): Dog => dog;
  const f2 = (a: Dog): Labrador => labrador;
  const f3 = (a: Dog): Animal => animal;
  type F1 = (a: Dog) => Dog;
  const ff1: F1 = f1;
  const ff2: F1 = f2;
  const ff3: F1 = f3;

  const fa1 = (a: Dog): Dog => dog;
  const fa2 = (a: Labrador): Dog => dog;
  const fa3 = (a: Animal): Dog => dog;
  const faf1: F1 = fa1;
  const faf2: F1 = fa2;
  const faf3: F1 = fa3;
}