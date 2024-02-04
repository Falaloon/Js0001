let shopName = "Pik-ka Cafe";

function greetingCustomer(customerName = "ลูกค้า") {
  const result = `Welcome to ${shopName} คุณ ${customerName} รับอะไรดีคะ?`;
  console.log(result);
  return result;
}

greetingCustomer("ฝนฝน");

function orderReadyMessage(
  yourMenu = "น้ำสุ่มประจำวัน",
  customerName = "ลูกค้า"
) {
  const result = `${yourMenu} เครื่องดื่มของคุณ ${customerName} ได้แล้วค่ะ`;
  console.log(result);
  return result;
}
orderReadyMessage("ชาไทย", "ฝนฝน");
orderReadyMessage();

module.exports = { greetingCustomer, orderReadyMessage };
