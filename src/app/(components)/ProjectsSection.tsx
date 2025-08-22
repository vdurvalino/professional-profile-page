import React from 'react';
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {projects} from "@/data/projects";
import {Button} from "@/components/ui/Button";
import {ProjectsCard} from "@/components/ProjectsCard";

export const ProjectsSection: React.FC = () => {
    return (
        <section className="page">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                <h2 className="section">
                    Projetos em Destaque
                </h2>

                <Button
                    variant={"ghost"}
                    as={Link}
                    href="/projects"
                    className={"self-end"}
                >
                    Ver todos
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>

            <div className="space-y-24">
                {projects.map(( project, index ) => (
                    <ProjectsCard key={project.id} index={index} project={{...project}}/>
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
