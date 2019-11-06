type FuncA = (a: { a: number }) => void;
type FuncB = (b: { b: string }) => void;

type FuncC = FuncA | FuncB;
type FuncC1 = (a: { a: number } | { b: string }) => void;
type FuncD = FuncA & FuncB;
type FuncD1 = (a: { a: number } & { b: string }) => void;