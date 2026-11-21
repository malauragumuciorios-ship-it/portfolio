'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ProjectImage, ProjectSection } from '@/data/projects';
import { Placeholder } from './placeholder';
export function Gallery({ sections, variant, number, coverOnly = false }: { sections: ProjectSection[]; variant: string; number: string; coverOnly?: boolean }) {
  const available = sections.flatMap(s => s.images).filter(i => i.src);
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const current: ProjectImage | undefined = active === null ? undefined : available[active];
  useEffect(() => {
    if (active === null) return;
    const modal = dialog.current;
    if (!modal?.open) modal?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [active]);
  function close() { dialog.current?.close(); setActive(null); setZoom(false); trigger.current?.focus(); }
  function step(delta: number) { setZoom(false); setActive(a => a === null ? a : (a + delta + available.length) % available.length); }
  return <>
    {sections.map((section, sectionIndex) => <section id={coverOnly ? undefined : `archivo-${sectionIndex + 1}`} className={coverOnly ? 'cover-gallery' : `project-section section-${section.kind || 'default'}`} key={section.title}>{!coverOnly && <div className="section-heading"><h2>{section.title}</h2>{section.text && <p>{section.text}</p>}</div>}<div className={coverOnly ? 'cover-gallery-inner' : `gallery-grid ${section.kind === 'photography' && section.images.length % 2 ? 'gallery-lead' : ''}`}>{section.images.map((img, index) => <figure key={`${img.src || img.caption}-${index}`}>
      {img.src ? <button className="image-button" aria-label={`Ampliar ${img.caption}`} onClick={e => { trigger.current = e.currentTarget; setActive(available.indexOf(img)); }}><Image src={img.src} alt={img.alt} width={img.width} height={img.height} priority={coverOnly} sizes={coverOnly || (section.kind === 'photography' && index === 0 && section.images.length % 2) ? '100vw' : '(max-width: 760px) 100vw, 50vw'} style={{ width: '100%', height: coverOnly ? '100%' : 'auto', objectFit: img.fit || 'contain' }} /><span className="enlarge-label">Ampliar imagen</span></button> : <div className="gallery-pending" style={{ aspectRatio: `${img.width}/${img.height}` }}><Placeholder label={img.caption} number={number} variant={variant} /></div>}
      {!coverOnly && <figcaption>{img.caption}{!img.src && <span>Material pendiente</span>}</figcaption>}
    </figure>)}</div></section>)}
    <dialog ref={dialog} className="lightbox" aria-label="Visor de imágenes del proyecto" onCancel={e => { e.preventDefault(); close(); }} onClose={() => { setActive(null); trigger.current?.focus(); }} onKeyDown={e => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); }} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <div className="lightbox-bar"><span>{current?.caption} · {active === null ? '' : active + 1}/{available.length}</span><div className="lightbox-actions"><button aria-pressed={zoom} onClick={() => setZoom(z => !z)}>{zoom ? 'Ajustar' : 'Zoom 2×'}</button><button ref={closeButton} onClick={close}>Cerrar ×</button></div></div>
      {current?.src && <div className={`lightbox-image ${zoom ? 'is-zoomed' : ''}`} tabIndex={zoom ? 0 : undefined} role={zoom ? 'region' : undefined} aria-label={zoom ? 'Imagen ampliada. Desplázate para explorar los detalles.' : undefined}><div className="lightbox-image-inner" style={zoom ? { aspectRatio: `${current.width}/${current.height}` } : undefined}><Image src={current.src} alt={current.alt} fill sizes={zoom ? '190vw' : '95vw'} style={{ objectFit: 'contain' }} /></div></div>}
      <div className="lightbox-controls"><button onClick={() => step(-1)}>Anterior</button><span>Teclas ← → · Esc para cerrar</span><button onClick={() => step(1)}>Siguiente</button></div>
    </dialog>
  </>;
}
