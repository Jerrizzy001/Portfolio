import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectEmail, previewRecord } from '../../lib/demos/email-to-erp.mjs';

test('normal request produces a fictional preview after customer review', () => {
  assert.equal(inspectEmail('normal').state, 'ready');
  const result = previewRecord('normal', 'DEMO-C01');
  assert.equal(result.ok, true);
  assert.equal(result.record.status, 'Preview only — not submitted');
  assert.equal(result.record.item.quantity, 12);
});
test('duplicate cannot create a record even if a valid customer is supplied', () => {
  assert.equal(inspectEmail('duplicate').state, 'duplicate');
  const result = previewRecord('duplicate', 'DEMO-C01');
  assert.equal(result.ok, false);
  assert.equal(result.record, undefined);
});
test('unknown customer requires an explicit valid selection', () => {
  assert.equal(inspectEmail('unmatched').state, 'needs-review');
  assert.equal(previewRecord('unmatched', '').ok, false);
  assert.equal(previewRecord('unmatched', 'invented').ok, false);
  const result = previewRecord('unmatched', 'DEMO-C02');
  assert.equal(result.ok, true);
  assert.equal(result.record.customerId, 'DEMO-C02');
});
test('unknown sample fails without returning partial data', () => {
  assert.equal(inspectEmail('unknown').ok, false);
  assert.equal(previewRecord('unknown', 'DEMO-C01').record, undefined);
});
