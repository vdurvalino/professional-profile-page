import React from 'react';
import {getPosts} from "@/data/posts";
import {getTranslations} from "next-intl/server";
import {BlogPostCard} from "@/components/BlogCard";

const BlogPage = async () => {
    const [posts, t] = await Promise.all([
        getPosts(),
        getTranslations()
    ]);

    return (
        <section className="page mb-0 border-b border-gray-200 dark:border-gray-800 pb-40 pt-24">
            <div className="container mx-auto text-center">
                <h1 className="section mb-3">
                    {t("blogPage_title")}
                </h1>
                <p className="section-description mx-auto mb-10">
                    {t("blogPage_description")}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {posts.items.map(( post ) => (
                    <BlogPostCard key={post.sys.id} {...post} />
                ))}
            </div>
        </section>
    );
};

export default BlogPage;