import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency){
    this._amount = amount;
    this._currency = currency;
  }

  // Guetter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Settter for currency
  set currency(newCurrency) {
    this._currency = newCurrency
  }

  // The function should return the amount multiplied by the conversion rate
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
