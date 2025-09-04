import React from 'react';
import {ArrowLeft, Sparkles} from 'lucide-react';
import Link from 'next/link';
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import {getProjectBySlug} from "@/data/projects";
import {getLocale, getTranslations} from "next-intl/server";
import ContentfulImage from "@/lib/contentful-image";
import {notFound} from "next/navigation";
import {RichTextContent} from "@/components/RichTextContent";


interface ProjectPageProps {
    slug: string;
}

export default async function ProjectPage( {params}: { params: Promise<ProjectPageProps> } ) {
    const {slug} = await params

    const [project, t, locale] = await Promise.all([
        await getProjectBySlug(slug),
        await getTranslations(),
        await getLocale()
    ]);

    if (!project) {
        notFound()
    }

    return (
        <div className="container max-w-7xl mx-auto px-6 py-16">
            <div className="mb-12">
                <Button as={Link} href={`/${locale}/projects`} variant={"outline"} className={"gap-2"}>
                    <ArrowLeft className="w-4 h-4"/>
                    {t("projectSlugPage_back_button")}
                </Button>
            </div>

            <div className="grid md:grid-cols-6 gap-12">
                {/* Conteúdo Principal */}
                <div className="md:col-span-4">
                    <div className="relative h-60 md:h-96 mb-8">
                        <ContentfulImage
                            src={project.fields.thumbnail.fields.file?.url || ""}
                            alt={project.fields.thumbnail.fields.description || ""}
                            priority={true}
                            fill
                            className={"object-cover rounded-lg"}
                        />
                    </div>

                    <h1 className="section mb-4">{project.fields.title}</h1>
                    <p className="section-description">{project.fields.excerpt}</p>
                    <hr className={"border-gray-200 dark:border-gray-700 my-8"}/>

                    <RichTextContent content={project.fields.content}/>

                </div>

                {/* Sidebar com Detalhes */}
                <div className="md:col-span-2">
                    <div className="bg-surface dark:bg-surface-dark p-8 rounded-lg sticky top-24">
                        <h2 className="text-2xl font-bold text-font-primary dark:text-font-primary-dark mb-6">
                            {t("projectSlugPage_details_title")}
                        </h2>

                        <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark mb-3">
                            {t("projectSlugPage_tech_title")}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.fields.tech.map(( tech ) => (
                                <Badge key={tech.sys.id} className="font-mono">{tech.fields.name}</Badge>
                            ))}
                        </div>

                        <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark mb-3">
                            {t("projectSlugPage_highlights_title")}
                        </h3>
                        <ul className="space-y-3">
                            {project.fields.highlights.map(( highlight, i ) => (
                                <li key={i}
                                    className="flex items-start gap-3 text-sm text-font-secondary dark:text-font-secondary-dark">
                                    <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0"/>
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