import Section from "../Layout/Section";
import ProjectsDisplay from "./ProjectsDisplay";
import godofgames from "../../../../public/godofgames_pres.png";
import linkeys from "../../../../public/linkeys_pres.png";
import jobteaser from "../../../../public/combined_image.png";

const projects = [
  {
    id: "godofgames",
    title: "God of Games",
    description:
      "Plateforme de jeux vidéo en ligne avec système de matchmaking et classements. Interface utilisateur réactive et expérience utilisateur fluide.",
    technologies: ["React", "NextJs", "Vercel", "Prisma", "Tailwind CSS"],
    image: godofgames,
    alt: "God of Games project preview",
  },
  {
    id: "linkeys",
    title: "Linkeys",
    description:
      "Solution de gestion de liens et de partage de contenu pour les professionnels. Analyse de données et tableaux de bord personnalisables.",
    technologies: [
      "React",
      "TypeScript",
      "AWS",
      "Node",
      "PostgreSQL",
      "Docker",
    ],
    image: linkeys,
    alt: "Linkeys project preview",
  },
  //   {
  //     id: "MFI",
  //     title: "Météo France Internationale",
  //     description:
  //       "Dans le cadre d'un contrat avec l'Indonésie, l'objectif de ma mission a été d'améliorer le système météo en gérant les aspects techniques et l'interfaçage avec les autres équipes.",
  //     technologies: [
  //       "Next.js",
  //       "TypeScript",
  //       "PostgreSQL",
  //       "Tailwind CSS",
  //       "Docker",
  //     ],
  //     image: linkeys,
  //     alt: "Linkeys project preview",
  //   },
  //   {
  //     id: "chouette",
  //     title: "La Chouette Coop",
  //     description:
  //       "Au sein d'un supermarché coopératif, je participe à la gestion des outils informatiques et au développement des nouveaux besoins.",
  //     technologies: [
  //       "Next.js",
  //       "TypeScript",
  //       "PostgreSQL",
  //       "Tailwind CSS",
  //       "Docker",
  //     ],
  //     image: linkeys,
  //     alt: "Chouette preview",
  //   },
  //   {
  //     id: "telemedecine",
  //     title: "Parsys télémédecine",
  //     description:
  //       "J'ai maintenu et amélioré d'une application client lourd NW.js embarqué pour des stations médicales de télémédecine. J'ai aussi développé dune application mobile en Cordova pour l'ARS Île-de-France afin de permettre le suivi de patients entre différents professionnels de la santé.",
  //     technologies: ["NW.js", "Cordova", "React Native"],
  //     image: linkeys,
  //     alt: "Parsys project preview",
  //   },
  {
    id: "Jobteaser",
    title: "Jobteaser",
    description:
      "J'ai participé à la refonte de la plateforme afin de migrer le site vers une SPA en React pour Jobteaser afin de permettre aux étudiants de rechercher et postuler à des emplois.",
    technologies: ["React", "Redux", "CircleCI"],
    image: jobteaser,
    alt: "Jobteaser preview",
  },
  //   ...jobProjects,
];

export default function Projects() {
  return (
    <Section id="projets" title="Projets" className="relative">
      <ProjectsDisplay projects={projects} />
    </Section>
  );
}
