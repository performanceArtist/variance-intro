// @flow

type FuncD = FuncA & FuncB; // {} => just {} - no supertype
type FuncD1 = (a: { a: number } & { b: string }) => void; // { a: number, b: string } => this + supertypes

const fd: FuncD = (a: {}) => {};

const fd11: FuncD1 = (a: {}) => {};
const fd12: FuncD1 = (a: { a: number }) => {};
const fd13: FuncD1 = (a: { b: string }) => {};
const fd14: FuncD1 = (a: { a: number, b: string }) => {};


type FuncA = (a: { a: number }) => void;
type FuncB = (b: { b: string }) => void;

type FuncC = FuncA | FuncB; // ({ a: number } | {}) | ({ b: string } | {})
type FuncC1 = (a: { a: number } | { b: string }) => void; // contravariant of { a: number } | { b: string }

const fc1: FuncC = (a: { a: number } | { b: string }) => {};
const fc2: FuncC = (a: { a: number }) => {};
const fc3: FuncC = (a: { b: string }) => {};
const fc4: FuncC = (a: {}) => {};

const fc5: FuncC = (a: { a: number } | { b: string, k: string }) => {};
const fc6: FuncC = (a: { a: number, k: string } | { b: string }) => {};
const fc7: FuncC = (a: { a: number, f: string } | { b: string, k: string }) => {};

const fc11: FuncC1 = (a: { a: number } | { b: string }) => {};
const fc12: FuncC1 = (a: { a: number } | {}) => {};
const fc13: FuncC1 = (a: {} | { b: string }) => {};
const fc14: FuncC1 = (a: {}) => {};

const fc15: FuncC1 = (a: { a: number } | { b: string, k: string }) => {};
const fc16: FuncC1 = (a: { a: number, k: string } | { b: string }) => {};
const fc17: FuncC1 = (a: { a: number, f: string } | { b: string, k: string }) => {};
