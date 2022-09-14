
var submit_btn = document.querySelector('.sumbit-btn');
var result = document.querySelector('.result');

function btc_calc () {
    var btc_price = document.querySelector('#btc-price').value;
    var usd_value = document.querySelector('#usd-value').value;
    var btc_value = usd_value / btc_price;
    result.innerHTML=btc_value + "BTC";
}

submit_btn.addEventListener("click", btc_calc);
