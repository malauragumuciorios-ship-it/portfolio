import Link from 'next/link';
import { profile } from '@/data/profile';
export function Footer() {
  return <footer className="site-footer shell"><p>María Laura Gumucio Rios<span>Arquitectura & Urbanismo</span></p><p>Santa Cruz de la Sierra<br />Bolivia</p><Link href="/contacto">Conversemos</Link><span className="copyright">© {new Date().getFullYear()} MLGR</span></footer>;
}
export function ContactBand() {
  return <section className="contact-band"><div className="shell"><p className="eyebrow">CONTACTO PROFESIONAL</p><h2>El próximo espacio<br />comienza con una <em>conversación.</em></h2><a href={`mailto:${profile.email}`}>Escríbeme</a></div></section>;
}
