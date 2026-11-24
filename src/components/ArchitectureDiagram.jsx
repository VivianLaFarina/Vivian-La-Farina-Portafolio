import { usePreferences } from '../context/PreferencesContext';

export function ArchitectureDiagram() {
  const { t } = usePreferences();
  return <div className="architecture-diagram">
    <div className="diagram-box">{t.diagramSources}<span>{t.diagramSourceDetail}</span></div>
    <span className="diagram-arrow" aria-hidden="true">→</span>
    <div className="diagram-box diagram-box--accent">{t.diagramRules}<span>{t.diagramRulesDetail}</span></div>
    <span className="diagram-arrow" aria-hidden="true">→</span>
    <div className="diagram-box">{t.diagramDecision}<span>{t.diagramDecisionDetail}</span></div>
  </div>;
}
