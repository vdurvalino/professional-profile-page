'use client';

import React from 'react';
import {ArrowRight, BookOpen, Calendar} from 'lucide-react';
import Link from "next/link";
import {posts} from '@/data/posts';
import {useAppStore} from '@/stores/app-store';
import {Button} from "@/components/ui/Button";

export const BlogSection: React.FC = () => {
    const {t: translations} = useAppStore();
    const blogPosts = posts.slice(0, 3);

    return (
        <section className="mb-40">
            <div className="flex  flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {translations?.latestArticles}
                </h2>

                <Button
                    variant={"ghost"}
                    as={Link}
                    href="/blog"
                    className={"self-end"}
                >
                    {translations?.seeAll}
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map(( post ) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                        <article
                            className="bg-white dark:bg-gray-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg cursor-pointer"
                        >
                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300/80 mb-3">
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
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300/80 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(( tag, index ) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
};
