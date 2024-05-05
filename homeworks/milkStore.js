/*
• ทดลองสร้าง object ที่เก็บ รายละเอียด สินค้า
ประเภท นม ในร้านค้า 
• object ที่เก็บ ประวัติส่วนตัว สมาชิกฟิตเนส
• มี method มาร์คว่า หมดอายุ แล้ว
*/

/*
-declare variable name milks that have flavor, productOf, type
-declare function name expiryDate to display on product
-declare variable name userthat have firstName, age, sex, favoritActivity
*/

const milks = {
  flavor: "Strawbery milk",
  productOf: "Thailand",
  type: "Skim milk",
  expiry: "20-05-2025",
  expiryDate: function () {
    return this.flavor + " " + "expiry date: " + this.expiry;
  },
};
console.log(milks.expiryDate());

const user = {
  firstName: "Kate",
  lastName: "Stanly",
  age: 34,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(user.fullName());
