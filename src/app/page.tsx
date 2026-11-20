import Link from 'next/link';
import { ProjectGrid } from '@/components/project-grid';
import { ContactBand } from '@/components/footer';
export default function Home() {
  return <>
    <section className="hero shell"><div className="hero-kicker"><p className="eyebrow">PORTAFOLIO DE ARQUITECTURA</p><p className="eyebrow">SANTA CRUZ DE LA SIERRA · BOLIVIA</p></div><h1>Arquitectura,<br />diseño y <em>representación.</em></h1><div className="hero-bottom"><span className="hero-line" aria-hidden="true" /><p>Una selección de proyectos que exploran la relación entre espacio, funcionalidad y experiencia humana.</p><a href="#seleccion">Descubrir proyectos <span aria-hidden="true">↓</span></a></div></section>
    <section className="shell selected-work" id="seleccion"><div className="section-heading"><h2 className="eyebrow">PROYECTOS SELECCIONADOS</h2><span className="small-label">ACADÉMICOS · 2024—2026</span></div><ProjectGrid featured /></section>
    <section className="home-about shell"><p className="eyebrow">UNA MIRADA PERSONAL</p><div><h2>Del concepto<br />a la <em>experiencia espacial.</em></h2><p>Soy María Laura, graduada en Arquitectura y Urbanismo por UNIVALLE. Mi trabajo reúne diseño arquitectónico, documentación técnica, modelado tridimensional y visualización fotorrealista.</p><Link className="text-link" href="/sobre-mi">Conoce mi trayectoria</Link></div></section>
    <ContactBand />
  </>;
}
