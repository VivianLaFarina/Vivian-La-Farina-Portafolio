import { useLayoutEffect, useRef, useState } from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { usePageTitle } from '../lib/seo';
import { PageHeading } from '../components/PageHeading';

export default function Gallery() {
  const { t } = usePreferences();
  const dialog = useRef(null);
  const [selected, setSelected] = useState(null);
  usePageTitle(t.galleryTitle, t.galleryLead);
  useLayoutEffect(() => {
    if (selected !== null && !dialog.current.open) dialog.current.showModal();
  }, [selected]);
  const openImage = index => setSelected(index);
  const closeImage = () => { dialog.current?.close(); setSelected(null); };
  return <>
    <PageHeading eyebrow={t.galleryEyebrow} title={t.galleryTitle} lead={t.galleryLead}/>
    <section className="section-block section-block--first"><div className="gallery-grid">
      {t.cards.map((name, i) => <button className="gallery-tile" type="button" key={name} onClick={() => openImage(i)} aria-label={`${t.viewImage}: ${name}`}>
        <img src={`/gallery/study-${i+1}.svg`} alt="" loading="lazy"/>
        <span className="gallery-tile-label"><strong>{name}</strong><small>{t.captions[i]}</small></span>
      </button>)}
    </div><p className="muted-note">{t.galleryNote}</p></section>
    <dialog className="gallery-dialog" aria-label={selected === null ? t.galleryTitle : t.cards[selected]} ref={dialog} onClose={() => setSelected(null)} onClick={e => { if (e.target === dialog.current) closeImage(); }}>
      {selected !== null && <><button type="button" className="dialog-close" onClick={closeImage} aria-label={t.close}>✕</button><img src={`/gallery/study-${selected+1}.svg`} alt={t.cards[selected]}/><p>{t.cards[selected]} — {t.captions[selected]}</p></>}
    </dialog>
  </>;
}
