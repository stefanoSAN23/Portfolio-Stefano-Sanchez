export const social = [
  { url: "https://mail.google.com/mail/?view=cm&fs=1&to=stefano.sanchez.arguedas@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/stefano-sanchez-arguedas/", name: "linkedin" },
  { url: "https://wa.me/50661935531", name: "whatsapp" },
] as const satisfies { url: string; name: "mail" | "linkedin" | "whatsapp" }[];
