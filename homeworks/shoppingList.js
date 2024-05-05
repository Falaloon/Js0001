/*
• ของที่ต้องซื้อ และ จำนวนที่ต้องซื้อ (ข้าว 5 กิโลกรัม เนื้อ 2 กิโลกรัม, ไข่ 1 แผง, กระเทียม 1 ถุง)
• เมื่อซื้อแล้ว จะใส่ว่า สรุปซื้อมากี่ชิ้น (ต้องการซื้อเท่าไร)
• และไปเติม สต๊อก แล้วลบรายการออกจาก shopping list 
*/
//arr[ {obbj} ]
const stockMaster = [
  { itemName: "Rice", itemPrice: "43", qty: "100" },
  { itemName: "Chicken", itemPrice: "19", qty: "30" },
  { itemName: "Meat", itemPrice: "234", qty: "10" },
  { itemName: "Egg", itemPrice: "120", qty: "5" },
  { itemName: "Garlic", itemPrice: "258", qty: "3" },
];

const shoppingLists = [
  { itemName: "Rice", qty: "5" },
  { itemName: "Meat", qty: "2" },
  { itemName: "Egg", qty: "1" },
  { itemName: "Garlic", qty: "1" },
];

// 1. forEach item display qty x itemPrice
// 2. return totalPrice and display

let cart = [];
shoppingLists.forEach((item) => {
  // Find the corresponding item in stockMaster
  const stockItem = stockMaster.find(
    (stock) => stock.itemName === item.itemName
  );

  if (stockItem) {
    // Calculate the total price
    const totalPrice = parseInt(item.qty) * parseInt(stockItem.itemPrice);
    cart.push({ itemName: item.itemName, totalPrice: totalPrice });

    const totalStock = parseInt(stockItem.qty) - parseInt(item.qty);
    //wait for improve
    //stockMaster.push({ itemName: item.itemName, qty: totalStock });
  } else {
    console.error(`Item ${item.itemName} not found in stockMaster.`);
  }
});
console.log("Cart with total prices:", cart);
console.log("new stock master ", stockMaster);
const purchase = cart.reduce((acc, cv) => {
  return acc + cv.totalPrice;
}, 0);

console.log("ยอดชำระ: " + purchase + " บาท");
