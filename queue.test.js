const { callQueue, getTheQueue } = require("./queue");

test("Call queue with queue number", () => {
  const callQueueMsg = callQueue(230);
  expect(callQueueMsg).toBe("คิวที่ 230 เชิญช่องบริการหมายเลข 3");
});

test("Get the queue less than five people", () => {
  const getQueueMsg = getTheQueue(3);
  expect(getQueueMsg).toBe("ลูกค้า 1-4 ท่าน  รับคิว A");
});

test("Get the queue more than four people", () => {
  const getQueueMsg = getTheQueue(7);
  expect(getQueueMsg).toBe("ลูกค้า 5 ท่านขึ้นไป  รับคิว B");
});
