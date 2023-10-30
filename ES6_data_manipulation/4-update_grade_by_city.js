export default function updateStudentGradeByCity(students, city, newGrades) {
  // returns an array of students for a specific city with their new grade
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentByCity = students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((note) => student.id === note.studentId);
      let grade = 'N/A';

      if (grades[0]) {
        grade = grades[0].grade;
      }

      return { ...student, grade };
    });

  return studentByCity;

}
