export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "Skincare" | "Nutrición" | "Cuidado personal" | "Botiquín" | "Bebé" | "Higiene";
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: "Nuevo" | "Top ventas" | "Oferta" | "Eco";
  emoji: string;
  desc: string;
};

export const categories = [
  "Todos",
  "Skincare",
  "Nutrición",
  "Cuidado personal",
  "Botiquín",
  "Bebé",
  "Higiene",
] as const;

export const products: Product[] = [
  { id: "p01", name: "Sérum Vitamina C 15%", brand: "Lumen", category: "Skincare", price: 32.9, oldPrice: 39.9, rating: 4.8, badge: "Top ventas", emoji: "✨", desc: "Antioxidante con efecto luminoso." },
  { id: "p02", name: "Retinol Nocturno 0.3%", brand: "Lumen", category: "Skincare", price: 28.5, rating: 4.7, badge: "Nuevo", emoji: "🌙", desc: "Renovación celular sin irritación." },
  { id: "p03", name: "Crema Hidratante Diaria", brand: "Hydra+", category: "Skincare", price: 18.9, rating: 4.6, emoji: "💧", desc: "Hidratación 24h con ácido hialurónico." },
  { id: "p04", name: "Protector Solar SPF50+", brand: "SunGuard", category: "Skincare", price: 22.0, rating: 4.9, badge: "Top ventas", emoji: "☀️", desc: "Acabado invisible, fluido ligero." },
  { id: "p05", name: "Multivitamínico Diario", brand: "VitaCore", category: "Nutrición", price: 24.9, rating: 4.5, emoji: "💊", desc: "Energía y defensas todo el día." },
  { id: "p06", name: "Magnesio Bisglicinato", brand: "VitaCore", category: "Nutrición", price: 19.9, oldPrice: 24.9, rating: 4.7, badge: "Oferta", emoji: "🧪", desc: "Relax muscular y descanso." },
  { id: "p07", name: "Omega-3 EPA/DHA", brand: "PureLab", category: "Nutrición", price: 29.5, rating: 4.6, emoji: "🐟", desc: "Cardio y cognición." },
  { id: "p08", name: "Colágeno Marino + C", brand: "PureLab", category: "Nutrición", price: 34.0, rating: 4.4, emoji: "🌊", desc: "Piel, pelo y articulaciones." },
  { id: "p09", name: "Probióticos 20MM", brand: "Biotik", category: "Nutrición", price: 26.9, rating: 4.5, badge: "Eco", emoji: "🌿", desc: "Salud digestiva y microbiota." },
  { id: "p10", name: "Champú Anticaída", brand: "Capilly", category: "Cuidado personal", price: 14.5, rating: 4.3, emoji: "💆", desc: "Fortalece el folículo capilar." },
  { id: "p11", name: "Pasta Dental Blanqueante", brand: "Whitox", category: "Higiene", price: 6.9, rating: 4.4, emoji: "🦷", desc: "Esmalte protegido, sonrisa blanca." },
  { id: "p12", name: "Cepillo Eléctrico Sonic", brand: "Whitox", category: "Higiene", price: 79.0, oldPrice: 99.0, rating: 4.8, badge: "Oferta", emoji: "🪥", desc: "5 modos, batería 30 días." },
  { id: "p13", name: "Gel de Ducha Calmante", brand: "Bodyly", category: "Cuidado personal", price: 9.9, rating: 4.5, emoji: "🛁", desc: "Avena y aloe, piel sensible." },
  { id: "p14", name: "Termómetro Infrarrojo", brand: "MediTech", category: "Botiquín", price: 39.0, rating: 4.6, badge: "Nuevo", emoji: "🌡️", desc: "Sin contacto, 1 segundo." },
  { id: "p15", name: "Tensiómetro Bluetooth", brand: "MediTech", category: "Botiquín", price: 59.0, rating: 4.7, emoji: "❤️", desc: "Sincroniza con tu móvil." },
  { id: "p16", name: "Pulsioxímetro Compacto", brand: "MediTech", category: "Botiquín", price: 24.9, rating: 4.4, emoji: "🫁", desc: "SpO2 y pulso al instante." },
  { id: "p17", name: "Crema Pañal Babé", brand: "TinyCare", category: "Bebé", price: 12.5, rating: 4.8, badge: "Top ventas", emoji: "👶", desc: "Barrera protectora 12h." },
  { id: "p18", name: "Champú Bebé Sin Lágrimas", brand: "TinyCare", category: "Bebé", price: 8.9, rating: 4.7, emoji: "🧸", desc: "Suave y dermatológicamente testado." },
  { id: "p19", name: "Leche Fórmula 1", brand: "TinyCare", category: "Bebé", price: 18.9, rating: 4.6, emoji: "🍼", desc: "Nutrición desde el día 1." },
  { id: "p20", name: "Mascarilla Hidrogel", brand: "Lumen", category: "Skincare", price: 5.9, rating: 4.3, badge: "Nuevo", emoji: "🎭", desc: "Efecto flash en 15 minutos." },
  { id: "p21", name: "Tónico Niacinamida 10%", brand: "Lumen", category: "Skincare", price: 16.9, rating: 4.6, emoji: "🧴", desc: "Poros y luminosidad." },
  { id: "p22", name: "Desodorante Mineral 48h", brand: "Bodyly", category: "Higiene", price: 7.9, rating: 4.2, badge: "Eco", emoji: "🌱", desc: "Sin aluminio, recargable." },
  { id: "p23", name: "Vendas Elásticas Pack 6", brand: "MediTech", category: "Botiquín", price: 11.0, rating: 4.5, emoji: "🩹", desc: "Adhesivas, hipoalergénicas." },
  { id: "p24", name: "Spray Garganta Propóleo", brand: "Biotik", category: "Botiquín", price: 9.5, rating: 4.6, emoji: "🍯", desc: "Alivio inmediato natural." },
  { id: "p25", name: "Crema Manos Reparadora", brand: "Hydra+", category: "Cuidado personal", price: 8.9, rating: 4.7, emoji: "🤲", desc: "Manos suaves todo el invierno." },
  { id: "p26", name: "Aceite Corporal Rosa Mosqueta", brand: "PureLab", category: "Cuidado personal", price: 21.0, rating: 4.6, emoji: "🌹", desc: "Regenerador, anti-marcas." },
  { id: "p27", name: "Vitamina D3 + K2", brand: "VitaCore", category: "Nutrición", price: 17.5, rating: 4.8, badge: "Top ventas", emoji: "🌞", desc: "Huesos e inmunidad." },
  { id: "p28", name: "Hilo Dental Premium x3", brand: "Whitox", category: "Higiene", price: 5.5, rating: 4.4, emoji: "🧵", desc: "Encerado, sabor menta." },
  { id: "p29", name: "Bálsamo Labial SPF15", brand: "SunGuard", category: "Skincare", price: 4.9, rating: 4.5, emoji: "💋", desc: "Hidrata y protege todo el día." },
  { id: "p30", name: "Test Embarazo Digital", brand: "MediTech", category: "Botiquín", price: 13.9, rating: 4.7, badge: "Nuevo", emoji: "✚", desc: "Resultado claro en 1 minuto." },
];
