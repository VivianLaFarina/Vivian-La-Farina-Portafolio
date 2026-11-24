import { useState } from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { decideSupplierMatch, supplierCases } from '../lib/matching';

const explain = {
  en: {
    match: 'MATCH — Country CO and normalized tax ID 9001234567 agree. The records are linked; both ERP IDs remain traceable.',
    review: 'MANUAL REVIEW — An ERP record has no tax ID. Automatic merging is blocked until the record is validated.',
    'no-merge': 'NO MERGE — Different countries or identifiers cannot be treated as the same supplier by this rule.',
    label: ['Matching records', 'Missing tax ID', 'Different countries'],
  },
  es: {
    match: 'COINCIDENCIA — Coinciden el país CO y el ID fiscal normalizado 9001234567. Se relacionan los registros conservando ambos IDs.',
    review: 'REVISIÓN MANUAL — Falta el ID fiscal de un registro ERP. No se permite fusionarlo automáticamente.',
    'no-merge': 'NO FUSIONAR — No se deben unificar registros de países o identificadores diferentes con esta regla.',
    label: ['Registros coincidentes', 'Falta ID tributario', 'Países diferentes'],
  },
  pt: {
    match: 'CORRESPONDÊNCIA — O país CO e o ID fiscal normalizado 9001234567 coincidem. Os registros são vinculados, preservando ambos os IDs.',
    review: 'REVISÃO MANUAL — Falta o ID fiscal em um registro ERP. A mesclagem automática é bloqueada.',
    'no-merge': 'NÃO MESCLAR — Registros de países ou identificadores diferentes não devem ser unificados por esta regra.',
    label: ['Registros correspondentes', 'ID fiscal ausente', 'Países diferentes'],
  },
};

export function SupplierLab() {
  const { language, t } = usePreferences();
  const [selected, setSelected] = useState(0);
  const example = supplierCases[selected];
  const result = decideSupplierMatch(example.a, example.b);
  const [decisionLabel, explanation] = explain[language][result.decision].split(' — ');
  return <section className="lab-card" aria-labelledby="lab-title">
    <div className="lab-header"><span className="eyebrow">{t.prototype}</span><h3 id="lab-title">{t.labTitle}</h3><p>{t.labDesc}</p></div>
    <div role="group" className="case-tabs" aria-label={t.matchingScenarios}>
      {supplierCases.map((item, index) => <button key={item.key} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{explain[language].label[index]}</button>)}
    </div>
    <div className="case-view">
      <div className="record-row">
        {[example.a, example.b].map(record => <div className="record" key={record.system}>
          <span className="record-label">{record.system} · {record.id}</span>
          <span>{t.labCountry}: {record.country}</span>
          <span>{t.labTaxId}: {record.taxId || '—'}</span>
        </div>)}
      </div>
      <div className={`decision decision--${result.decision}`} role="status" aria-live="polite">
        <strong>{decisionLabel}</strong>
        <p>{explanation}</p>
        <small>{t.labSources}: {result.sourceIds.map(({ system, id }) => `${system} ${id}`).join(' · ')}</small>
      </div>
    </div>
  </section>;
}
