function nameAndAge(yourName = "กรุณากรอกชื่อ", yourAge = "กรุณากรอกอายุ") {
  const result = `${yourName} age ${yourAge}y.`;
  console.log(result);
  return result;
}
nameAndAge("Soontaree", 22);
nameAndAge();

module.exports = { nameAndAge };
