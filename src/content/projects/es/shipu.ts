import shipuImg from "../../../assets/images/projects/Shipu/shipu.jpeg";
import type { ProjectContent } from "../../types";

export default {
  title: "Shipu Restaurante",
  theme: "dark",
  tags: [],
  description: "Un sitio web responsivo para un restaurante chino, que presenta un menú dinámico que podía actualizarse sin tocar el código. Me encargué tanto del diseño visual como de la lógica del lado del servidor — construido con HTML, CSS, JavaScript, PHP y MySQL. Probablemente uno de mis primeros proyectos integrales, abarcando desde el diseño de la interfaz hasta la base de datos.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: shipuImg,
        alt: "Restaurante Shipu",
        caption: "Sitio web de Shipu",
      },
    },
  ],
} as const satisfies ProjectContent;
