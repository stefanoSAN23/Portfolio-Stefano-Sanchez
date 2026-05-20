import ticolancerImg from "../../../assets/images/projects/Ticolancer/ticolancer.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Ticolancer",
  theme: "dark",
  tags: [],
  description: "Un marketplace full-stack diseñado específicamente para pequeñas y medianas empresas en Costa Rica. Permitía a múltiples vendedores listar y administrar sus productos, y a los compradores explorar y comprar. Construido con Laravel, React, MySQL y Tailwind CSS, con APIs REST conectando el frontend y el backend, y una interfaz responsiva que funcionaba en múltiples dispositivos.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ticolancerImg,
        alt: "Plataforma Ticolancer",
        caption: "Marketplace Ticolancer",
      },
    },
  ],
} as const satisfies ProjectContent;
