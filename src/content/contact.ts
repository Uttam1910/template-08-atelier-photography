import type { ContactChannel, StudioLocation } from "./types";

export const contact = {
  eyebrow: "Contact",
  title: "Start a conversation",
  lead: "Commissions, collaborations and print enquiries all reach the same inbox. A sentence about the project and a rough date is enough to begin — we reply to everything within two working days.",
  channels: [
    {
      label: "Commissions",
      value: "studio@atelier.example",
      href: "mailto:studio@atelier.example",
    },
    {
      label: "Prints & licensing",
      value: "prints@atelier.example",
      href: "mailto:prints@atelier.example",
    },
    { label: "Telephone", value: "+351 21 000 0000", href: "tel:+351210000000" },
  ] satisfies ContactChannel[],
  locations: [
    {
      city: "Lisbon",
      lines: ["Rua da Boavista 128", "1200-070 Lisboa", "Portugal"],
      hours: "Monday to Friday, 09:00 – 18:00 WET",
    },
    {
      city: "Copenhagen",
      lines: ["Refshalevej 90", "1432 København K", "Denmark"],
      hours: "By appointment",
    },
  ] satisfies StudioLocation[],
  form: {
    title: "Project enquiry",
    /** Shown above the form and again on success — this template sends nothing. */
    demoNotice:
      "This is a demonstration form. It runs entirely in your browser, sends nothing and stores nothing.",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@example.com" },
      subject: { label: "Project type", placeholder: "Select a project type" },
      message: { label: "About the project", placeholder: "What are you making, and roughly when?" },
    },
    subjects: [
      "Architecture & interiors",
      "Editorial & documentary",
      "Brand & campaign",
      "Product & still life",
      "Prints & licensing",
      "Something else",
    ],
    submit: "Send enquiry",
    submitting: "Sending…",
    success: {
      title: "That would have been sent",
      body: "Nothing was submitted and no message left your browser. This form is a demonstration of the interaction only — connect it to your own endpoint to make it live.",
      reset: "Reset the form",
    },
    errors: {
      summary: "Please check the fields below.",
      name: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address, e.g. you@example.com.",
      subject: "Please choose a project type.",
      message: "Please tell us a little about the project (at least 20 characters).",
    },
  },
};
