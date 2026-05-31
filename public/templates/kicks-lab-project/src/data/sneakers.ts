import voltImg from "@/assets/sneaker-volt.jpg";
import emberImg from "@/assets/sneaker-ember.jpg";
import staticImg from "@/assets/sneaker-static.jpg";
import riotImg from "@/assets/sneaker-riot.jpg";
import haloImg from "@/assets/sneaker-halo.jpg";

export type Sneaker = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  swatch: string;
  price: string;
  weight: string;
  drop: string;
  material: string;
  image: string;
};

export const sneakers: Sneaker[] = [
  {
    id: "volt-01",
    name: "VOLT-01",
    tagline: "Eléctrica. Punzante. Imparable.",
    description:
      "Una silueta chunky tallada para los que viven el ritmo de la ciudad. Suela de doble densidad, malla técnica y un amarillo que se ve a tres calles.",
    color: "Acid Yellow",
    swatch: "#d4ff00",
    price: "€189",
    weight: "412g",
    drop: "10mm",
    material: "Malla técnica + TPU",
    image: voltImg,
  },
  {
    id: "ember",
    name: "EMBER",
    tagline: "Combustible puro para tus pies.",
    description:
      "Runner moderno con paneles laterales rayados y espuma de retorno energético. Diseñada para arder en pavimento y miradas.",
    color: "Solar Orange",
    swatch: "#ff5722",
    price: "€169",
    weight: "298g",
    drop: "8mm",
    material: "Mesh ligero + EVA",
    image: emberImg,
  },
  {
    id: "static",
    name: "STATIC",
    tagline: "Silencio que grita estilo.",
    description:
      "Una low-top minimalista en cuero blanco con suela de caucho negro. Versátil para cualquier outfit, brutalist en cada detalle.",
    color: "Pure White",
    swatch: "#ffffff",
    price: "€139",
    weight: "356g",
    drop: "6mm",
    material: "Cuero premium + Caucho",
    image: staticImg,
  },
  {
    id: "riot",
    name: "RIOT",
    tagline: "Provoca. Repite.",
    description:
      "High-top de plataforma con suela neón. Un statement piece para los que no piden permiso. Made for the front row.",
    color: "Red / Toxic",
    swatch: "#ef4444",
    price: "€219",
    weight: "498g",
    drop: "12mm",
    material: "Cuero sintético + Phylon",
    image: riotImg,
  },
  {
    id: "halo",
    name: "HALO",
    tagline: "Ligera como el aire que respiras.",
    description:
      "Tejido knit en azul pastel con detalles cromados. Cámara de aire visible, sensación cloud-walk garantizada todo el día.",
    color: "Sky Chrome",
    swatch: "#a5d8ff",
    price: "€199",
    weight: "264g",
    drop: "8mm",
    material: "Flyknit + Air Pod",
    image: haloImg,
  },
];
