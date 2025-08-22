"use client"

import React, {useMemo, useState} from 'react';
import {ArrowRight, Code2, Filter, Search, X} from 'lucide-react';
import {projects} from '@/data/projects';
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {ProjectsCard} from "@/components/ProjectsCard";

const ProjectsPage = () => {
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
    const [showFilters, setShowFilters] = useState(false);

    // Extract all unique technologies
    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        projects.forEach(project => {
            project.tech.forEach(tech => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, []);

    // Filter projects based on search and selected technologies
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            return selectedTech.length === 0 ||
                selectedTech.some(tech => project.tech.includes(tech));
        });
    }, [selectedTech]);

    const toggleTech = ( tech: string ) => {
        setSelectedTech(prev =>
            prev.includes(tech)
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        );
    };

    const clearFilters = () => {
        setSelectedTech([]);
    };

    return (
        <div className="min-h-screen pb-40">
            {/* Hero Section */}
            <section className="page mb-0 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="section mb-3">
                        Projetos & Cases
                    </h1>
                    <p className="section-description mx-auto mb-10">
                        Soluções digitais que entregam valor real e resultados medidos.
                    </p>


                    {/* Filter Button */}
                    <Button
                        onClick={() => setShowFilters(!showFilters)}
                        size={"lg"}
                        className="mt-6 relative"
                    >
                        <Filter className="w-4 h-4"/>
                        Filtrar por tecnologia
                        {selectedTech.length > 0 && (
                            <span
                                className="absolute -top-2 -right-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-primary border border-primary rounded-full text-xs">
                              {selectedTech.length}
                            </span>
                        )}
                    </Button>
                </div>
            </section>

            {/* Filters Section */}
            {showFilters && (
                <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 py-6">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {allTechnologies.map(tech => (
                                <Button
                                    size={"sm"}
                                    variant={selectedTech.includes(tech) ? "solid" : "outline"}
                                    key={tech}
                                    onClick={() => toggleTech(tech)}
                                    className={`rounded-full text-sm`}
                                >
                                    {tech}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <section className={"page"}>
                {/* Results Summary */}
                <div className="container mx-auto px-6 pt-8">
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-secondary dark:text-secondary-dark">
                            {filteredProjects.length}{' '}
                            {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-dark">
                            <Code2 className="w-4 h-4"/>
                            <span>Ordenado por relevância</span>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="container mx-auto px-6 pb-16">
                    <div className="space-y-32">
                        {filteredProjects.map(( project, index ) => (
                            <ProjectsCard key={project.id} index={index} project={{...project}}/>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div
                                className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                                <Search className="w-10 h-10 text-gray-400"/>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Nenhum projeto encontrado
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                                Tente ajustar seus filtros ou termos de busca para encontrar o que procura.
                            </p>
                            <Button onClick={clearFilters} size={"lg"}>
                                Limpar filtros
                                <X className="w-4 h-4"/>
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <div className="cta-banner">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="cta-headline">
                        Tem um projeto em mente?
                    </h2>
                    <p className="cta-sub-headline">
                        Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
                    </p>
                    <Link
                        href="/contact"
                        className="cta-button"
                    >
                        Iniciar conversa
                        <ArrowRight className="w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
