'use client';

import React from 'react';
import {posts} from '@/data/posts';
import {useAppStore} from '@/stores/app-store';
import {BlogPostCard} from "@/components/BlogCard";

const BlogPage = () => {
    const {t: translations} = useAppStore();

    return (
        <section className="page min-h-[75vh]">
            <div className="container mx-auto text-center">
                <h1 className="section mb-3">
                    {translations.blog}
                </h1>
                <p className="section-description mx-auto mb-10">
                    Insights, tutorials, and thoughts on modern software development
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {posts.map(( post ) => (
                    <BlogPostCard key={post.id} post={post}/>
                ))}
            </div>
        </section>
    );
};

export default BlogPage;
