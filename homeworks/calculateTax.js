//เราเป็น พนักงานร้าน ที่ ผจก ให้ราคาสินค้า มา แต่ยังไม่รวม ภาษี (100 บาท)
//เราต้องเรียงสินค้า และปิดป้ายราคาที่มันรวม tax แล้ว
//เรา จะต้องติดป้ายที่ชั้นวางสินค้า 107 บาท
//• Array เก็บราคาสินค้าก่อน tax 3 ชิ้น
//• คำนวณราคาสินค้า เมื่อรวม tax แล้ว ของ 3 ชิ้น

// กำหนดให้ groceryPriceList เก็บราคาสินค้า เป็น array 3ชิ้น เก็บเป็น number
const groceryPriceList = [30, 100, 16.5];

//สร้างฟังก์ชั่น ชื่อ calculateEachTax เพื่อหาภาษีมูลค่าเพิ่มของแต่ละสินค้า
function calculateEachTax(priceBeforeTax) {
  return (priceBeforeTax * 7) / 100;
}

//กำหนดให้ตัวแปร tax เพื่อเก็บราคาสินค้าที่คำนวณภาษีแล้ว
//และใช้ method ".map" เรียกใช้ฟังก์ชั่น calTax
const tax = groceryPriceList.map(calculateEachTax);

//สร้างฟังก์ชัน sumTotalPrice เพื่อคำนวณราคาต้นตุน + ภาษี
//โดย รับ parameter 2 ตัว (1 รับ tax, 2 รับ index ของ groceryPriceList)
function sumTotalPrice(tax, index) {
  return tax + groceryPriceList[index];
}

//กำหนดให้ตัวแปร netPrice เพื่อเก็บราคาสินค้าที่คำนวณภาษีแล้ว
//และใช้ method ".map" เรียก sumTotalPrice
const netPrice = tax.map(sumTotalPrice); //[ 32.1, 107, 17.655 ]
