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
