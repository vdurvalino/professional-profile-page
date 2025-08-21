"use client"

import React, {useMemo, useState} from 'react';
import {ArrowRight, Award, Calendar, Code2, ExternalLink, Filter, Search, Sparkles, Star, Users, X} from 'lucide-react';
import {projects} from '@/data/projects';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/Button";

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
                        <div
                            key={project.id}
                            className="relative"
                        >
                            <div
                                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Image Container */}
                                <div
                                    className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 h-96 ${
                                        index % 2 !== 0 ? 'md:order-last' : ''
                                    }`}
                                >
                                    <Image src={project.image} alt={project.title} fill={true}
                                           className={"object-cover"}/>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div
                                            className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                                            <Star className="w-4 h-4"/>
                                            Destaque
                                        </div>
                                    )}
                                </div>

                                {/* Content Container */}
                                <div className="flex flex-col justify-center space-y-6">
                                    {/* Project Title */}
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="space-y-3">
                                        {project.highlights.slice(0, 3).map(( highlight, i ) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <Sparkles
                                                    className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0"/>
                                                <span
                                                    className="text-gray-600 dark:text-gray-400">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(( tech, i ) => (
                                            <span
                                                key={i}
                                                className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all ${
                                                    selectedTech.includes(tech)
                                                        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 ring-2 ring-gray-900 dark:ring-white'
                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Meta */}
                                    <div
                                        className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                                        {project.duration && (
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4"/>
                                                <span>{project.duration}</span>
                                            </div>
                                        )}
                                        {project.team && (
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4"/>
                                                <span>{project.team}</span>
                                            </div>
                                        )}
                                        {project.role && (
                                            <div className="flex items-center gap-2">
                                                <Award className="w-4 h-4"/>
                                                <span>{project.role}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <Button as={Link} size={"lg"} href={`/projects/${project.id}`}>
                                            Ver estudo de caso
                                            <ArrowRight
                                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            />
                                        </Button>

                                        {project?.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                                            >
                                                Ver projeto ao vivo
                                                <ExternalLink className="w-4 h-4"/>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
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
