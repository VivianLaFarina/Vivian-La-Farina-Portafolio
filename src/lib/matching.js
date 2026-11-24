/** Public demonstration only. These deterministic rules do not replace approved MDM governance. */
export function normalizeTaxId(value) {
  return typeof value === 'string' ? value.normalize('NFKC').toUpperCase().replace(/[^A-Z0-9]/g, '') : '';
}

export function decideSupplierMatch(a, b) {
  const sourceIds = [
    { system: a.system, id: a.id },
    { system: b.system, id: b.id },
  ];
  const taxA = normalizeTaxId(a.taxId);
  const taxB = normalizeTaxId(b.taxId);
  if (!taxA || !taxB) return { decision: 'review', reason: 'missing_tax_id', sourceIds };
  if (a.country.trim().toUpperCase() !== b.country.trim().toUpperCase()) {
    return { decision: 'no-merge', reason: 'different_countries', sourceIds };
  }
  if (taxA === taxB) {
    return { decision: 'match', reason: 'same_country_and_tax_id', sourceIds, country: a.country.toUpperCase(), normalizedTaxId: taxA };
  }
  return { decision: 'no-merge', reason: 'different_tax_ids', sourceIds };
}

export const supplierCases = [
  { key: 'match', a: { system: 'ERP A', id: 'V-102', country: 'CO', taxId: '900.123.456-7' }, b: { system: 'ERP B', id: 'S-778', country: 'CO', taxId: '9001234567' } },
  { key: 'review', a: { system: 'ERP A', id: 'V-103', country: 'CO', taxId: '900.123.456-7' }, b: { system: 'ERP B', id: 'S-779', country: 'CO', taxId: '' } },
  { key: 'countries', a: { system: 'ERP A', id: 'V-104', country: 'CO', taxId: '900.123.456-7' }, b: { system: 'ERP B', id: 'S-780', country: 'MX', taxId: '9001234567' } },
];
