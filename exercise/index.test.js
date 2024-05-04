const { nameAndAge } = require("./index");

test("input yourName and your age", () => {
  const nameAndAgeMsg = nameAndAge("ฝนฝน", 22);
  expect(nameAndAgeMsg).toBe("ฝนฝน age 22y.");
});

test("no input of yourName and your age", () => {
  const nameAndAgeMsg = nameAndAge();
  expect(nameAndAgeMsg).toBe("กรุณากรอกชื่อ age กรุณากรอกอายุy.");
});
