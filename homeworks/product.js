//arr เก็บราคาสินค้าก่อนบวกภาษี 3 ชิ้น
//arr เก็บราคาสินค้าหลังบวกภาษีแล้ว 7%

//สร้างตัวแปร ขื่อ productsPrice
//เก็บราคาของสินค้า 3 ชิ้น แบบ arr
const productsPrice = [250, 100, 150];

//สร้างฟังก์ชั่น ชื่อ valueAddedTax
//เพื่อคำนวณภาษี 7%
function valueAddedTax(productsPrice) {
  return productsPrice * 0.07;
}

//สร้างฟังก์ชั่น ชื่อ twoDecimal
//เพื่อกำหนดให้มีทศนิยม 2 ตำแหน่ง
console.log(productsPrice.map(valueAddedTax));

//vat+productPrice
function totalPrice(productsPrice, index) {
  return (result = productsPrice + vat[index]);
}

//แสดงผลเป็นรายการ
function displayPriceList(productsPrice, totalPrice) {
  const result = "ราคาสินค้าชิ้นที่ " + productsPrice[index] + " " + totalPrice;
  return result;
}

//เรียกใช้งาน
// const vatOfProducts = productsPrice.map(valueAddedTax);
// const totalOfProductsPrice = vatOfProducts.map(totalPrice);

// console.log("ราคาเดิม " + productsPrice);
// console.log("ราคาภาษี " + vatOfProducts);
// //console.log("ราคาสุทธิ " + totalOfProductsPrice);
// //console.log(displayPriceList(productsTotalPrice));
