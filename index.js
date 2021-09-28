const currencyElement1 = document.getElementById("currency-one");
const amountElement1 = document.getElementById("amount-one");
const currencyElement2 = document.getElementById("currency-two");
const amountElement2 = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currency_one = currencyElement1.value;
  const currency_two = currencyElement2.value;
  `https://v6.exchangerate-api.com/v6/d8e4ab57af8b34e0c9251c73/latest/${currency_one}`
    .then((res) => res.json())
    .then((data) => {
      //  console.log(data);
      const rate =
        data.rates[currency_two] / data.conversion_rate[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountElement2.value = (amountElement1.value * rate).toFixed(3);
    });
}

// Event Listener
currencyElement1.addEventListener("change", calculate);
amountElement1.addEventListener("input", calculate);
currencyElement2.addEventListener("change", calculate);
amountElement2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyElement1.value;
  currencyElement1.value = currencyElement2.value;
  currencyElement2.value = temp;
  calculate();
});

calculate();
