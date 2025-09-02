import React from 'react';
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {ProjectsCard} from "@/components/ProjectsCard";
import {getTranslations} from "next-intl/server";
import {getProjects} from "@/data/projects";

export const ProjectsSection: React.FC = async () => {
    const t = await getTranslations();
    const {items: projects} = await getProjects()


    return (
        <section className="page">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                <h2 className="section">
                    {t("homePage_projects_headline")}
                </h2>

                <Button
                    variant={"ghost"}
                    as={Link}
                    href="/projects"
                    className={"self-end"}
                >
                    {t("homePage_projects_button_1")}
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>
            <div className="space-y-24">
                {projects.map(( project, index ) => (
                    <ProjectsCard key={project.sys.id} index={index} project={project}/>
                ))}
            </div>

            {/* View All Projects Link */}
            <div className="text-center mt-16">
                <Button size={'lg'} variant={"outline"} as={Link} href={`/projects`}>
                    {t("homePage_projects_button_2")}
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>
        </section>
    );
};
