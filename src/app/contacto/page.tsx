import type { Metadata } from 'next';
import { profile } from '@/data/profile';
export const metadata: Metadata = { title: 'Contacto' };
export default function ContactPage() {
  return <div className="shell page-content contact-page"><div className="page-intro"><p className="eyebrow">CONTACTO</p><h1>Hablemos de<br /><em>lo que viene.</em></h1><p>Para conversar sobre oportunidades laborales y colaboraciones profesionales en arquitectura y diseño.</p></div><div className="contact-details"><div><h2>Correo electrónico</h2><a href={`mailto:${profile.email}`}>{profile.email}</a></div><div><h2>LinkedIn</h2><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/marialauragumuciorios</a></div><div><h2>Ubicación</h2><p>{profile.location}</p></div></div></div>;
}
