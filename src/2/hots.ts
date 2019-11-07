type List<T> = T[];

type Pair<F, S> = {
  first: F,
  second: S
}

type Return<T> = () => T;

type Take<T> = (a: T) => void;