function sayHello(customerName) {
  console.log("Welcome ka K'" + customerName);
}
sayHello("few");
sayHello("Ink");
sayHello("May");

function orderReadyMessage(menu, customerName) {
  console.log(
    menu + " " + "เครื่องดื่มของคุณ" + " " + customerName + " " + "ได้แล้วค่ะ"
  );
}
orderReadyMessage("กาแฟ", "few");
orderReadyMessage("ชาเขียว", "Ink");
orderReadyMessage("ชาไทย", "May");

function sayHelloAndOrderReadyMessage(customerName) {
  console.log("Welcome ka K'" + customerName);
  document.getElementById("display").innerHTML = ("เครื่องดื่มของ คุณ" + " " + customerName + " " + "ได้แล้วค่ะ");
}

sayHelloAndOrderReadyMessage("Fon");
