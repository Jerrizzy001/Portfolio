import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createEnquiryDraft, validateEnquiry, contactEmail } from '../lib/contact.mjs';
const sample={name:'Ari Example',email:'ari@example.com',company:'Example Workshop',tools:'Excel',message:'We need a clearer way to review incoming requests.'};
test('invalid fields do not produce an email draft',()=>{
 const result=createEnquiryDraft({name:'',email:'bad',message:'short'});
 assert.equal(result.valid,false);assert.equal(result.draft,null);
 assert.deepEqual(Object.keys(result.errors),['name','email','message']);
});
test('draft is addressed to owner and preserves text',()=>{
 const {valid,draft}=createEnquiryDraft({...sample,message:'Dimensions: 24 × 36 in\nKeep A&B + C intact.'},'estimator');
 assert.equal(valid,true);
 const url=new URL(draft.gmailUrl);
 assert.equal(url.searchParams.get('to'),contactEmail);
 assert.equal(url.searchParams.get('body'),draft.body);
 assert.match(draft.body,/A&B \+ C/);
 assert.match(draft.body,/Related work: Internal estimating tool/);
 assert.equal(new URL(draft.mailtoUrl).searchParams.get('body'),draft.body);
});
test('header line breaks and oversized fields are rejected',()=>{
 assert.equal(validateEnquiry({...sample,name:'Person\r\nBcc: attacker@example.com'}).valid,false);
 assert.equal(validateEnquiry({...sample,message:'a'.repeat(2001)}).valid,false);
});
test('unknown project parameters never enter the draft',()=>{
 assert.doesNotMatch(createEnquiryDraft(sample,'untrusted\nSubject: changed').draft.body,/untrusted|changed/);
});
test('long unicode message remains intact with copy-first fallback',()=>{
 const message='界'.repeat(1500),{draft}=createEnquiryDraft({...sample,message});
 assert.equal(draft.copyFirst,true);assert.ok(draft.body.includes(message));
 assert.equal(new URL(draft.gmailUrl).searchParams.has('body'),false);
 assert.ok(draft.mailtoUrl.length<7000);
});

test('inherited object keys cannot become project labels',()=>{ for (const key of ['constructor','__proto__','toString']) { assert.doesNotMatch(createEnquiryDraft(sample,key).draft.body,/Related work:/); } });
