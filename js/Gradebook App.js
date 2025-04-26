function getAverage(testScores) {
  const initialValue = 0;
  const sumWithInitial = testScores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial / testScores.length;
}

function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90 && score <= 99) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score >= 0 && score <= 59) {
    return 'F';
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade === 'F' ? false : true;
}

function studentMsg(testScores, score) {
  return hasPassingGrade(score)
    ? `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(
        score
      )}. You passed the course.`
    : `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(
        score
      )}. You failed the course.`;
}

// const result = getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]);
// console.log(result);
