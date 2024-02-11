let shopName = "Pik-ka Cafe";
let customerName = "ลูกค้า";
let yourMenu = "น้ำสุ่มประจำวัน";

function greetingCustomer(customerName) {
  const result = `Welcome to ${shopName} คุณ ${customerName} รับอะไรดีคะ?`;
  console.log(result);
  return result;
}
customerName = "ฝนฝน";
greetingCustomer(customerName);

function orderReadyMessage(
  yourMenu = "น้ำสุ่มประจำวัน",
  customerName = "ลูกค้า"
) {
  const result = `${yourMenu} เครื่องดื่มของคุณ ${customerName} ได้แล้วค่ะ`;
  console.log(result);
  return result;
}
yourMenu = "ชาไทย";
customerName = "ฝนฝน";
orderReadyMessage(yourMenu, customerName);
orderReadyMessage();

module.exports = { greetingCustomer, orderReadyMessage };
