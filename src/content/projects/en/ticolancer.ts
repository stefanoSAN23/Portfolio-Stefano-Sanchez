import ticolancerImg from "../../../assets/images/projects/Ticolancer/ticolancer.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Ticolancer",
  theme: "dark",
  tags: [],
  description: "A full-stack marketplace built specifically for small and medium businesses in Costa Rica. Allowed multiple vendors to list and manage their products, and buyers to browse and purchase. Built with Laravel, React, MySQL and Tailwind CSS, with RESTful APIs connecting the frontend and backend, and a responsive UI that worked across devices.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ticolancerImg,
        alt: "Ticolancer Platform",
        caption: "Ticolancer Marketplace",
      },
    },
  ],
} as const satisfies ProjectContent;
