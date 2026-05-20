import calendaryImg from "../../../assets/images/projects/Calendary/calendary.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Organizador de calendario",
  theme: "dark",
  tags: [],
  description: "Una herramienta web diseñada para que estudiantes universitarios organicen su horario académico. Los usuarios podían registrarse, iniciar sesión, crear y administrar eventos, y recibir notificaciones push como recordatorios. Construida con Laravel en el backend y React en el frontend, con un enfoque en la usabilidad y ayudar a los estudiantes a cumplir con sus fechas límite.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: calendaryImg,
        alt: "Herramienta de calendario",
        caption: "Panel de calendario",
      },
    },
  ],
} as const satisfies ProjectContent;
