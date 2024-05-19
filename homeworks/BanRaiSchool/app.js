const form = document.getElementById("gradeForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errorMessage = ""; // Store validation error message

  const accumulateScoreInput = document.getElementById("accumulateScore");
  const accumulateScore = validateScore(accumulateScoreInput.value);

  const midturmScoreInput = document.getElementById("midturmScore");
  const midturmScore = validateScore(midturmScoreInput.value);

  const finalScoreInput = document.getElementById("finalScore");
  const finalScore = validateScore(finalScoreInput.value);

  if (errorMessage) {
    // Check if there's an error message
    result.textContent = errorMessage;
  } else {
    const totalScore = accumulateScore + midturmScore + finalScore;
    const yourGrade = getGrade(totalScore); // Call getGrade function
    result.textContent = yourGrade;
  }
});

let accumalateScore = 40;
let midturmScore = 30;
let finalScore = 30;

function validateScore(score) {
  if (
    typeof score !== "number" ||
    score < 0 ||
    (score === "accumulateScore" && score > 40) || // Check max for accumulateScore
    (score === "midturmScore" && score > 30) || // Check max for midturmScore
    (score === "finalScore" && score > 30) // Check max for finalScore
  ) {
    return "Invalid score. Please enter a number between the specified limits.";
  }
  return score; // Return the validated score

  function getGrade(totalScore) {
    let grade = "";
    if (totalScore >= 80) {
      grade = "Your grade is A";
    } else if (totalScore >= 75) {
      grade = "Your grade is B+";
    } else if (totalScore >= 70) {
      grade = "Your grade is B";
    } else if (totalScore >= 65) {
      grade = "Your grade is C+";
    } else if (totalScore >= 60) {
      grade = "Your grade is C";
    } else if (totalScore >= 55) {
      grade = "Your grade is D+";
    } else if (totalScore >= 50) {
      grade = "Your grade is D";
    } else {
      grade = "Your grade is F";
    }
    return grade;
  }
}
