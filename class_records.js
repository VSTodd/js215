/*
- Exams are 65% of the grade, exercises 35%
- All exams are out of 100 points, total max points of all exercises equal 100
- To determine a student's grade, first determine the student's average score
  from the four exams, then sum all the exercise scores
- We then apply the weights to compute the student's final percent grade
- Finally, we determine the letter equivalent grade from the student's percent
  grade we just computed.

- We will also need to output the class record summary like so:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

Algroithm:
  - Create two empty arrays, `studentGrades` and `exams`
  - iterate over each student (forEach)
    - initialize `min` set to lowest exam score (reduce)
    - initialize `max` set to highest exam score (reduce)
    - initialize `average`, set to the sum of exam score divieded by 4 (reduce)
    - add min, max, and average to exams as an Object
    - initialize `exerciseAvg`, set to the sum of exercises, divided by length
    - initialize grade, which is equal to average * .65 + exerciseAvg * .35
  - modify each grade to 'grade (letter)' format (map)
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let studentGrades = []
  let exams = []
  let students = Object.keys(scores)

  students.forEach(student => {
    let examScores = scores[student].scores.exams
    let min = examScores.reduce((acc, currentVal) => {
      return currentVal < acc ? currentVal : acc;
    });

    let max = examScores.reduce((acc, currentVal) => {
      return currentVal > acc ? currentVal : acc;
    });

    let average = examScores.reduce((acc, currentVal) => acc + currentVal) / 4;
    exams.push({ 'average': average, 'minimum': min, 'maximum': max})

    let exerciseAvg = scores[student].scores.exercises
      .reduce((acc, currentVal) => acc + currentVal);

    studentGrades.push(calculateGrade(average, exerciseAvg));
  });

  studentGrades = studentGrades.map(grade => `${grade.toFixed(0)} (${letterGrade(grade)})`)

  return { 'studentGrades': studentGrades, 'exams': exams };
};

function letterGrade(grade) {
  if (grade >= 93) {
    return 'A'
  } else if (grade >= 85) {
    return 'B'
  } else if (grade >= 77) {
    return 'C'
  } else if (grade >= 69) {
    return 'D'
  } else if (grade >= 60) {
    return 'E'
  } else {
    return 'F'
  }
}

function calculateGrade(examAvg, exerciseAvg) {
  let weightedExam = examAvg * 0.65;
  let weightedExercise = exerciseAvg * 0.35

  return weightedExam + weightedExercise;
};


console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/