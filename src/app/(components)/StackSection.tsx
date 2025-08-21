import React from 'react';
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/Button";

export const StackSection: React.FC = () => {
    const techStack = {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
        backend: ["PHP", "Laravel", "Node.js", "Rest API"],
        database: ["MySQL", "PostgreSQL", "Drizzle ORM", "Prisma ORM"],
        devops: ["Docker", "CI/CD", "Vercel", "Linux", "VPS"],
        tools: ["Git", "WebStorm", "Postman", "Figma"],
        IA: ["n8n", "Context/Prompt Engineering", "RAG", "MCP", "Gemini CLI"]
    };

    return (<section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Stack Tecnológica
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(( [category, techs] ) => (
                <div key={category}
                     className="bg-white dark:bg-gray-900/20 rounded-lg p-2 "
                >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                        {category === 'devops' ? 'DevOps' : category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techs.map(( tech, index ) => (<span
                            key={index}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-mono"
                        >
                      {tech}
                    </span>))}
                    </div>
                </div>
            ))}
        </div>

        {/* View Stack Link */}
        <div className="text-center mt-16">
            <Button
                size={"lg"}
                as={Link}
                href="/about#stack"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
                Detalhar Stack
                <ArrowRight className="w-4 h-4"/>
            </Button>
        </div>
    </section>);
};
