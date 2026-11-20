import type { Metadata } from 'next';
import { profile } from '@/data/profile';
export const metadata: Metadata = { title: 'Currículum vitae' };
export default function CVPage() {
  return <div className="shell page-content cv-page"><div className="page-intro"><p className="eyebrow">TRAYECTORIA PROFESIONAL</p><h1>Currículum<br /><em>vitae.</em></h1><p>Formación, experiencia y herramientas para el desarrollo de proyectos arquitectónicos.</p></div><section className="cv-panel"><div><p className="eyebrow">MARÍA LAURA GUMUCIO RIOS</p><h2>Arquitectura<br />y Urbanismo</h2><p>Universidad del Valle · UNIVALLE<br />Santa Cruz de la Sierra, Bolivia</p></div><div>{profile.cvPath ? <a className="button" href={profile.cvPath} download>Descargar CV <span>PDF</span></a> : <><button className="button" disabled aria-describedby="cv-status">Descargar CV <span>PDF</span></button><p id="cv-status" className="small-label">PDF definitivo pendiente de incorporar.</p></>}<a className="text-link" href={`mailto:${profile.email}?subject=Solicitud%20de%20CV`}>Solicitar CV por correo</a></div></section></div>;
}
