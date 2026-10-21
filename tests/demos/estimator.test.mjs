import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimate, SAMPLE_REQUESTS } from '../../lib/demos/estimator.mjs';

test('complete request gives a transparent illustrative total', () => {
  const result = calculateEstimate(SAMPLE_REQUESTS[0]);
  assert.deepEqual(result, { ok: true, area: 6, rate: 8, fabrication: 10, unitCents: 5800, quantity: 12, totalCents: 69600 });
});
test('missing material blocks calculation until explicitly resolved', () => {
  const missing = SAMPLE_REQUESTS[1];
  assert.equal(calculateEstimate(missing).ok, false);
  assert.ok(calculateEstimate(missing).errors.material);
  assert.equal(calculateEstimate({ ...missing, material: 'Steel' }).totalCents, 55200);
});
test('revised dimensions produce a different total and honour reviewed edits', () => {
  assert.equal(calculateEstimate(SAMPLE_REQUESTS[2]).totalCents, 108000);
  assert.equal(calculateEstimate({ ...SAMPLE_REQUESTS[2], width: '12', height: '12', quantity: '2', part: 'Folded panel' }).totalCents, 4600);
});
test('invalid and unbounded inputs never produce an estimate', () => {
  for (const [key, value] of [['width', ''], ['width', 'Infinity'], ['height', '-1'], ['height', '241'], ['quantity', '1.5'], ['quantity', '0'], ['quantity', '1001'], ['material', 'prototype'], ['part', 'Unknown']]) {
    const result = calculateEstimate({ ...SAMPLE_REQUESTS[0], [key]: value });
    assert.equal(result.ok, false, `${key}: ${value}`);
    assert.ok(result.errors[key]);
    assert.equal(result.totalCents, undefined);
  }
});
test('total multiplies the rounded unit price without floating point cents', () => {
  const result = calculateEstimate({ ...SAMPLE_REQUESTS[0], width: '13', height: '17', quantity: '7' });
  assert.equal(result.unitCents, 2228);
  assert.equal(result.totalCents, 15596);
});
