import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors
  set floors(newFloors) {
    this._floors = newFloors;
  }

  // return the following string Evacuate slowly the NUMBER_OF_FLOORS floors
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
