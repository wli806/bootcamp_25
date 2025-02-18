/**
 * 在没有 Promise 之前，我们通常使用 回调函数 处理异步操作。
 * 但当多个异步操作嵌套时，代码会变得 层层回调，非常难以维护。
 * 这就是 回调地狱（Callback Hell）。
 */
// 模拟获取用户数据、订单数据、支付数据
function getUser(callback) {
    setTimeout(() => {
      console.log("获取用户信息...");
      callback({ userId: 1, name: "Alice" });
    }, 1000);
}
  
function getOrders(userId, callback) {
    setTimeout(() => {
        console.log(`获取用户 ${userId} 的订单...`);
        callback([{ orderId: 101 }, { orderId: 102 }]);
    }, 1000);
}
  
function getPayment(orderId, callback) {
    setTimeout(() => {
        console.log(`获取订单 ${orderId} 的支付信息...`);
        callback({ orderId, status: "Paid" });
    }, 1000);
}
  
// **嵌套回调（回调地狱）**
getUser((user) => {
    getOrders(user.userId, (orders) => {
        getPayment(orders[0].orderId, (payment) => {
            console.log("支付信息:", payment);
        });
    });
});

// 运行结果：
/**
 * 获取用户信息...
 * 获取用户 1 的订单...
 * 获取订单 101 的支付信息...
 * 支付信息: { orderId: 101, status: "Paid" }
 */

/**
 * 缺点：
 * 代码 层层嵌套，不易阅读 维护困难
 */


// async / await
/**
 * then只是将callback拆分了
 * async/await是最直接的同步写法
 * 以同步的代码方式，来解决异步的问题
 */




