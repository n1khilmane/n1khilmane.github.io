// Edit this file to change homepage content.

export type Mode = "work" | "life";

export const site = {
  name: "Nikhil Mane",
  url: "https://nikhilmane.com",
  city: "New York",
  tz: "America/New_York",
  // TODO: final bio copy
  bio: {
    work: "Bio TBD.",
    life: "Bio TBD.",
  } satisfies Record<Mode, string>,
  links: [
    { label: "X", href: "https://x.com/n1khilmane" },
    { label: "GitHub", href: "https://github.com/n1khilmane" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-mane-798b15147/" },
    { label: "Email", href: "mailto:nikhilmane1919@gmail.com" },
  ],
};

export type Project = {
  name: string;
  blurb: string;
  mode: Mode;
  href?: string; // omit to render a non-clickable card
  tag?: string; // e.g. "Building", "Prototype", "Acquired"
  thumb?: ImageMetadata; // import from src/assets; omit for typographic placeholder
};

export const projects: Project[] = [
  {
    name: "Togi",
    blurb: "Execution intelligence for sales teams.",
    mode: "work",
    tag: "Building",
    // href: "TODO",
  },
];
