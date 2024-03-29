# ...

## #1 Номинальная(name-based) и структурная(property-based) типизация

```ts
class Foo {
  constructor(public a: number) {}
}

class Bar {
  constructor(public a: number) {}
}

// ok
const foo: Foo = new Foo(0);
// ok
const bar: Foo = new Bar(0);
```

```cpp
class Foo {
  public:
    int a;

  Foo(int a): a(a) {}
};

class Bar {
  public:
    int a;

  Bar(int a): a(a) {}
};

int main() {
  // ok
  Foo* foo = new Foo(0);
  //error: a value of type Foo* cannot be used to initialize an entity of type Bar*
  Bar* bar = new Foo(0);
}
```

```js
// @flow

class Foo {
  a: number;
  constructor(a: number) {
    this.a = a;
  }
}

class Bar {
  a: number;
  constructor(a: number) {
    this.a = a;
  }
}

// ok
const foo: Foo = new Foo(0);
//cannot assign new Bar to bar because 'Bar' is incompatible with 'Foo'
const bar: Foo = new Bar(0);
```

## #2 Отношения типов

```ts
type BadGrade = 1 | 2 | 3;
type GoodGrade = 3 | 4 | 5;
type Grade = BadGrade | GoodGrade;
type AverageGrade = BadGrade & GoodGrade;

const bad: BadGrade = 2;
const good: GoodGrade = 5;

const goodGrade: GoodGrade = good;
// not assignable
const reallyGoodGrade: GoodGrade = bad;

const anyGrade: number = 3;
// not assignable
const someGrade: GoodGrade = anyGrade;
```

![Grade diagram](./src/2/diagrams/grade.png)

```ts
type Person = {
  name: string;
}

type HasGrade = {
  grade: number
};

type Student = Person & HasGrade;

const a: Person = {
  name: 'Name',
  grade: 1 // Object literal may only specify known properties
}

const student: Student = {
  name: 'Name',
  grade: 3
}

// ok
const person: Person = student;
```

![Student diagram](src/2/diagrams/student.png)

## #3 Вариативность

### Инвариативность

* Animal: Animal
* Dog: Dog

### Ковариативность

* Animal: Animal | Dog
* Dog: Dog

### Контравариативность

* Animal: Animal
* Dog: Animal | Dog

### Бивариативность

* Animal: Animal | Dog
* Dog: Animal | Dog

### Типы высшего порядка

```ts
type List<T> = T[];

type Return<T> = () => T;

type Take<T> = (a: T) => void;
```

### Ковариант

```ts
type Person = {
  name: string;
}

type HasGrade = {
  grade: number
};

type Student = Person & HasGrade;

const student: Student = {
  name: 'Name',
  grade: 3
}

// ok
const person: Person = student;
// ok
const persons: Person[] = [student, student];
```

### Контравариант

```ts
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
const labrador: Labrador = {
  name: '',
  bark: () => console.log('woof'),
  loudBark: () => console.log('WOOF')
};

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
```

### Бивариант в typescript

```ts
type Animal = {
  name: string
}

type Dog = Animal & {
  bark: () => void
}

type F = (a: Animal) => Animal;

// No errors with strictFunctionTypes flag set to false
// otherwise Animal is not Assignable: property bark is missing
const f: F = (a: Dog) => {
  a.bark();
  return a;
}

const animal: Animal = { name: '' };
f(animal);
```

```ts
type FuncA = (a: { a: number }) => void;
type FuncB = (b: { b: string }) => void;


type FuncD = FuncA & FuncB;
type FuncD1 = (a: { a: number } & { b: string }) => void;

const fd: FuncD = (a: ?) => void
const fd1: FuncD1 = (a: ?) => void


type FuncC = FuncA | FuncB;
type FuncC1 = (a: { a: number } | { b: string }) => void;

const fc: FuncC = (a: ?) => void
const fc1: FuncC1 = (a: ?) => void
```
