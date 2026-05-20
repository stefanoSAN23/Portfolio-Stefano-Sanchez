import shipuImg from "../../../assets/images/projects/Shipu/shipu.jpeg";
import type { ProjectContent } from "../../types";

export default {
  title: "Shipu Restaurant",
  theme: "dark",
  tags: [],
  description: "A responsive website for a Chinese restaurant, featuring a dynamic menu that could be updated without touching the code. Handled both the visual design and the server-side logic — built with HTML, CSS, JavaScript, PHP and MySQL. Likely one of your first full end-to-end projects, covering everything from layout to database.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: shipuImg,
        alt: "Shipu Restaurant",
        caption: "Shipu Website",
      },
    },
  ],
} as const satisfies ProjectContent;
