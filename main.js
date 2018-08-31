const price_block = document.getElementsByClassName('price_block');
const data_prices = [];
const prices = document.getElementsByClassName('price');
const img = '<img src="img/dram_white.png">';
const discounts_arr = ['6%', '11%', '15%'];


for(let i = 0; i < price_block.length; i++) {
   data_prices.push(price_block[i].childNodes[1].getAttribute('data-price'));
}

for(let i = 0; i < prices.length; i++){
 prices[i].innerHTML =  data_prices[i] + img;
 console.log(prices[i])
}

console.log(data_prices);

