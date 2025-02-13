window.addEventListener("load", function () {
    var dataLength = rawdata.length;
    console.log(dataLength);
    var productList = [];
    var targetObject = document.getElementById("target");
    var str = "";

    for (var i = 0; i <= dataLength - 1; i++) {
        // !!rawdata[i].productMedia[0] 也可以检测是否为空
        if (rawdata[i].productMedia.length > 0) {
            productList.push(rawdata[i]);
        }
    }
    console.log(productList.length);

    for (var j = 0; j <= productList.length - 1; j++) {
        str += `
        <div class = 'col-lg-3 col-md-6 col-sm-12 mt-3'>
        
            <div class = 'card'>
                <a href = './detail.html?prodId=${productList[j].prodId}'>
                    <div class = 'card-header'>
                        <img src = "https://storage.googleapis.com/luxe_media/wwwroot/${productList[j].productMedia[0].url}">
                    </div>
                    <div class = 'card-body'>
                        <h4 class = 'card-title'>${productList[j].title}</h4>
                    </div>
                    <div class = 'card-footer bg-transparent border-top-0'>
                        <p class = "card-text">$ ${productList[j].price}</p>
                    </div>
                </a>
            </div >
        </div >`;
    }
    targetObject.innerHTML += str;

});
