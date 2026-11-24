import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';

export default function Contact() {
  const { t } = usePreferences();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  usePageTitle(t.contactTitle, t.contactLead);
  async function submit(e) {
    e.preventDefault();
    if (!import.meta.env.PROD || import.meta.env.VITE_NETLIFY_FORMS !== 'true') { setStatus('local'); return; }
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));
    try {
      const result = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      if (!result.ok) throw new Error(`Submission failed (${result.status})`);
      navigate('/thanks');
    } catch { setStatus('error'); }
  }
  return <>
    <PageHeading eyebrow={t.contactEyebrow} title={t.contactTitle} lead={t.contactLead} />
    <section className="section-block section-block--first"><div className="contact-layout">
      <form name="contact" method="POST" action="/__forms.html" className="contact-form" onSubmit={submit}>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden><label>Leave this blank: <input name="bot-field" autoComplete="off" /></label></p>
        <label>{t.name}<input name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" /></label>
        <label>{t.email}<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
        <label>{t.message}<textarea name="message" required minLength={10} maxLength={5000} rows={6} /></label>
        <button type="submit" className="button button--primary" disabled={status === 'sending'}>{status === 'sending' ? t.contactSending : t.send} <span aria-hidden="true">↗</span></button>
        {status === 'error' && <p role="alert" className="status-message status-message--error">{t.contactError}</p>}
        {status === 'local' && <p role="status" className="status-message">{t.contactDev}</p>}
        <p className="muted-note">{t.contactNote} {t.privacy}</p>
      </form>
      <aside className="contact-sidebar"><span className="eyebrow">{t.connectEyebrow}</span><h2>{t.contactAsideTitle}</h2><p>{t.contactAsideLead}</p><div className="contact-links"><a href="https://github.com/VivianLaFarina" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/vivianlafarina/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></aside>
    </div></section>
  </>;
}
