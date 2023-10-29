export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  const divition = numerator / denominator; // we make the division
  return divition;
}
