'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [['Proyectos', '/proyectos'], ['Sobre mí', '/sobre-mi'], ['CV', '/cv'], ['Contacto', '/contacto']];
export function Header() {
  const pathname = usePathname();
  return <header className="site-header shell">
    <Link href="/" className="wordmark" aria-label="María Laura Gumucio Rios, inicio">MARÍA LAURA<br />GUMUCIO RIOS<span>ARQUITECTURA & URBANISMO</span></Link>
    <nav aria-label="Navegación principal">{links.map(([name, href]) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined}>{name}</Link>)}</nav>
  </header>;
}
