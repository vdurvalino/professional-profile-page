import React from 'react';
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {BlogPostCard} from "@/components/BlogCard";
import {getPosts} from "@/data/posts";
import {getTranslations} from "next-intl/server";

export const BlogSection: React.FC = async () => {
    const t = await getTranslations();
    const {items: posts} = await getPosts()
    const blogPosts = posts.slice(0, 3);

    return (
        <section className="page">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <h2 className="section">
                    {t("homePage_blog_headline")}
                </h2>

                <Button
                    variant={"ghost"}
                    as={Link}
                    href="/blog"
                    className={"self-end"}
                >
                    {t("homePage_blog_button_1")}
                    <ArrowRight className="w-4 h-4"/>
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map(( post ) => (
                    <BlogPostCard key={post.sys.id} {...post}/>
                ))}
            </div>
        </section>
    );
};
