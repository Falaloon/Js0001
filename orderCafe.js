// 1. แต่ละเมนูราคาเท่าไหร่ (ชาเขียว 45 ชาไทย 45 กาแฟ 50 โกโก้ 50 มัทฉะลาเต้ 55)
// 2. ถ้าใส่เย็น เพิ่ม 5 บาท
// 3. นำแก้วมาเอง ลด 5 บาท
let yourMenu = "ชาเขียว";
let iceOrHot = "เย็น";
let greenCafe = "นำแก้วมาเอง";
let queue = 1;

function orderCafe(yourMenu, iceOrHot, greenCafe, queue) {
  let orderPrice = 0;
  switch (yourMenu) {
    case "ชาเขียว":
      orderPrice = 45;
      break;
    case "ชาไทย":
      orderPrice = 45;
      break;
    case "กาแฟ":
      orderPrice = 50;
      break;
    case "โกโก้":
      orderPrice = 50;
      break;
    case "มัทฉะลาเต้":
      orderPrice = 55;
      break;
    // default:
    //   console.log(`ขออภัยค่ะ ${yourMenu} หมด`);
    //   break;
  }

  switch (iceOrHot) {
    case "เย็น":
      iceOrHotPrice = +5;
      break;
    default:
      iceOrHotPrice = 0;
      break;
  }

  switch (greenCafe) {
    case "นำแก้วมาเอง":
      greenCafeDiscount = -5;
      break;
    default:
      greenCafeDiscount = 0;
      break;
  }

  const orderPriceTotal = orderPrice + iceOrHotPrice + greenCafeDiscount;
  const result = `คิวที่ ${queue} ${yourMenu} ${iceOrHot} ได้แล้วค่ะ ${orderPriceTotal}`;
  return result;
}

console.log(orderCafe("ชาแมว", "เย็น", "นำแก้วมาเอง", 2));
console.log(orderCafe("กาแฟ", "เย็น", "นำแก้วมาเอง", 3));

//แก้ไขลำดับการรัน
//แยกฟังก์ชั่น
//เมนูที่ไม่มีในรายการแสดงอะไร
