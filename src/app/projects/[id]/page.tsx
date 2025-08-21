import React from 'react';
import { projects } from '@/data/projects';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import ReactMarkdown from "react-markdown"

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projeto não encontrado</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">O projeto que você está procurando não existe.</p>
        <Link href="/projects" className="hover:underline">
          Voltar para todos os projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para todos os projetos
        </Link>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Conteúdo Principal */}
        <div className="md:col-span-3">
          <div className="relative h-96 mb-8">
            <Image src={project.image} alt={project.title} priority={true} fill className={"object-cover rounded-lg"}/>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
          <hr  className={"border-gray-200 my-8"}/>

          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>

        {/* Sidebar com Detalhes */}
        <div className="md:col-span-2">
          <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detalhes do Projeto</h2>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Destaques e Responsabilidades</h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <Sparkles className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
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
