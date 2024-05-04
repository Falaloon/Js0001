// const sayHello2 = require("./return.js");
const sayHello = require("./return.js");

test("Say greeting with customer name", () => {
  const greetingMsg = sayHello("Fon");
  expect(greetingMsg).toBe("Hi Yo! Fon");
});

test("Say greeting without  customer name", () => {
  const greetingMsg = sayHello("");
  expect(greetingMsg).toBe("Hi Yo! คุณลูกค้า");
});

test("Say greeting with customer name is spacebar", () => {
  const greetingMsg = sayHello(" ");
  expect(greetingMsg).toBe("Hi Yo! คุณลูกค้าครับ");
});
