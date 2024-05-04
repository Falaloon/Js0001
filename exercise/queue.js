function callQueue(queues) {
  const result = "คิวที่ " + queues + " เชิญช่องบริการหมายเลข 3";
  console.log(result);
  return result;
}

callQueue(230);

function getTheQueue(people) {
  if (people <= 4) {
    return "ลูกค้า 1-4 ท่าน " + " รับคิว " + "A";
  } else {
    return "ลูกค้า 5 ท่านขึ้นไป " + " รับคิว " + "B";
  }
}

getTheQueue(4);
getTheQueue(8);

let getQueueA = getTheQueue(4);
console.log(getQueueA);

let getQueueB = getTheQueue(8);
console.log(getQueueB);

module.exports = { callQueue, getTheQueue };
