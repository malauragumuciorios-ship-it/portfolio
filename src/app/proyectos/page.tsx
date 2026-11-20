import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/project-grid';
export const metadata: Metadata = { title: 'Proyectos' };
export default function ProjectsPage() {
  return <div className="shell page-content"><div className="page-intro"><p className="eyebrow">PORTAFOLIO / PROYECTOS</p><h1>Cuatro proyectos.<br /><em>Distintas escalas.</em></h1><p>Una selección académica en torno a la salud, la hospitalidad y la educación.</p></div><ProjectGrid /></div>;
}
