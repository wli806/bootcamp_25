/**
 * 使用 async/await 进一步优化
 * async/await 让异步代码更像同步代码，使可读性更强，
 * 且可以使用 try/catch 统一管理错误。
 */

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

async function fetchData() {
    try {
        const user = await getUser();
        console.log('user=======', user);
        const orders = await getOrders(user.userId);
        console.log("orders========", orders);
        const payment = await getPayment(orders[0].orderId);
        console.log("支付信息:", payment);
    } catch (error) {
        console.error("错误:", error);
    }
}
  
// 调用异步函数
fetchData();

/**
 * 代码更直观，像写同步代码一样；更易理解，不需要 .then() 链式调用；错误处理更简单，可以用 try/catch
 */

