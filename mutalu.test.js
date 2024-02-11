const luckyColorsForDOB = require("./mutalu.js");

//case input number 0-6
//case input string
//case empty

test("Lucky Colors For Your BrithDay", () => {
  const luckyColorsForDOBMsg = luckyColorsForDOB(4);
  expect(luckyColorsForDOBMsg).toBe(
    "คนที่เกิดวัน พฤหัสบดี สีที่ใช้แล้วเสริมสิริมงคลได้แก่: สีส้ม สีเหลือง สีฟ้า สีน้ำเงิน สีเขียวสด สีแดง สีที่ควรเลี่ยง: สีม่วง และสีน้ำตาลเข้ม"
  );
});
