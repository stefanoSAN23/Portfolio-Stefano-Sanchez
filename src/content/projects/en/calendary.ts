import calendaryImg from "../../../assets/images/projects/Calendary/calendary.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Calendar Organizer",
  theme: "dark",
  tags: [],
  description: "A web tool designed for university students to organize their academic schedule. Users could register, log in, create and manage events, and receive push notifications as reminders. Built with Laravel on the backend and React on the frontend, focusing on usability and keeping students on top of their deadlines.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: calendaryImg,
        alt: "Calendary Tool",
        caption: "Calendar Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
