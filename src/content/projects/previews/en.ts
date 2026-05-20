import thumbnailShipu from "../../../assets/images/projects/Shipu/shipu.jpeg";
import thumbnailCalendary from "../../../assets/images/projects/Calendary/calendary.png";
import thumbnailTicolancer from "../../../assets/images/projects/Ticolancer/ticolancer.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Shipu Restaurant",
    slug: "shipu",
    thumbnail: thumbnailShipu,
    description: "Restaurant Management System",
    technologies: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Calendar Organizer",
    slug: "calendary",
    thumbnail: thumbnailCalendary,
    description: "Interactive Calendar Application",
    technologies: ["Laravel", "React", "PHP", "SQL", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Ticolancer",
    slug: "ticolancer",
    thumbnail: thumbnailTicolancer,
    description: "Freelancing Platform",
    technologies: ["Laravel", "React", "PHP", "SQL", "Tailwind CSS", "JavaScript"],
  },
] as const satisfies ProjectPreview[];
