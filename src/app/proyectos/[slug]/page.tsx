import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Gallery } from '@/components/gallery';
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  return p ? { title: p.name, description: p.description } : { title: 'Proyecto no encontrado' };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; const index = projects.findIndex(p => p.slug === slug); if (index < 0) notFound();
  const p = projects[index]; const previous = projects[(index - 1 + projects.length) % projects.length]; const next = projects[(index + 1) % projects.length];
  return <>
    <div className="shell project-heading"><Link className="text-link" href="/proyectos">Todos los proyectos</Link><div><p className="eyebrow">PROYECTO {p.number} / {p.studio}</p><h1>{p.name}</h1><p className="project-subtitle">{p.subtitle}</p></div></div>
    <div className={`project-cover ${p.featured ? 'thesis-cover' : ''}`}><Gallery sections={[{ title: 'Vista principal', images: [p.cover] }]} variant={p.slug} number={p.number} coverOnly /></div>
    <div className="shell"><section className="project-overview"><dl><div><dt>Año</dt><dd>{p.year || 'Pendiente de confirmar'}</dd></div><div><dt>Tipología</dt><dd>{p.type}</dd></div><div><dt>Desarrollo</dt><dd>{p.studio}</dd></div>{p.location && <div><dt>Ubicación</dt><dd>{p.location}</dd></div>}</dl><div><p className="eyebrow">EL PROYECTO</p><h2>{p.subtitle}</h2><p>{p.description}</p>{p.concept && <p>{p.concept}</p>}</div></section>
    {p.featured ? <><section className="thesis-introduction"><p className="eyebrow">TESIS DE GRADO · UNIVALLE · 2026</p><h2>{p.editorialTitle}</h2><p>Propuesta académica de arquitectura. Las imágenes representan el proyecto mediante visualizaciones; los planos y diagramas pertenecen a la documentación de la tesis.</p></section><nav className="project-index" aria-label="Secciones de CREFET">{p.sections.map((s,i) => <a key={s.title} href={`#archivo-${i+1}`}>{s.title}</a>)}</nav></> : <p className="material-notice">Archivo en preparación. Los espacios señalados se reemplazarán con planos, diagramas y renders originales de este proyecto.</p>}
    <Gallery sections={p.sections} variant={p.slug} number={p.number} />
    {p.virtualTour && <a className="button" href={p.virtualTour} target="_blank" rel="noopener noreferrer">Abrir recorrido virtual</a>}
    <nav className="project-navigation" aria-label="Entre proyectos"><Link href={`/proyectos/${previous.slug}`}><span>PROYECTO ANTERIOR</span><strong>{previous.name}</strong></Link><Link href={`/proyectos/${next.slug}`}><span>SIGUIENTE PROYECTO</span><strong>{next.name}</strong></Link></nav></div>
  </>;
}
