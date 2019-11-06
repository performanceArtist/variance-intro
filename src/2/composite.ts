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
