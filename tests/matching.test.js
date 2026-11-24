import test from 'node:test';
import assert from 'node:assert/strict';
import { decideSupplierMatch, normalizeTaxId, supplierCases } from '../src/lib/matching.js';

test('normalizes punctuation and spacing in a fiscal ID', () => {
  assert.equal(normalizeTaxId('900.123.456-7'), '9001234567');
  assert.equal(normalizeTaxId(' 900 123 456 7 '), '9001234567');
});
test('same country and normalized fiscal ID: match with source IDs retained', () => {
  const decision = decideSupplierMatch(supplierCases[0].a, supplierCases[0].b);
  assert.equal(decision.decision, 'match');
  assert.equal(decision.normalizedTaxId, '9001234567');
  assert.deepEqual(decision.sourceIds, [{ system: 'ERP A', id: 'V-102' }, { system: 'ERP B', id: 'S-778' }]);
});
test('missing fiscal ID: manual review, never auto merge', () => {
  assert.equal(decideSupplierMatch(supplierCases[1].a, supplierCases[1].b).decision, 'review');
});
test('different countries: do not merge despite same fiscal ID', () => {
  assert.equal(decideSupplierMatch(supplierCases[2].a, supplierCases[2].b).decision, 'no-merge');
});
test('different fiscal IDs: do not merge', () => {
  assert.equal(decideSupplierMatch({ ...supplierCases[0].a, taxId: '111' }, supplierCases[0].b).decision, 'no-merge');
});
