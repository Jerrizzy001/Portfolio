export const CUSTOMERS = Object.freeze([
  { id: 'DEMO-C01', name: 'Maple Workshop (fictional)' },
  { id: 'DEMO-C02', name: 'Harbour Studio (fictional)' },
]);
export const EMAIL_SAMPLES = Object.freeze([
  { id: 'normal', title: 'Complete request', subject: 'Panel request · SAMPLE-104', sender: 'orders@maple.example', body: 'Please prepare a request for 12 aluminium flat panels, 24 × 36 inches. Our reference is SAMPLE-104.', reference: 'SAMPLE-104', customerId: 'DEMO-C01', duplicate: false },
  { id: 'duplicate', title: 'Duplicate request', subject: 'Re: Panel request · SAMPLE-103', sender: 'orders@maple.example', body: 'Sending our request again: 12 aluminium flat panels, 24 × 36 inches. Reference SAMPLE-103.', reference: 'SAMPLE-103', customerId: 'DEMO-C01', duplicate: true },
  { id: 'unmatched', title: 'Unknown customer', subject: 'Panel request · SAMPLE-105', sender: 'purchasing@new-workshop.example', body: 'Could you prepare a request for 12 aluminium flat panels, 24 × 36 inches? Our reference is SAMPLE-105.', reference: 'SAMPLE-105', customerId: '', duplicate: false },
]);

export function inspectEmail(sampleId) {
  const sample = EMAIL_SAMPLES.find((item) => item.id === sampleId);
  if (!sample) return { ok: false, error: 'Choose a sample request.' };
  return { ok: true, sample, state: sample.duplicate ? 'duplicate' : sample.customerId ? 'ready' : 'needs-review', item: { description: 'Aluminium flat panel', width: 24, height: 36, quantity: 12 } };
}

export function previewRecord(sampleId, customerId) {
  const inspected = inspectEmail(sampleId);
  if (!inspected.ok) return inspected;
  if (inspected.state === 'duplicate') return { ok: false, error: 'Duplicate detected. No new record is prepared.' };
  const customer = CUSTOMERS.find((item) => item.id === customerId);
  if (!customer) return { ok: false, error: 'Select a fictional customer before continuing.' };
  return { ok: true, record: { id: `PREVIEW-${inspected.sample.reference}`, status: 'Preview only — not submitted', customer: customer.name, customerId: customer.id, reference: inspected.sample.reference, item: inspected.item } };
}
