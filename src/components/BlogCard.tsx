'use client';

import React from 'react';
import {BookOpen, Calendar} from 'lucide-react';
import Link from "next/link";
import {Badge} from "@/components/ui/Badge";
import type {Entry} from "contentful";
import {useLocale} from "next-intl";
import {TypePostsSkeletonWithReadingTime} from "@/data/posts";


export const BlogPostCard: React.FC<Entry<TypePostsSkeletonWithReadingTime>> = ( {fields: post, sys}: Entry<TypePostsSkeletonWithReadingTime> ) => {
    const {resume, slug, title, tags, readingTime} = post
    const locale = useLocale()

    return (
        <Link href={`/${locale}/blog/${slug}`}>
            <article
                className="bg-surface dark:bg-surface-dark rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg cursor-pointer h-full"
            >
                <div className="flex items-center gap-3 text-sm text-font-secondary dark:text-font-secondary-dark mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4"/>
                        {new Date(sys.updatedAt).toLocaleDateString()}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4"/>
                        <>{readingTime}</> Min
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark mb-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <>{title}</>
                </h3>

                <p className="text-font-secondary dark:text-font-secondary-dark text-sm mb-4 line-clamp-3">
                    <>{resume}</>
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags!== undefined && tags?.length > 0 && tags?.map(( {fields} ) => (
                        <Badge size={'sm'} key={fields.slug} className="font-mono">#{fields.name}</Badge>
                    ))}
                </div>
            </article>
        </Link>
    );
};
