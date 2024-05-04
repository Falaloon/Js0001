//เราเป็น พนักงานร้าน ที่ ผจก ให้ราคาสินค้า มา แต่ยังไม่รวม ภาษี (100 บาท)
//เราต้องเรียงสินค้า และปิดป้ายราคาที่มันรวม tax แล้ว
//เรา จะต้องติดป้ายที่ชั้นวางสินค้า 107 บาท
//• Array เก็บราคาสินค้าก่อน tax 3 ชิ้น
//• คำนวณราคาสินค้า เมื่อรวม tax แล้ว ของ 3 ชิ้น

// เก็บราคาสินค้า เป็น array 3ชิ้น เก็บเป็น number
const groceryPriceList = [30, 52, 16.5];

//สร้าง ฟังก์ชั่น ชื่อ calTax รับ parameter priceBeforeTax
//function การหา tax ของสินค้า
function calTax(priceBeforeTax) {
  return (priceBeforeTax * 7) / 100;
}

//สร้าง ฟังก์ชั่น ชื่อ 

//เก็บตัวแปร ชื่อ tax และใช้ method ของ array .map เรียก calTax function เพื่อหา tax ของแต่ละสินค้า ทั้งหมดใน array
const tax = groceryPriceList.map(calTax);
console.log("tax: "+tax);

//สร้าง function ใหม่ ชื่อ sumPriceAndTax เพื่อหาราคาหลังรวม Tax
//function ทำงานโดย รับ parameter 2 ตัว (1 รับ tax, 2 รับ index ของ groceryPriceList)
//เพื่อหา ผลรวมของ tax และ ราคาก่อน tax
function sumPriceAndTax(tax, index) {
  return tax + groceryPriceList[index];
}

//เก็บ ตัวแปร ชื่อ actualPrice และใช้ method ของ array .map เรียก sumPriceAndTax function เพื่อคำนวนราคา หลังรวม tax ทั้งหมดที่มีใน array
const actualPrice = tax.map(sumPriceAndTax);
console.log(actualPrice);

