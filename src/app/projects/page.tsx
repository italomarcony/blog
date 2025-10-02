import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Pokedex Digital",
    description:
      "Uma Pokedex interativa e moderna que permite explorar informações detalhadas sobre diferentes Pokémon. Desenvolvida com uma interface intuitiva e responsiva, consumindo dados da PokéAPI.",
    url: "https://pokedex-digital.onrender.com/",
    imageUrl: "/projects/pokedex-digital.png",
    githubUrl: "https://github.com/italomarcony/PokedexDigital",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#DD0031] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Angular
        </span>
        <span className="rounded-full bg-[#000000] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Flask
        </span>
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          TypeScript
        </span>
        <span className="rounded-full bg-[#3776AB] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Python
        </span>
      </div>
    ),
  },
  {
    name: "Cat API",
    description:
      "O site é uma plataforma interativa dedicada a amantes de gatos, oferecendo informações completas sobre diferentes raças de gatos, além de recursos que ajudam os usuários a descobrir e comparar suas características favoritas felinas.",
    url: "https://italomarcony.github.io/teste-catapi/",
    imageUrl: "/projects/cat-api.png",
    githubUrl: "https://github.com/italomarcony/teste-catapi",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#61DAFB] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          React
        </span>
        <span className="rounded-full bg-[#F7DF1E] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          JavaScript
        </span>
        <span className="rounded-full bg-[#E34F26] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          HTML5
        </span>
        <span className="rounded-full bg-[#1572B6] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          CSS3
        </span>
      </div>
    ),
  },
  {
    name: "Calculadora Energia",
    description:
      "Sistema web para cálculo e análise de consumo energético. Permite aos usuários calcular custos de energia elétrica com base em diferentes parâmetros, auxiliando na gestão e economia de energia residencial e comercial.",
    url: "https://calculadora-energia-eight.vercel.app/",
    imageUrl: "/projects/calculadora-energia.png",
    githubUrl: "https://github.com/italomarcony/CalculadoraEnergia",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#61DAFB] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          React
        </span>
        <span className="rounded-full bg-[#646CFF] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Vite
        </span>
        <span className="rounded-full bg-[#38BDF8] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Tailwind CSS
        </span>
        <span className="rounded-full bg-[#3776AB] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Python
        </span>
        <span className="rounded-full bg-[#000000] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Flask
        </span>
      </div>
    ),
  },
  {
    name: "Todo List",
    description:
      "Aplicativo de lista de tarefas moderno e funcional para gerenciar suas atividades diárias. Interface intuitiva que permite adicionar, editar, marcar como concluído e excluir tarefas, com design responsivo e experiência de usuário otimizada.",
    url: "https://todo-list-bice-delta-71.vercel.app/",
    imageUrl: "/projects/todo-list.png",
    githubUrl: "https://github.com/italomarcony/todo-list",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#61DAFB] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          React
        </span>
        <span className="rounded-full bg-[#646CFF] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Vite
        </span>
        <span className="rounded-full bg-[#38BDF8] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Tailwind CSS
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="dark:zinc-500 flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-600 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        alt={`Imagem do projeto ${name}`}
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visitar site
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> Ver código
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projetos
      </h1>
      {projects.length > 0 ? (
        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-zinc-500 dark:text-zinc-400">
          Em breve, novos projetos serão adicionados aqui.
        </p>
      )}
    </>
  );
}
