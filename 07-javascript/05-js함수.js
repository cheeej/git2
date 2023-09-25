function getGrade(score) {
  if (score === 100) {
    // A+
    return "A+";
  } else if (score >= 90) {
    // A
    return "A";
  } else if (score >= 80) {
    // B
    return "B";
  } else if (score >= 70) {
    // C
    return "C";
  } else if (score >= 60) {
    // D
    return "D";
  } else {
    // F
    return "F";
  }
}
console.log(getGrade(100));
console.log(getGrade(70));
