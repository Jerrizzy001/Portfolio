export const contactEmail = 'jerrynwachi37@gmail.com';
const limits = { name: 80, email: 254, company: 100, tools: 160, message: 2000 };
export function validateEnquiry(input = {}) {
  const values = {}, errors = {};
  for (const [key, max] of Object.entries(limits)) {
    const raw = typeof input[key] === 'string' ? input[key] : '';
    values[key] = raw.trim();
    if (raw.length > max) errors[key] = `Please use ${max} characters or fewer.`;
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(raw)) errors[key] = 'Please remove unsupported characters.';
    if (key !== 'message' && /[\r\n]/.test(raw)) errors[key] = 'Please use a single line.';
  }
  if (!values.name) errors.name = 'Please add your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid reply email.';
  if (values.message.length < 15) errors.message = 'Tell me a little more—at least 15 characters.';
  return { valid: Object.keys(errors).length === 0, errors, values };
}
export function createEnquiryDraft(input, project = '') {
  const result = validateEnquiry(input);
  if (!result.valid) return { ...result, draft: null };
  const { name, email, company, tools, message } = result.values;
  const projectNames = { estimator: 'Internal estimating tool', 'email-to-erp': 'Email-to-ERP workflow', 'sop-converter': 'SOP document converter' };
  const projectName = Object.hasOwn(projectNames, project) ? projectNames[project] : '';
  const subject = `Project enquiry from ${name}`;
  const body = ['Hi Jerry,', '', message, '', ...(projectName ? [`Related work: ${projectName}`] : []), ...(company ? [`Company: ${company}`] : []), ...(tools ? [`Current tools: ${tools}`] : []), `Reply email: ${email}`, '', 'Thanks,', name].join('\n');
  const gmail = `https://mail.google.com/mail/?${new URLSearchParams({ view:'cm', fs:'1', to:contactEmail, su:subject, body })}`;
  const mailto = `mailto:${contactEmail}?${new URLSearchParams({ subject, body }).toString().replace(/\+/g, '%20')}`;
  const copyFirst = Math.max(gmail.length, mailto.length) > 7000;
  return { ...result, draft: { subject, body, copyFirst,
    gmailUrl: copyFirst ? `https://mail.google.com/mail/?${new URLSearchParams({ view:'cm', fs:'1', to:contactEmail, su:subject })}` : gmail,
    mailtoUrl: copyFirst ? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}` : mailto,
  }};
}
