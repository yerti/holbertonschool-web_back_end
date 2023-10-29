export default function guardrail(mathFunction) {
  // function return an array
  const queue = [];
  let result;

  try {
    result = mathFunction();
  } catch (e) {
    result = e.toString();
  }

  queue.push(result);
  queue.push('Guardrail was processed');

  return queue;
}
