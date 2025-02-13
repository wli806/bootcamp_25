window.addEventListener("load", function () {

    // TODO 1) 在这里声明变量。
    let timer = null;
    let elapsedTimeMillis = 0;
    let timerFace = document.getElementById("timer_face");


    // TODO 5) 为两个按钮添加事件监听器：
    // a. 当 #btnStartTimer 被点击时，调用 startTimer 函数。
    // b. 当 #btnStopTimer 被点击时，调用 stopTimer 函数。
    document.getElementById("btnStartTimer").addEventListener("click", startTimer);
    document.getElementById("btnStopTimer").addEventListener("click", stopTimer);

    // TODO 2) 完成此函数，使其：
    // a. 如果计时器尚未启动，执行以下操作：
    // - 将 elapsedTimeMillis 的值设置为 0
    // - 在 #timer_face <span> 中显示 "0.00"
    // - 启动计时器，每 100 毫秒调用一次 updateTimer 函数。
    // b. 如果计时器已经启动，调用此函数不执行任何操作。
    function startTimer() {
        if (timer === null) {
            elapsedTimeMillis = 0;
            timerFace.textContent = "0.00";
            // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。这里调用了UpdateTimer函数
            timer = setInterval(updateTimer, 100);
        }
    }

    // TODO 3) 完成此函数，使其：
    // a. 如果计时器已经启动，则停止计时器。
    // b. 如果计时器尚未启动，调用此函数不执行任何操作。
    function stopTimer() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    // TODO 4) 完成此函数，使其：
    // a. 适当更新 elapsedTimeMillis 的值。
    // b. 将 #timer_face <span> 的文本设置为当前经过的时间，单位为秒，四舍五入到两位小数。
    function updateTimer() {
        elapsedTimeMillis += 100;
        timerFace.textContent = (elapsedTimeMillis / 1000).toFixed(2);
    }

});
