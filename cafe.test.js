const { greetingCustomer, orderReadyMessage } = require("./cafe");

test("greetingCustomer with customerName", () => {
  const greetingCustomerMsg = greetingCustomer("พินพิน");
  expect(greetingCustomerMsg).toBe(
    "Welcome to Pik-ka Cafe คุณ พินพิน รับอะไรดีคะ?"
  );
});

test("greetingCustomer without customerName", () => {
  const greetingCustomerMsg = greetingCustomer();
  expect(greetingCustomerMsg).toBe(
    "Welcome to Pik-ka Cafe คุณ ลูกค้า รับอะไรดีคะ?"
  );
});

test("orderReadyMessage with menu and customerName", () => {
  const orderReadyMessageMsg = orderReadyMessage("ชาไทย", "ฝนฝน");
  expect(orderReadyMessageMsg).toBe("ชาไทย เครื่องดื่มของคุณ ฝนฝน ได้แล้วค่ะ");
});

test("orderReadyMessage without menu and customerName", () => {
  const orderReadyMessageMsg = orderReadyMessage();
  expect(orderReadyMessageMsg).toBe(
    "น้ำสุ่มประจำวัน เครื่องดื่มของคุณ ลูกค้า ได้แล้วค่ะ"
  );
});
