// Seçiciler
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const result = document.querySelector("#resoult");

const currency = new Currency();
runEvents();

function runEvents() {
  amountInput.addEventListener("input", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchangecur(amount, firstOptionValue, secondOptionValue)
    .then((res) => {
      result.value = res;
    });
}
