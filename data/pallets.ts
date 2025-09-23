export interface PalletDimensions {
  ancho?: string;
  largo?: string;
  ancho_cm?: number;
  largo_cm?: number;
}

export interface PalletLoads {
  estatica_kg: number;
  dinamica_kg: number;
  rack_kg: number | null;
}

export interface Pallet {
  id: string;
  slug: string;
  nombre: string;
  dimensiones: PalletDimensions;
  cargas: PalletLoads;
  peso_kg: number;
  material: string;
  descripcion: string;
  imagen: string;
  tags: string[];
}

export const pallets: Pallet[] = [
  {
    id: "js-01",
    slug: "tarima-plastica-js-01",
    nombre: "Tarima Plástica JS-01",
    dimensiones: { ancho: '48"', largo: '40"' },
    cargas: { estatica_kg: 3000, dinamica_kg: 1500, rack_kg: 400 },
    peso_kg: 9.7,
    material: "Polipropileno reciclado",
    descripcion: "Tarima plástica en PP, fácil de lavar, no absorbe humedad ni olores, sin clavos ni astillas; amigable con el medio ambiente al ser de material reciclado.",
    imagen: "/products/pallets/js-01.webp",
    tags: ["Rackeable", "Uso general"]
  },
  {
    id: "js-15",
    slug: "tarima-plastica-js-15",
    nombre: "Tarima Plástica JS-15",
    dimensiones: { ancho_cm: 100, largo_cm: 120 },
    cargas: { estatica_kg: 1000, dinamica_kg: 1000, rack_kg: null },
    peso_kg: 6.7,
    material: "Polipropileno reciclado",
    descripcion: "Tarima plástica ligera en PP reciclado; ideal para manejo y almacenamiento con ciclos de uso versátiles.",
    imagen: "/products/pallets/js-15.webp",
    tags: ["One-way", "Ligera"]
  },
  {
    id: "js-32",
    slug: "tarima-plastica-js-32",
    nombre: "Tarima Plástica JS-32",
    dimensiones: { ancho_cm: 100, largo_cm: 120 },
    cargas: { estatica_kg: 5000, dinamica_kg: 1000, rack_kg: 300 },
    peso_kg: 14,
    material: "Polipropileno reciclado",
    descripcion: "Tarima robusta para cargas exigentes, sanitizable y durable; alternativa a madera en operaciones intensivas.",
    imagen: "/products/pallets/js-32.webp",
    tags: ["Uso pesado", "Rackeable"]
  }
];
