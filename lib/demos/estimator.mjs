// These deliberately fictional rates demonstrate arithmetic, not commercial pricing.
export const MATERIAL_RATES = Object.freeze({ Aluminium: 8, Steel: 6 });
export const SAMPLE_REQUESTS = Object.freeze([
  { id: 'complete', title: 'Complete request', description: 'A panel request with everything ready to review.', part: 'Flat panel', width: '24', height: '36', quantity: '12', material: 'Aluminium' },
  { id: 'missing', title: 'Missing material', description: 'Choose a material before an estimate can be prepared.', part: 'Flat panel', width: '24', height: '36', quantity: '12', material: '' },
  { id: 'revised', title: 'Revised dimensions', description: 'A larger panel. Edit its dimensions to explore the result.', part: 'Flat panel', width: '30', height: '48', quantity: '12', material: 'Aluminium' },
]);

export function validateEstimate(input) {
  const errors = {};
  for (const key of ['width', 'height']) {
    const number = Number(input[key]);
    if (!Number.isFinite(number) || number <= 0 || number > 240) errors[key] = `Enter a ${key} greater than 0 and no more than 240 inches.`;
  }
  const quantity = Number(input.quantity);
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 1000) errors.quantity = 'Enter a whole quantity from 1 to 1,000.';
  if (!Object.hasOwn(MATERIAL_RATES, input.material)) errors.material = 'Choose a material to continue.';
  if (!['Flat panel', 'Folded panel'].includes(input.part)) errors.part = 'Choose one of the sample part types.';
  return errors;
}

export function calculateEstimate(input) {
  const errors = validateEstimate(input);
  if (Object.keys(errors).length) return { ok: false, errors };
  const area = Number(input.width) * Number(input.height) / 144;
  const rate = MATERIAL_RATES[input.material];
  const fabrication = input.part === 'Folded panel' ? 15 : 10;
  const unitCents = Math.round((area * rate + fabrication) * 100);
  return { ok: true, area, rate, fabrication, unitCents, quantity: Number(input.quantity), totalCents: unitCents * Number(input.quantity) };
}
