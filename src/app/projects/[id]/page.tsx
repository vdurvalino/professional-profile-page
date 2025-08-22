import React from 'react';
import { projects } from '@/data/projects';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import ReactMarkdown from "react-markdown"
import {Button} from "@/components/ui/Button";


interface ProjectPageProps {
  id: string;
}

export default async function ProjectPage({params}: {params: Promise<ProjectPageProps>}) {
  const {id: projectId } = await params

  const project = projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-font-primary dark:text-font-primary-dark mb-4">Projeto não encontrado</h1>
        <p className="text-font-secondary dark:text-font-secondary-dark mb-8">
          O projeto que você está procurando não existe.
        </p>
        <Button as={Link} href="/projects">
          Voltar para todos os projetos
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para todos os projetos
        </Link>
      </div>

      <div className="grid md:grid-cols-6 gap-12">
        {/* Conteúdo Principal */}
        <div className="md:col-span-4">
          <div className="relative h-60 md:h-96 mb-8">
            <Image src={project.image} alt={project.title} priority={true} fill className={"object-cover rounded-lg"}/>
          </div>

          <h1 className="section mb-4">{project.title}</h1>
          <p className="section-description">{project.description}</p>
          <hr  className={"border-gray-200 my-8"}/>

          <div className={"text-font-secondary dark:text-font-secondary-dark"}>
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>
        </div>

        {/* Sidebar com Detalhes */}

        <div className="md:col-span-2">
          <div className="bg-surface dark:bg-surface-dark p-8 rounded-lg  sticky top-24">
            <h2 className="text-2xl font-bold text-font-primary dark:text-font-primary-dark mb-6">Detalhes do Projeto</h2>

            <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark mb-3">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/15 dark:bg-primary-dark/15 text-primary dark:text-primary-dark rounded-full text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark mb-3">Destaques e Responsabilidades</h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-font-secondary dark:text-font-secondary-dark">
                  <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
