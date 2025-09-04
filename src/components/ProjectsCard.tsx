"use client"

import React from 'react';
import {ArrowRight, Sparkles, Star} from 'lucide-react';
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import {ChainModifiers, Entry} from "contentful";
import {TypeProjectSkeleton} from "@/types/contentful";
import ContentfulImage from "@/lib/contentful-image";
import {useLocale, useTranslations} from "next-intl";

interface ProjectsCardProps {
    index: number
    project:  Entry<TypeProjectSkeleton, ChainModifiers, string>
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ( {project, index}: ProjectsCardProps ) => {
    const {title, slug, excerpt, thumbnail, highlighted, tech, highlights} = project?.fields
    const t = useTranslations()
    const locale = useLocale()

    return (
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Container */}
            <div
                className={`relative group overflow-hidden rounded-2xl h-50 md:h-80 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <ContentfulImage
                    src={thumbnail?.fields?.file?.url}
                    alt={thumbnail?.fields?.title}
                    fill={true}
                    className={"object-cover"}
                    priority={index === 0}
                />

                {/* Featured Badge */}
                {highlighted && (
                    <div
                        className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4"/>
                        {t("card_projects_highlighted")}
                    </div>
                )}
            </div>

            {/* Info Container */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-font-primary dark:text-font-primary-dark mb-4">
                    <>{title}</>
                </h3>
                <p className="text-font-secondary dark:text-secondary-dark leading-relaxed">
                    <>{excerpt}</>
                </p>
                {/* Highlights */}
                <ul className="mt-6 space-y-2 text-font-secondary dark:text-secondary-dark">
                    {highlights && highlights?.length > 0 && highlights?.slice(0, 3).map(( highlight, i ) => (
                        <li key={i}
                            className="flex items-start gap-3 text-sm">
                            <Sparkles className="w-4 h-4 text-primary dark:primary-dark mt-1 flex-shrink-0"/>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                    {tech && tech.length > 0 && tech.slice(0, 5).map(( {fields}, i ) => (
                        <Badge key={i} className={"font-mono"}>{fields?.name}</Badge>
                    ))}
                    {tech && tech?.length > 5 && (
                        <Badge className={"font-mono"}>+{tech && tech?.length - 5}</Badge>
                    )}
                </div>

                {/* Button */}
                <div className="mt-8">
                    <Button size={'lg'} as={Link} href={`/${locale}/projects/${slug}`}>
                        {t("card_projects_button")}
                        <ArrowRight className="w-4 h-4"/>
                    </Button>
                </div>
            </div>
        </div>
    );
};
