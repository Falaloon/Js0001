function callQueue(queues) {
  console.log("คิวที่ " + queues + " เชิญช่องบริการหมายเลข 3");
}
// callQueue(230);

function getTheQueue(number, queuesType) {
  console.log("ลูกค้า " + number + " ท่าน " + " รับคิว " + queuesType);
}
// getTheQueue(4, "A");
// getTheQueue(6, "B");

function getTheQueueLessThanFour(queuesType) {
  console.log("ลูกค้า 1-4 ท่าน " + " รับคิว " + queuesType);
}
function getTheQueueMoreThanFour(queuesType) {
  console.log("ลูกค้า 5 ท่านขึ้นไป " + " รับคิว " + queuesType);
}

getTheQueueLessThanFour("A");
getTheQueueMoreThanFour("B");
