import thumbnailShipu from "../../../assets/images/projects/Shipu/shipu.jpeg";
import thumbnailCalendary from "../../../assets/images/projects/Calendary/calendary.png";
import thumbnailTicolancer from "../../../assets/images/projects/Ticolancer/ticolancer.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Shipu Restaurante",
    slug: "shipu",
    thumbnail: thumbnailShipu,
    description: "Sistema para restaurante",
    technologies: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Organizador de calendario",
    slug: "calendary",
    thumbnail: thumbnailCalendary,
    description: "Aplicación de calendario interactiva",
    technologies: ["Laravel", "React", "PHP", "SQL", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Ticolancer",
    slug: "ticolancer",
    thumbnail: thumbnailTicolancer,
    description: "Plataforma de freelancing",
    technologies: ["Laravel", "React", "PHP", "SQL", "Tailwind CSS", "JavaScript"],
  },
] as const satisfies ProjectPreview[];
