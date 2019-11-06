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
  Foo* foo = new Foo(0);
  Bar* bar = new Foo(0);
}