function sayHello(custumerName) {
  if (custumerName == " ") {
    return "Hi Yo! คุณลูกค้าครับ";
  } else if (custumerName) {
    return "Hi Yo! " + custumerName;
  } else {
    return "Hi Yo! คุณลูกค้า";
  }
}

let greeting = sayHello("fon");
console.log(greeting);
let greeting2 = sayHello(" ");
console.log(greeting2);

module.exports = sayHello;

// function sayHello2(custumerName) {
//   if ("" || " ") {
//     return "Hi Yo! คุณลูกค้า";
//   } else {
//     return "Hi Yo! คุณ" +custumerName;
//   }
// }

// let greeting2 = sayHello2(" ");
// console.log(greeting2);
