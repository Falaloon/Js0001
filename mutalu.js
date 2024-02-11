function luckyColorsForDOB(numberOfDays) {
  const daysOfWeek = [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ];
  let luckyColors = "";
  let unLuckyColors = "";

  switch (numberOfDays) {
    case 0:
      luckyColors = "สีส้ม สีแดง สีชมพู  สีเขียว สีขาว";
      unLuckyColors = "สีน้ำเงิน สีฟ้า และสีคราม";
      break;

    case 1:
      luckyColors = "สีเขียวสด สีดำ  สีขาว สีม่วง";
      unLuckyColors = "สีแดง";
      break;

    case 2:
      luckyColors = "สีดำ สีเหลือง สีชมพู สีม่วง สีแดง สีแสด";
      unLuckyColors = "สีเหลืองอ่อน และสีขาว";
      break;

    case 3:
      luckyColors =
        "กลางวัน: สีเขียว สีเหลืองอ่อน สีเหลืองแก่, กลางคืน: สีเขียว สีดำ สีน้ำตาล สีขาว";
      unLuckyColors =
        "กลางวัน: สีชมพูและสีโอลด์โรส, กลางคืน: สีเหลืองเข้ม สีทอง สีส้ม หรือสีแส";
      break;

    case 4:
      luckyColors = "สีส้ม สีเหลือง สีฟ้า สีน้ำเงิน สีเขียวสด สีแดง";
      unLuckyColors = "สีม่วง และสีน้ำตาลเข้ม";
      break;

    case 5:
      luckyColors = "สีฟ้า สีน้ำเงิน สีขาว สีเหลือง สีชมพู สีแสด";
      unLuckyColors = "สีเทาเข้ม";
      break;

    case 6:
      luckyColors = "สีแดง สีเหลือง สีฟ้า สีน้ำเงิน สีชมพู สีน้ำตาล";
      unLuckyColors = "สีเขียวอ่อนและสีเขียวแก่ ";
      break;
  }
  const result = `คนที่เกิดวัน ${daysOfWeek[numberOfDays]} สีที่ใช้แล้วเสริมสิริมงคลได้แก่: ${luckyColors} สีที่ควรเลี่ยง: ${unLuckyColors}`;
  return result;
}

module.exports = luckyColorsForDOB;

//case input number 0-6
//case input string
//case empty
//improve result