import ts from "../../../../public/icons/typescript.webp";
import nodeIcon from "../../../../public/icons/node.webp";
import reactIcon from "../../../../public/icons/react.png";
import nextjsIcon from "../../../../public/icons/nextjs.webp";
import ansibleIcon from "../../../../public/icons/ansible.svg";
import dockerIcon from "../../../../public/icons/docker.png";
import gitlabIcon from "../../../../public/icons/gitlab.webp";
import pythonIcon from "../../../../public/icons/python.webp";
import postgresIcon from "../../../../public/icons/postgresql.webp";
import swarmIcon from "../../../../public/icons/docker-swarm.webp";
import golangIcon from "../../../../public/icons/go-logo.svg";
import rustIcon from "../../../../public/icons/rust.png";
import kubernetesIcon from "../../../../public/icons/kubernetes.webp";
import tailwindIcon from "../../../../public/icons/tailwind.webp";
import linuxIcon from "../../../../public/icons/linux.png";
import { StaticImageData } from "next/image";

export interface Skill {
  name: string;
  icon: string | StaticImageData;
  description: string;
}

export const expertiseSkills: Skill[] = [
  {
    name: "Typescript",
    icon: ts,
    description:
      "Langage indispensable pour structurer et pérenniser le développement frontend",
  },
  {
    name: "NodeJs",
    icon: nodeIcon,
    description:
      "Runtime performant pour développer des serveurs et APIs asynchrones",
  },
  {
    name: "React",
    icon: reactIcon,
    description:
      "Framework incontournable pour créer des interfaces utilisateur riches et réactives",
  },
  {
    name: "NextJs",
    icon: nextjsIcon,
    description:
      "Framework React complet permettant le SSR et un développement rapide et optimisé",
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
    description:
      "Framework CSS pour créer des interfaces responsives et performantes",
  },
  {
    name: "Ansible",
    icon: ansibleIcon,
    description:
      "Outil puissant pour industrialiser et automatiser les déploiements",
  },
  {
    name: "Docker",
    icon: dockerIcon,
    description:
      "Gestion de Containeurs permettant réplication, isolation et scalabilité des applications",
  },
  {
    name: "GitlabCi",
    icon: gitlabIcon,
    description:
      "Automatisation des tests et déploiements pour une livraison continue efficace",
  },
  {
    name: "Linux",
    icon: linuxIcon,
    description:
      "Système d'exploitation open source utilisé par 70% des serveurs web",
  },
];

export const maitriseSkills: Skill[] = [
  {
    name: "Python",
    icon: pythonIcon,
    description:
      "Langage polyvalent idéal pour l'IA et le développement d'APIs robustes",
  },
  {
    name: "Postgres",
    icon: postgresIcon,
    description:
      "Base de données relationnelle performante et fiable, référence du marché",
  },
  {
    name: "Swarm",
    icon: swarmIcon,
    description:
      "Orchestrateur natif Docker pour gérer des clusters de conteneurs",
  },
];

export const interesseSkills: Skill[] = [
  {
    name: "GoLang",
    icon: golangIcon,
    description:
      "Langage moderne conçu pour la performance et la programmation concurrente",
  },
  {
    name: "Rust",
    icon: rustIcon,
    description:
      "Langage système innovant garantissant sécurité mémoire et performances",
  },
  {
    name: "Kubernetes",
    icon: kubernetesIcon,
    description:
      "Orchestrateur puissant pour systèmes distribués hautement disponibles et scalables",
  },
];
