export type ProjectImage = {
  src?: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  fit?: 'cover' | 'contain';
};
export type ProjectSection = { title: string; text?: string; images: ProjectImage[] };
export type Project = {
  slug: string; number: string; name: string; subtitle: string;
  year?: string; type: string; location?: string; studio: string;
  description: string; concept?: string; cover: ProjectImage;
  sections: ProjectSection[]; virtualTour?: string;
};
const pending = (caption: string, width = 1600, height = 1000): ProjectImage => ({
  caption, alt: `${caption}: imagen original pendiente de incorporar`, width, height,
});
const technicalSections = (): ProjectSection[] => [
  { title: 'Concepto y proceso', images: [pending('Diagrama conceptual')] },
  { title: 'Implantación y plantas', images: [pending('Implantación'), pending('Planta arquitectónica', 1200, 1200)] },
  { title: 'Cortes y elevaciones', images: [pending('Corte arquitectónico', 1800, 850), pending('Elevación', 1800, 850)] },
  { title: 'Axonometrías y detalles', images: [pending('Axonometría'), pending('Detalle constructivo', 1200, 1500)] },
  { title: 'Experiencia espacial', images: [pending('Render exterior'), pending('Render interior')] },
];
export const projects: Project[] = [
  {
    slug: 'crefet', number: '01', name: 'CREFET',
    subtitle: 'Centro de Rehabilitación Física y Entrenamiento Terapéutico',
    year: '2026', type: 'Salud y bienestar', studio: 'Proyecto de grado',
    location: 'Santa Cruz de la Sierra, Bolivia',
    description: 'Equipamiento arquitectónico que integra rehabilitación física, evaluación clínica y entrenamiento terapéutico mediante una organización espacial continua y circulaciones diferenciadas.',
    cover: pending('Vista principal · CREFET', 2000, 1100), sections: technicalSections(),
  },
  {
    slug: 'hospital', number: '02', name: 'HOSPITAL', subtitle: 'Arquitectura hospitalaria',
    type: 'Salud', studio: 'Taller VIII · Proyecto académico',
    description: 'Proyecto académico de arquitectura hospitalaria desarrollado en Taller VIII.',
    cover: pending('Vista principal · Hospital', 1600, 1200), sections: technicalSections(),
  },
  {
    slug: 'lumna', number: '03', name: 'LÜMNA HOTEL', subtitle: 'Arquitectura, experiencia y bienestar',
    year: '2025', type: 'Hospitalidad', studio: 'Taller VII · Proyecto académico',
    description: 'Proyecto hotelero con una exploración conceptual inspirada en los genes BRCA1 y BRCA2 y en la relación entre arquitectura, experiencia espacial y bienestar del usuario.',
    concept: 'La exploración conceptual toma como referencia los genes BRCA1 y BRCA2. Los diagramas originales permitirán presentar su desarrollo arquitectónico.',
    cover: pending('Vista principal · Lümna Hotel', 1400, 1700), sections: technicalSections(),
  },
  {
    slug: 'noble-crest', number: '04', name: 'NOBLE CREST ACADEMY', subtitle: 'Espacios para aprender y explorar',
    year: '2024', type: 'Educación', studio: 'Taller VI · Proyecto académico',
    description: 'Proyecto educativo organizado alrededor de espacios de aprendizaje, ciencia, arte y deporte.',
    cover: pending('Vista principal · Noble Crest Academy', 1800, 1000), sections: technicalSections(),
  },
];
