let score = 75;
let grade = "xyz";

switch (true) {
  case score >= 80: //case False: 
    grade = "A";
    break;

  case score >= 75:
    grade = "B+";
    break;

  case score >= 70:
    grade = "B";
    break;

  case score >= 65:
    grade = "C+";
    break;

  case score >= 60:
    grade = "C";
    break;

  case score >= 55:
    grade = "D+";
    break;

  case score >= 50:
    grade = "D";
    break;

  case score <= 49:
    grade = "F";
    break;
}

console.log("test " + grade);
console.log(score <= 49);
console.log(`your score is ${score} you get  ${grade}`);
