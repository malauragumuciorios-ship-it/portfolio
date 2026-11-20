export function Placeholder({ label, number = 'ML', variant = 'crefet' }: { label: string; number?: string; variant?: string }) {
  return <div className={`placeholder placeholder-${variant}`} role="img" aria-label={`${label}. Espacio reservado para imagen original.`}>
    <div className="placeholder-grid" aria-hidden="true" />
    <div className="placeholder-frame" aria-hidden="true"><span>{number}</span><i /></div>
    <div className="placeholder-top" aria-hidden="true"><span>ARCHIVO DE PROYECTO</span><span>ML / {number}</span></div>
    <div className="placeholder-bottom"><span>{label}</span><span>Imagen original pendiente</span></div>
  </div>;
}
