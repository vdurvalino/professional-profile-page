import React from 'react';
import {ArrowRight, BookOpen, Calendar} from 'lucide-react';
import Link from "next/link";

export const BlogSection: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Migrando de Monolito para Microserviços: Lições Aprendidas",
            excerpt: "Como realizamos a migração gradual de uma aplicação monolítica legada para uma arquitetura de microserviços, os desafios encontrados e as soluções implementadas.",
            date: "15 Jan 2024",
            readTime: "8 min de leitura",
            tags: ["Arquitetura", "DevOps", "Docker"]
        },
        {
            id: 2,
            title: "Otimizando Performance em React: Do Bundle ao Runtime",
            excerpt: "Técnicas avançadas para otimizar aplicações React em produção, desde code splitting até lazy loading e memoização eficiente.",
            date: "10 Jan 2024",
            readTime: "12 min de leitura",
            tags: ["React", "Performance", "Frontend"]
        },
        {
            id: 3,
            title: "n8n + IA: Automatizando Processos com Inteligência",
            excerpt: "Como integrar workflows n8n com modelos de IA para criar automações inteligentes que aprendem e se adaptam.",
            date: "05 Jan 2024",
            readTime: "10 min de leitura",
            tags: ["n8n", "IA", "Automação"]
        }
    ];

    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Últimos Artigos
                </h2>
                <Link href="/blog"
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    Ver todos
                    <ArrowRight className="w-4 h-4"/>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map(( post ) => (
                    <article
                        key={post.id}
                        className="bg-white dark:bg-gray-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg cursor-pointer"
                    >
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4"/>
                                {post.date}
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4"/>
                                {post.readTime}
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(( tag, index ) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                                >
                      #{tag}
                    </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
