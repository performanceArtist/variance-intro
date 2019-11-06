{
  type Person = {
    name: string;
  }

  type Student = Person & {
    grade: number
  };

  const student: Student = {
    name: 'Name',
    grade: 3
  }

  // ok
  const person: Person = student;
  // ok
  const persons: Person[] = [student, student];
}
