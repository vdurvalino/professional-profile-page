import React from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';
import Link from "next/link";
import {projects} from "@/data/projects";
import Image from "next/image";
import {Button} from "@/components/ui/Button";

export const ProjectsSection: React.FC = () => {
    return (
        <section className="mb-40">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Projetos em Destaque
                </h2>

                <Button
                    variant={"ghost"}
                    as={Link}
                    href="/projects"
                >
                    Ver todos
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>

            <div className="space-y-24">
                {projects.map(( project, index ) => (
                    <div key={project.id}
                         className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Image Container */}
                        <div className={`relative h-80 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>

                            <Image
                                src={project.image}
                                alt={project.title}
                                placeholder={"blur"}
                                blurDataURL={project.image}
                                fill={true}
                                className={"object-cover rounded-lg"}
                                quality={100}
                            />
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
                                <Button size={'lg'} as={Link} href={`/projects/${project.id}`}>
                                    Ver estudo de caso
                                    <ArrowRight className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Projects Link */}
            <div className="text-center mt-16">
                <Button size={'lg'} variant={"outline"} as={Link} href={`/projects`}>
                    Ver Todos os Projetos
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>
        </section>
    );
};
