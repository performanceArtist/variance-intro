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

const foo: Foo = new Foo(0);
const bar: Foo = new Bar(0);