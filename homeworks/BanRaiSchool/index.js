const form = document.getElementById("gradeForm");
const result = document.getElementById("result");

const studentInfo = [];
const resultNewStudent = document.getElementById("resultNewStudent");
const newForm = document.getElementById("addNewStudentForm");

function validateScore(score) {
  if (
    typeof score !== "number" ||
    score < 0 ||
    (score === "accumulateScore" && score > 40) || // Check max for accumulateScore
    (score === "midtermScore" && score > 30) || // Check max for midtermScore
    (score === "finalScore" && score > 30) // Check max for finalScore
  ) {
    return "Invalid score. Please enter a number between the specified limits.";
  }
  return score; // Return the validated score
}
function getGrade(totalScore) {
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

function AddStudentInfo(
  firstName,
  lastName,
  accumulateScore,
  midtermScore,
  finalScore
) {
  let totalScore =
    Number(accumulateScore) + Number(midtermScore) + Number(finalScore);
  let newStudent = {
    id: studentInfo.length + 1,
    firstName: firstName,
    lastName: lastName,
    accumulateScore: Number(accumulateScore),
    midtermScore: Number(midtermScore),
    finalScore: Number(finalScore),
    totalScore: totalScore,
    grade: getGrade(totalScore),
  };
  console.log(newStudent);

  studentInfo.push(newStudent);
}

function displyNewStudentInfo() {
  let lists = document.getElementById("displayNewStudentList");

  studentInfo.forEach((updatedStudent) => {
    let trTag = document.createElement("tr");

    let tdTagFirstName = document.createElement("td");
    tdTagFirstName.textContent = updatedStudent.firstName;

    let tdTagLastName = document.createElement("td");
    tdTagLastName.textContent = updatedStudent.lastName;

    let tdTagTotalScore = document.createElement("td");
    tdTagTotalScore.textContent = updatedStudent.totalScore;

    let tdTagGrade = document.createElement("td");
    tdTagGrade.textContent = updatedStudent.grade;

    trTag.appendChild(tdTagFirstName);
    trTag.appendChild(tdTagLastName);
    trTag.appendChild(tdTagTotalScore);
    trTag.appendChild(tdTagGrade);
    lists.appendChild(trTag);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorMessage = ""; // Store validation error message

  const accumulateScoreInput = document.getElementById("accumulateScore").value;
  const accumulateScore = validateScore(Number(accumulateScoreInput));

  const midtermScoreInput = document.getElementById("midtermScore").value;
  const midtermScore = validateScore(Number(midtermScoreInput));

  const finalScoreInput = document.getElementById("finalScore").value;
  const finalScore = validateScore(Number(finalScoreInput));

  if (errorMessage) {
    result.textContent = errorMessage;
  } else {
    const totalScore = accumulateScore + midtermScore + finalScore;

    const yourGrade = getGrade(totalScore); // Call getGrade function
    result.textContent = yourGrade;
  }
});

newForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const accumulateScoreInput =
    document.getElementById("newAccumulateScore").value;
  const accumulateScore = validateScore(Number(accumulateScoreInput));

  const midtermScoreInput = document.getElementById("newmidtermScore").value;
  const midtermScore = validateScore(Number(midtermScoreInput));

  const finalScoreInput = document.getElementById("newFinalScore").value;
  const finalScore = validateScore(Number(finalScoreInput));

  const isDuplicateRecord =
    studentInfo.filter((item) => item.firstName === firstName).length > 0 &&
    studentInfo.filter((item) => item.lastName === lastName).length > 0;

  // const allReadyDisplay =
  // tdTagFirstName.textContent == updatedStudent.firstName &&
  // tdTagLastName.textContent == updatedStudent.lastName;
  if (!isDuplicateRecord) {
    AddStudentInfo(
      firstName,
      lastName,
      accumulateScore,
      midtermScore,
      finalScore
    );
    displyNewStudentInfo();

    // if (!allReadyDisplay) {
    //   displyNewStudentInfo();
    // }
  }
});
