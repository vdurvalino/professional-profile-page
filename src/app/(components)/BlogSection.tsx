'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {posts} from '@/data/posts';
import {useAppStore} from '@/stores/app-store';
import {Button} from "@/components/ui/Button";
import {BlogPostCard} from "@/components/BlogCard";

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
                    <BlogPostCard key={post.id} post={post}/>
                ))}
            </div>
        </section>
    );
};
