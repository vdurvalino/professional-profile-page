import React from 'react';
import {ArrowRight, Sparkles, Star} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/Button";

interface ProjectsCardProps {
    index: number
    project: {
        id: number,
        title: string
        description: string
        content: string
        featured: boolean,
        tech: string[],
        highlights: string[],
        image: string
    }
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ( {project, index}: ProjectsCardProps ) => {
    const {id, title, description, tech, highlights, image, featured} = project

    return (
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Container */}
            <div className={`relative group overflow-hidden rounded-2xl h-50 md:h-80 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <Image
                        src={image}
                        alt={title}
                        fill={true}
                        className={"object-cover"}
                        priority={index === 0}
                    />

                    {/* Featured Badge */}
                    {featured && (
                        <div
                            className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                            <Star className="w-4 h-4"/>
                            Destaque
                        </div>
                    )}
            </div>

            {/* Info Container */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-font-primary dark:text-font-primary-dark mb-4">
                    {title}
                </h3>
                <p className="text-font-secondary dark:text-secondary-dark leading-relaxed">
                    {description}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-2 text-font-secondary dark:text-secondary-dark">
                    {highlights.slice(0, 3).map(( highlight, i ) => (
                        <li key={i}
                            className="flex items-start gap-3 text-sm">
                            <Sparkles className="w-4 h-4 text-primary dark:primary-dark mt-1 flex-shrink-0"/>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                    {tech.slice(0, 3).map((tech, i) => (
                        <span key={i}
                              className="px-3 py-1 bg-primary/15 dark:bg-primary-dark/15 text-gray-600 dark:text-gray-400 rounded-full text-sm font-mono">
                            {tech}
                        </span>
                    ))}
                    {tech.length > 3 && (
                        <span
                            className="px-3 py-1 bg-primary/15 dark:bg-primary-dark/15 text-gray-600 dark:text-gray-400 rounded-full text-sm font-mono">
                            +{tech.length - 3}
                        </span>
                    )}
                </div>

                {/* Button */}
                <div className="mt-8">
                    <Button size={'lg'} as={Link} href={`/projects/${id}`}>
                        Ver estudo de caso
                        <ArrowRight className="w-4 h-4"/>
                    </Button>
                </div>
            </div>
        </div>
    );
};
