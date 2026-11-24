import { ogPng, ACCENT } from "../../og";
import { site } from "../../data/site";

export const GET = () => ogPng({ title: site.name, kicker: "hello", meta: "work · life", accent: ACCENT.work });
