"use client"

import React, {useMemo, useState} from 'react';
import {ArrowRight, Code2, Filter, Search, X} from 'lucide-react';
import {projects} from '@/data/projects';
import Link from "next/link";
import Image from "next/image";
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
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-40">
            {/* Hero Section - versão minimalista */}
            <div className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Projetos & Cases
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                        Soluções digitais que entregam valor real e resultados medidos.
                    </p>


                    {/* Filter Button */}
                    <Button
                        onClick={() => setShowFilters(!showFilters)}
                        size={"lg"}
                        className="mt-6"
                    >
                        <Filter className="w-4 h-4"/>
                        Filtrar por tecnologia
                        {selectedTech.length > 0 && (
                            <span className="ml-1 px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                              {selectedTech.length}
                            </span>
                        )}
                    </Button>
                </div>
            </div>

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

            {/* Results Summary */}
            <div className="container mx-auto px-6 pt-8">
                <div className="flex items-center justify-between mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                        {filteredProjects.length}{' '}
                        {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
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

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 py-16 mt-32">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tem um projeto em mente?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
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
