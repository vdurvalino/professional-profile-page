'use client';

import React from 'react';
import {BookOpen, Calendar} from 'lucide-react';
import Link from "next/link";

interface BlogPostCardProps {
    post: {
        id: number,
        title: string
        excerpt: string
        date: string
        readTime: string
        tags: string[]
    }
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ( {post}: BlogPostCardProps ) => {
    const {id, title, tags, excerpt, readTime, date} = post

    return (
        <Link href={`/blog/${id}`} key={id}>
            <article
                className="bg-surface dark:bg-surface-dark rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg cursor-pointer"
            >
                <div className="flex items-center gap-3 text-sm text-font-secondary dark:text-font-secondary-dark mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4"/>
                        {date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4"/>
                        {readTime}
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark mb-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    {title}
                </h3>

                <p className="text-font-secondary dark:text-font-secondary-dark text-sm mb-4 line-clamp-3">
                    {excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map(( tag, index ) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-primary/20 dark:bg-primary-dark/20 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </article>
        </Link>
    );
};
