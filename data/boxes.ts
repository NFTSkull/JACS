export interface BoxDimensions {
  largo: number;
  ancho: number;
  alto: number;
}

export interface Box {
  id: string;
  slug: string;
  nombre: string;
  capacidad_kg: number;
  apilable: boolean;
  dimensiones_exteriores_cm: BoxDimensions;
  peso_kg: number;
  material: string;
  descripcion: string;
  personalizacion: string[];
  imagen: string;
  tags: string[];
}

export const boxes: Box[] = [
  {
    id: "allende-30kg",
    slug: "caja-allende-30kg",
    nombre: "Caja Allende",
    capacidad_kg: 30,
    apilable: true,
    dimensiones_exteriores_cm: { largo: 54, ancho: 35, alto: 32 },
    peso_kg: 2.0,
    material: "Polipropileno (reciclado)",
    descripcion: "Caja plástica en PP; fácil de lavar, no absorbe humedad ni olores, sin clavos ni astillas; amigable con el ambiente. Ventilación ideal para conservar frescura.",
    personalizacion: ["Logotipo alto relieve", "Hot stamping"],
    imagen: "/products/boxes/allende-30kg.webp",
    tags: ["Ventilación", "Apilable"]
  }
];
