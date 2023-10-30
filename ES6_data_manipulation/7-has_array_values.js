export default function hasValuesFromArray(set, array) {
  // returns a boolean if all the elements in the array exist within the set
  for (const i of array) {
    if (!set.has(i)) {
      return false;
    }
  }

  return true;
}
