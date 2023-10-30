export default function getStudentIdsSum(students) {
  // returns the sum of all the student ids
  const resultAdd = students.reduce((total, student) => total + student.id, 0);

  return resultAdd;
}
