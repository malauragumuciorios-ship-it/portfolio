import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Placeholder } from './placeholder';
export function ProjectGrid({ featured = false }: { featured?: boolean }) {
  return <div className={`project-grid ${featured ? 'featured-grid' : ''}`}>{projects.map((p, i) => <article className={`project-card project-card-${i}`} key={p.slug}>
    <Link href={`/proyectos/${p.slug}`} className="project-link" aria-label={`Ver proyecto ${p.name}`}>
      <div className="project-visual">{p.cover.src ? <Image src={p.cover.src} alt={p.cover.alt} fill sizes={featured && i === 0 ? '(max-width: 760px) 100vw, 90vw' : '(max-width: 760px) 100vw, 48vw'} style={{ objectFit: p.cover.fit || 'cover' }} priority={i === 0} /> : <Placeholder label={p.cover.caption} number={p.number} variant={p.slug} />}</div>
      <div className="project-caption"><span className="project-number">{p.number}</span><div><h3>{p.name}</h3><p>{p.subtitle}</p></div><span className="project-date">{p.year || 'Taller VIII'}</span></div>
      <div className="project-caption-foot"><span>{p.type}</span><span>Explorar proyecto</span></div>
    </Link>
  </article>)}</div>;
}
