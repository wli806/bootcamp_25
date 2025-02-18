// 使用 Promise 解决回调地狱
// Promise 允许我们以 链式调用（chaining） 方式执行异步任务，让代码更清晰。

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("获取用户信息...");
            resolve({ userId: 1, name: "Alice" });
        }, 1000);
    });
}
  
function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`获取用户 ${userId} 的订单...`);
            resolve([{ orderId: 101 }, { orderId: 102 }]);
        }, 1000);
    });
}
  
function getPayment(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`获取订单 ${orderId} 的支付信息...`);
            resolve({ orderId, status: "Paid" });
        }, 1000);
    });
}
  
// **使用 Promise 链式调用**
getUser().then((user) => getOrders(user.userId))
         .then((orders) => getPayment(orders[0].orderId))
         .then((payment) => console.log("支付信息:", payment))
         .catch((error) => console.error("错误:", error));
  
/**
 * 避免嵌套，更清晰易读 错误集中处理（用 .catch() ）可以灵活扩展（每个 .then() 处理一个步骤）
 */

