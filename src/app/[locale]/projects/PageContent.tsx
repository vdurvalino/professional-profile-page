"use client"

import React, {useMemo, useState} from 'react';
import {Code2, Filter, Search, X} from 'lucide-react';
import {Button} from "@/components/ui/Button";
import {ProjectsCard} from "@/components/ProjectsCard";
import {EntryCollection} from "contentful";
import {TypeProjectSkeleton} from "@/types/contentful";
import {useTranslations} from "next-intl";
import {useQueryState} from "nuqs";

type TechType = { "name": string; "slug": string; }

export const PageContent = ( {items: projects}: EntryCollection<TypeProjectSkeleton> ) => {
    const t = useTranslations()

    const [showFilters, setShowFilters] = useState(false);
    const [selectedTech, setSelectedTech] = useQueryState("tech")
    const selectedTechArray = selectedTech === "" ? [] : selectedTech?.split(",") || []

    // Extract all unique technologies
    const allTechnologies = useMemo(() => {
        const techMap = new Map<string, TechType>();
        projects.forEach(project => {
            project?.fields?.tech?.forEach(tech => {
                const {name, slug} = tech.fields;
                return techMap.set(slug, {name, slug})
            });
        });

        return Array.from(techMap.values()).sort(( a, b ) =>
            a.name.localeCompare(b.name)
        );
    }, [projects]);

    // Filter projects based on search and selected technologies
    const filteredProjects = useMemo(() => {
        if (selectedTech === "") {
            return projects
        }

        const filtered = projects.filter(project => {
            const techs = project?.fields?.tech ?? [];
            return (
                selectedTechArray.length === 0 ||
                techs.some(t => selectedTechArray.includes(t.fields.slug))
            );
        });

        return filtered.sort(( a, b ) => {
            const aTechs = (a?.fields?.tech ?? []).map(t => t.fields.slug);
            const bTechs = (b?.fields?.tech ?? []).map(t => t.fields.slug);

            const aMatches = aTechs.filter(slug => selectedTechArray.includes(slug)).length;
            const bMatches = bTechs.filter(slug => selectedTechArray.includes(slug)).length;

            return bMatches - aMatches; // mais relevantes primeiro
        });
    }, [projects, selectedTechArray]);

    const toggleTech = ( tech: string ) => {
        const updated = selectedTechArray.includes(tech)
            ? selectedTechArray.filter(t => t !== tech)
            : [...selectedTechArray, tech];
        setSelectedTech(updated.join(','));
    };


    const clearFilters = () => {
        setSelectedTech('');
    };

    return (
        <>
            {/* Hero Section */}
            <section className="page mb-0 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6 pt-24 pb-8 text-center">
                    <h1 className="section mb-3">
                        {t("projectsPage_headline")}
                    </h1>
                    <p className="section-description mx-auto mb-10">
                        {t("projectsPage_subHeadline")}
                    </p>
                    {/* Filter Button */}
                    <Button
                        onClick={() => setShowFilters(!showFilters)}
                        size={"lg"}
                        className="mt-6 relative"
                    >
                        <Filter className="w-4 h-4"/>
                        {t("projectsPage_button_filter")}
                        {selectedTechArray.length > 0 && (
                            <span
                                className="absolute -top-2 -right-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-primary border border-primary rounded-full text-xs">
                              {selectedTechArray.length}
                            </span>
                        )}
                    </Button>
                </div>
            </section>

            {/* Filters Section */}
            {showFilters && (
                <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 py-6 mb-12">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {allTechnologies.map(( {slug, name} ) => (
                                <Button
                                    size={"sm"}
                                    variant={selectedTechArray.includes(slug) ? "solid" : "outline"}
                                    key={slug}
                                    onClick={() => toggleTech(slug)}
                                    className={`rounded-full text-sm`}
                                >
                                    {name}
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
                            {filteredProjects.length === 1 ? t("projectsPage_oneProjectsFound") : t("projectsPage_manyProjectsFound")}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-dark">
                            <Code2 className="w-4 h-4"/>
                            <span>{t("projectsPage_relevanceOrdered")}</span>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="container mx-auto px-6 pb-16">
                    <div className="space-y-32">
                        {filteredProjects.map(( project, index ) => (
                            <ProjectsCard key={project.sys.id} index={index} project={{...project}}/>
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
                                {t("projectsPage_empty_headline")}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                                {t("projectsPage_empty_subHeadline")}
                            </p>
                            <Button onClick={clearFilters} size={"lg"}>
                                {t("projectsPage_empty_button")}
                                <X className="w-4 h-4"/>
                            </Button>
                        </div>
                    )}
                </div>
            </section>

        </>
    );
};