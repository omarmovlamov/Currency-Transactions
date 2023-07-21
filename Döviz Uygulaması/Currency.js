class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=oWuFytvYBTcqkbZpcssWdtx1iNmRf9VeiwboB2qJ&base_currency=";
  }

  async exchangecur(amount, firstOption, secondOption) {
    const response = await fetch(`${this.url}${firstOption}`);
    const result = await response.json();
    console.log(result);

    const inputresult = amount * result.data[secondOption];

    return inputresult;
  }
}
