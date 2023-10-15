export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('Code must be a string');
    if (typeof name !== 'string') throw TypeError('Name must be a string');

    this._code = code;
    this._name = name;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    if (typeof newCode !== 'string') throw TypeError('Name must be a string');
    this._code = newCode;
  }

  /* We add a new method that returns the
  attributes in the following way ( name (code) ) */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
