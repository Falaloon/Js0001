const luckyColorsForDOB = require("./mutalu.js");

//case input number 0-6
//case input string
//case empty

test("input number of days Lucky Colors For Your BrithDay", () => {
  const luckyColorsForDOBMsg = luckyColorsForDOB(6);
  expect(luckyColorsForDOBMsg).toMatch(
    "คนที่เกิดวัน เสาร์",
    "สีที่ใช้แล้วเสริมสิริมงคลได้แก่: สีแดง สีเหลือง สีฟ้า สีน้ำเงิน สีชมพู สีน้ำตาล",
    "สีที่ควรเลี่ยง: สีเขียวอ่อนและสีเขียวแก่"
  );
});

test("without number of days Lucky Colors For Your BrithDay", () => {
  const luckyColorsForDOBMsg = luckyColorsForDOB(7);
  expect(luckyColorsForDOBMsg).toMatch(
    "กรอกวันเกิดเป็นเลขตามลำดับต่อไปนี้ อาทิตย์ = 0, เสาร์ = 6"
  );
});
