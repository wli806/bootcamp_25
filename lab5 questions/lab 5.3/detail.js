var prodId = getProductParam();
var currentProduct = getProduct(prodId);
var title = currentProduct.title;
var price = currentProduct.price;
var description = currentProduct.description;
var img = currentProduct.productMedia[0].url;
var str = "";

function getProduct(ID) {
    var item;
    for (item of rawdata) {
        if (item.prodId == ID) {
            return item;
        }
    }
}

function getProductParam() {
    // ? 后第一个参数开始写到 URL 中
    const url = window.location.search.substring(1);
    return url.split("=")[1];
}


window.addEventListener("load", function () {
    str = `
    <h5>${title}</h5>
    <hr>
    <div class = 'col-lg-3 col-md-6 col-sm-12 mt-3'>
        <img src="https://storage.googleapis.com/luxe_media/wwwroot/${img}" class="img-fluid">
    </div>
    <div class = 'col-lg-3 col-md-6 col-sm-12 mt-3'>
        <p>${description}</p>
        <p>Price: $${price}</p>
    </div>`;
    document.getElementById("target").innerHTML = str;

});