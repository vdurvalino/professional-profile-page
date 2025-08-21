'use client';

import React from 'react';
import {posts} from '@/data/posts';
import Link from 'next/link';
import {BookOpen, Calendar} from 'lucide-react';
import {useAppStore} from '@/stores/app-store';

const BlogPage = () => {
    const {t: translations} = useAppStore();

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 min-h-[75vh]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{translations.blog}</h1>
            <p className={"mb-8 text-gray-600 dark:text-gray-400"}>
                Insights, tutorials, and thoughts on modern software development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(( post ) => (
                    <Link href={`/blog/${post.id}`} key={post.id} className={"rounded-lg"}>
                        <article
                            className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg cursor-pointer h-full flex flex-col"
                        >
                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300 mb-3">
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
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(( tag, index ) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                                    >
                    #{tag}
                  </span>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
