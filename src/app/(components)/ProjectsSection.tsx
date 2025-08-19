import React from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';
import Link from "next/link";

export const ProjectsSection: React.FC = () => {
    const projects = [{
        id: 1,
        title: "ERP de Conciliação de Pagamentos",
        description: "Sistema completo de conciliação automatizada para 12 filiais, substituindo processos manuais em Excel/Access. Hoje processa mais de 7 milhões de registros.",
        tech: ["PHP", "Laravel", "MySQL", "jQuery", "Linux", "Apache"],
        highlights: ["Redução de 3h30 para <30min no processo", "De 2 colaboradores para apenas 1", "7+ milhões de registros processados", "Gestão automatizada de brindes e campanhas"],
        image: "/placeholder.svg", // Added image placeholder
    }, {
        id: 2,
        title: "Sistema de Abaixo-Assinado Escalável",
        description: "Liderança técnica na reconstrução total de sistema que colapsou com tráfego viral. Arquitetura preparada para milhões de acessos simultâneos.",
        tech: ["Next.js", "Laravel", "SSG", "Redis", "Queue Systems", "API REST", "CDN"],
        highlights: ["Liderança técnica do projeto", "Arquitetura para tráfego viral", "100% de confiabilidade em leads", "Documentação técnica completa"],
        image: "/placeholder.svg", // Added image placeholder
    }];

    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Projetos em Destaque
                </h2>
                <Link href="/projetos"
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    Ver todos
                    <ArrowRight className="w-4 h-4"/>
                </Link>
            </div>

            <div className="space-y-24">
                {projects.map(( project, index ) => (
                    <div key={project.id}
                         className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Image Container */}
                        <div
                            className={`rounded-lg bg-gray-200 dark:bg-gray-800/50 h-80 flex items-center justify-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                            <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
                        </div>

                        {/* Info Container */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            <ul className="mt-6 space-y-2">
                                {project.highlights.slice(0, 3).map(( highlight, i ) => (
                                    <li key={i}
                                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                        <Sparkles className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0"/>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map(( tech, i ) => (
                                    <span key={i}
                                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <div className="mt-8">
                                <Link href={`/projects/${project.id}`}
                                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
                                    Ver estudo de caso
                                    <ArrowRight className="w-4 h-4"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Projects Link */}
            <div className="text-center mt-16">
                <Link
                    href="/projetos"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                    Ver Todos os Projetos
                    <ArrowRight className="w-4 h-4"/>
                </Link>
            </div>
        </section>
    );
};
