export default function getStudentsByLocation(students, city) {
  // returns an array of objects who are located in a specific city
  const location = students.filter(
    (student) => student.location === city,
  );

  return location;
}
