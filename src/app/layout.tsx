import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'María Laura Gumucio Rios | Arquitectura y Urbanismo', template: '%s | María Laura Gumucio Rios' },
  description: 'Portafolio de María Laura Gumucio Rios, graduada en Arquitectura y Urbanismo por UNIVALLE. Proyectos, representación arquitectónica y experiencia profesional en Bolivia.',
  openGraph: { title: 'María Laura Gumucio Rios · Arquitectura', description: 'Arquitectura, diseño y representación. Portafolio personal.', locale: 'es_BO', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><Header /><main id="contenido">{children}</main><Footer /></body></html>;
}
