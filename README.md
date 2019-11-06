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
const reallyGoodGrade: GoodGrade = bad;

const anyGrade: number = 3;
const someGrade: GoodGrade = anyGrade;
```

## #3 Типы высшего порядка

```ts
type List<T> = T[];

type Pair<F, S> = {
  first: F,
  second: S
}

type Return<T> = () => T;

type TakeReturn<T, R> = (a: T) => R;

```

## #4 Вариативность


## Ссылки

